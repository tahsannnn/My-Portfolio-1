import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROJECTS, EXPERIENCE, SKILL_CATEGORIES, PORTFOLIO_OWNER, PORTFOLIO_ROLE } from "../constants";

// Prepare context for the AI model
const systemContext = `
You are an AI Assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
${PORTFOLIO_OWNER} is a ${PORTFOLIO_ROLE}.

Here is the data about ${PORTFOLIO_OWNER}:

Skills:
${JSON.stringify(SKILL_CATEGORIES.map(c => c.skills).flat())}

Experience:
${JSON.stringify(EXPERIENCE)}

Projects:
${JSON.stringify(PROJECTS)}

Your goal is to answer visitor questions about ${PORTFOLIO_OWNER} based strictly on this data.
- Be professional, polite, and concise.
- If asked about contact info, suggest looking at the Contact section or form.
- If asked about something not in the data, politely say you don't have that information but they can ask ${PORTFOLIO_OWNER} directly via the contact form.
- Do not make up facts.
- Keep answers relatively short (under 100 words) unless detailed explanation is requested.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  try {
    const client = getClient();
    
    // Convert history to format expected by Chat (though we are just using generateContentStream here for simplicity with system instruction in every turn or using chat session)
    // A better approach for maintaining context is using ai.chats.create
    
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemContext,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({
      message: newMessage
    });

    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        onChunk(c.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    onChunk("I'm sorry, I'm having trouble connecting to the AI service right now. Please try again later.");
  }
};

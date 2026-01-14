
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStylingAdvice(userPrompt: string, productContext: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are 'Harshita', the expert AI Stylist for Harsh Fashion, a luxury Indian ethnic wear brand. 
      The user is asking: "${userPrompt}". 
      Here is context about our current collection: ${productContext}.
      
      Provide personalized styling advice that reflects Indian heritage, culture, and modern fashion trends. 
      Keep your response concise (under 150 words), warm, and encouraging. 
      Mention specific types of clothing (like Sarees, Kurtas, or Lehengas) from our collection if relevant.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text || "I'm sorry, I couldn't generate styling advice right now. Please try again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong while connecting to my fashion brain. Please try again later.";
  }
}

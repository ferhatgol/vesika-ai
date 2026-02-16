import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends the image to Gemini to be processed into a passport photo.
 */
export async function processPassportPhoto(
  base64Image: string, 
  mimeType: string
): Promise<string> {
  
  const model = 'gemini-2.5-flash-image';
  
  const prompt = `
    Act as a professional photo lab expert specializing in biometric passport photos.
    Transform this image into a studio-quality passport photo.
    
    CRITICAL PROCESSING INSTRUCTIONS:

    1. COLOR CORRECTION & WHITE BALANCE (PRIORITY):
       - Fix the white balance to match neutral studio lighting (approx 5500K). Remove any yellow (warm) or blue (cool) color casts caused by bad indoor lighting.
       - Ensure skin tones look natural, healthy, and vibrant.
       - Adjust exposure and contrast so the face is bright and clear, but not overexposed. 
       - Remove any "muddy" or dull tones to give it a professional finish.

    2. LIGHTING:
       - Simulate a professional "butterfly" or flat studio lighting setup.
       - Eliminate harsh shadows on the face (especially under eyes, nose, and chin).
       - Ensure the lighting is soft and even across the entire face.

    3. BACKGROUND:
       - Remove the current background completely.
       - Replace it with a solid, pure WHITE background (#FFFFFF). No shadows on the background.

    4. ALIGNMENT & CROP:
       - Center the person's head and upper shoulders.
       - Ensure the face is facing forward.
       - Crop to a standard vertical passport aspect ratio (approximately 3:4).

    5. INTEGRITY:
       - DO NOT alter the person's facial features (nose shape, eye size, jawline). The biometric identity must be preserved.
       - Keep the texture of the skin realistic (do not over-smooth like a plastic filter).
    
    Return ONLY the processed image.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Extract the image from the response
    let processedImageBase64 = '';
    
    // Iterate through parts to find the image (it might not be the first part)
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          processedImageBase64 = part.inlineData.data;
          break; // Found the image
        }
      }
    }

    if (!processedImageBase64) {
      throw new Error("No image data returned from the model.");
    }

    return processedImageBase64;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
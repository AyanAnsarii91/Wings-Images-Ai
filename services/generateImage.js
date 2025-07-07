export const generateImage = async (prompt, API_KEY) => {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
      }),
    }
  );

  const json = await res.json();

  if (json.error) throw new Error(json.error.message);

  const parts = json.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find((p) => p.inlineData);

  if (imgPart) {
    return `data:${imgPart.inlineData.mimeType};base64,${imgPart.inlineData.data}`;
  } else {
    throw new Error("No image received, try refining the prompt.");
  }
};

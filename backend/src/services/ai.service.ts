import { model } from "../config/gemini";
import { CRM_PROMPT } from "../prompts/crm.prompt";

export async function extractCRM(rows: any[]) {
  const prompt = `
${CRM_PROMPT}

CSV Records:

${JSON.stringify(rows)}
`;

  console.log("🚀 Sending request to Gemini...");

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  console.log("========== GEMINI RESPONSE ==========");
  console.log(text);
  console.log("=====================================");

  const clean = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(clean);
}
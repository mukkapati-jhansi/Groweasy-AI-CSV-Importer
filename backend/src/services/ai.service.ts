import { model } from "../config/gemini";
import { CRM_PROMPT } from "../prompts/crm.prompt";

export async function extractCRM(rows: any[]) {
  const prompt = `
${CRM_PROMPT}

CSV Records:

${JSON.stringify(rows)}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text().trim();

  return JSON.parse(text);
}
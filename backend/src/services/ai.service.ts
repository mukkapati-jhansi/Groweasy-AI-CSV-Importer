import { ai } from "../config/gemini";
import { CRM_PROMPT } from "../prompts/crm.prompt";

const BATCH_SIZE = 25;

async function processBatch(rows: any[]) {
  const prompt = `
${CRM_PROMPT}

CSV Records:

${JSON.stringify(rows)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text ?? "[]";

  // Remove markdown code fences if Gemini returns them
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
}

export async function extractCRM(rows: any[]) {
  const results: any[] = [];

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);

    console.log(
      `Processing batch ${i / BATCH_SIZE + 1} (${batch.length} rows)`
    );

    let retries = 2;

    while (retries >= 0) {
      try {
        const records = await processBatch(batch);

        results.push(...records);

        break;
      } catch (error) {
        console.error("Batch Failed:", error);

        retries--;

        if (retries < 0) {
          console.log("Skipping batch...");
        }
      }
    }
  }

  return results;
}
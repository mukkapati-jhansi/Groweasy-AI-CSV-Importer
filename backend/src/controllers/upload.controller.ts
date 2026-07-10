import { Request, Response } from "express";
import { parseCsv } from "../services/csv.service";
import { extractCRM } from "../services/ai.service";

export async function uploadController(
  req: Request,
  res: Response
) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Parse uploaded CSV
    const rows = parseCsv(req.file.path);

    // Send rows to Gemini
    const crmRecords = await extractCRM(rows);

    return res.json({
      success: true,
      imported: crmRecords.length,
      skipped: rows.length - crmRecords.length,
      records: crmRecords,
    });

  } catch (error: any) {
  console.error("========== ERROR ==========");
  console.error(error);
  console.error(error?.message);
  console.error(error?.stack);
  console.error("===========================");

  return res.status(500).json({
    success: false,
    message: error?.message || "AI Processing Failed",
  });
}
}
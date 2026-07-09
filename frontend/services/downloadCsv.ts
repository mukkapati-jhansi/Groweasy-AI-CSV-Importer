import { CRMRecord } from "@/types/crm";

export function downloadProcessedCsv(records: CRMRecord[]) {
  if (!records.length) return;

  const headers = Object.keys(records[0]);

  const csvRows = [
    headers.join(","),
    ...records.map((record) =>
      headers
        .map((header) => {
          const value = record[header as keyof CRMRecord] ?? "";

          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(",")
    ),
  ];

  const csvContent = csvRows.join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "processed_crm_records.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
}
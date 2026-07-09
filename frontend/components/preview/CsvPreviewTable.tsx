"use client";

import { CsvRow } from "@/types/csv";

type Props = {
  rows: CsvRow[];
};

export default function CsvPreviewTable({ rows }: Props) {
  if (!rows.length) return null;

  const headers = Object.keys(rows[0]);

  const previewRows = rows.slice(0, 10);

  return (
    <div className="mt-8 rounded-2xl border bg-white shadow">

      {/* Summary */}

      <div className="border-b bg-slate-50 p-6">

        <h2 className="text-xl font-bold">
          CSV Preview
        </h2>

        <div className="mt-4 grid grid-cols-3 gap-4">

          <div>
            <p className="text-sm text-slate-500">
              Total Records
            </p>

            <p className="text-xl font-semibold">
              {rows.length}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Total Columns
            </p>

            <p className="text-xl font-semibold">
              {headers.length}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Showing
            </p>

            <p className="text-xl font-semibold">
              {previewRows.length}
            </p>
          </div>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              {headers.map((header) => (

                <th
                  key={header}
                  className="border-b px-4 py-3 text-left text-sm font-semibold"
                >
                  {header}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {previewRows.map((row, index) => (

              <tr
                key={index}
                className="hover:bg-slate-50"
              >

                {headers.map((header) => (

                  <td
                    key={header}
                    className="border-b px-4 py-3 text-sm"
                  >
                    {row[header]}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="border-t bg-slate-50 px-6 py-4 text-sm text-slate-500">

        Showing {previewRows.length} of {rows.length} rows

      </div>

    </div>
  );
}
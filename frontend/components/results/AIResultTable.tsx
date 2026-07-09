"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import { CRMRecord } from "@/types/crm";
import { downloadProcessedCsv } from "@/services/downloadCsv";

type Props = {
  records: CRMRecord[];
};

const columns = [
  "name",
  "email",
  "mobile_without_country_code",
  "company",
  "city",
  "state",
  "crm_status",
];

export default function AIResultTable({ records }: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return records;

    return records.filter((record) =>
      [record.name, record.email, record.company]
        .filter(Boolean)
        .some((value) =>
          value!.toLowerCase().includes(keyword)
        )
    );
  }, [records, search]);

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "SALE_DONE":
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            🔵 Sale Done
          </span>
        );

      case "BAD_LEAD":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
            🔴 Bad Lead
          </span>
        );

      case "DID_NOT_CONNECT":
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            🟡 Didn't Connect
          </span>
        );

      default:
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            🟢 Good Lead
          </span>
        );
    }
  };

  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            📋 AI Extracted CRM Records
          </h2>

          <p className="mt-1 text-slate-500">
            {filtered.length} CRM record
            {filtered.length !== 1 ? "s" : ""} extracted
          </p>
        </div>

        <button
          onClick={() => downloadProcessedCsv(filtered)}
          className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          ⬇ Download Processed CSV
        </button>

      </div>

      {/* Search */}
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* Table */}
      <div className="overflow-hidden rounded-xl border">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="sticky top-0 bg-slate-100">

              <tr>

                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-5 py-4 text-left text-sm font-semibold capitalize"
                  >
                    {column.replaceAll("_", " ")}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-12"
                  >
                    <div className="text-center">
                      <div className="text-5xl">📂</div>

                      <h3 className="mt-3 text-lg font-semibold text-slate-700">
                        No matching CRM records
                      </h3>

                      <p className="mt-2 text-slate-500">
                        Try searching with a different name,
                        email or company.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((record, index) => (
                  <tr
                    key={index}
                    className="border-t transition hover:bg-slate-50"
                  >

                    <td className="px-5 py-4">
                      {record.name || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {record.email || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {record.mobile_without_country_code || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {record.company || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {record.city || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {record.state || "—"}
                    </td>

                    <td className="px-5 py-4">
                      {getStatusBadge(record.crm_status)}
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="border-t bg-slate-50 px-5 py-3 text-sm text-slate-600">
          Showing <strong>{filtered.length}</strong> of{" "}
          <strong>{records.length}</strong> CRM records
        </div>

      </div>

    </div>
  );
}
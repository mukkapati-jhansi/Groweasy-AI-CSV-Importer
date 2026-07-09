"use client";

import { useRef, useState } from "react";

import { uploadCsv } from "@/services/uploadService";
import { parseCsv } from "@/services/csvParser";

import DragDropZone from "./DragDropZone";
import FilePicker from "./FilePicker";
import SelectedFileCard from "./SelectedFileCard";

import CsvPreviewTable from "@/components/preview/CsvPreviewTable";
import ConfirmImport from "@/components/preview/ConfirmImport";

import AIResultTable from "@/components/results/AIResultTable";
import ImportSummary from "@/components/results/ImportSummary";
import LoadingOverlay from "@/components/results/LoadingOverlay";
import { SelectedFile } from "@/types/file";
import { CsvRow } from "@/types/csv";

export default function UploadArea() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<SelectedFile | null>(null);

  const [rows, setRows] = useState<CsvRow[]>([]);

  const [loadingStep, setLoadingStep] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  const [error, setError] = useState("");

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile({
      file,
      name: file.name,
      size: file.size,
    });

    // Reset previous data
    setRows([]);
    setResult(null);
    setError("");
  }

  function removeFile() {
    setSelectedFile(null);
    setRows([]);
    setResult(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function previewCsv() {
    if (!selectedFile) return;

    try {
      const parsedRows = await parseCsv(selectedFile.file);
      setRows(parsedRows);
    } catch (error) {
      console.error(error);
      alert("Failed to parse CSV.");
    }
  }

  async function confirmImport() {
  if (!selectedFile) return;

  try {
    setLoading(true);
    setError("");

    setLoadingStep("Uploading CSV...");

    await new Promise((r) => setTimeout(r, 400));

    setLoadingStep("Parsing CSV...");

    await new Promise((r) => setTimeout(r, 400));

    setLoadingStep("🤖 Gemini AI is extracting CRM records...");

    const response = await uploadCsv(selectedFile.file);

    setLoadingStep("Building CRM dashboard...");

    await new Promise((r) => setTimeout(r, 300));

    setResult(response);

  } catch (err) {
    console.error(err);

    setError(
      "Something went wrong while processing the CSV."
    );

  } finally {
    setLoading(false);
    setLoadingStep("");
  }
}

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <DragDropZone onBrowse={openFilePicker} />

      <FilePicker
        inputRef={inputRef}
        onFileChange={handleFileChange}
      />

      {selectedFile && (
        <SelectedFileCard
          selectedFile={selectedFile}
          onRemove={removeFile}
          onPreview={previewCsv}
        />
      )}

      {rows.length > 0 && (
        <>
          <CsvPreviewTable rows={rows} />

          <ConfirmImport
    onImport={confirmImport}
    loading={loading}
/>

          {loading && (
            <LoadingOverlay
            step={loadingStep}
            />
            )}

          {error && (
  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">

    <h3 className="font-bold text-red-700">
      ❌ Import Failed
    </h3>

    <p className="mt-2 text-red-600">
      {error}
    </p>

  </div>
)}

          {result && (
            <ImportSummary
  imported={result.imported}
  skipped={result.skipped}
  fileName={selectedFile?.name}
/>
          )}

          {result?.records?.length > 0 && (
            <AIResultTable
              records={result.records}
            />
          )}

        </>
      )}

    </div>
  );
}
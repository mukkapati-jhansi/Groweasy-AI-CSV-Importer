"use client";

import { FileText, Trash2, Eye } from "lucide-react";
import { SelectedFile } from "@/types/file";

type Props = {
  selectedFile: SelectedFile;
  onRemove: () => void;
  onPreview: () => void;
};

export default function SelectedFileCard({
  selectedFile,
  onRemove,
  onPreview,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <FileText className="h-10 w-10 text-blue-600" />

        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">
            {selectedFile.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {(selectedFile.size / 1024).toFixed(2)} KB
          </p>

          <p className="mt-2 text-green-600 font-medium">
            ✔ Ready to Preview
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onPreview}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          <Eye size={18} />
          Preview CSV
        </button>

        <button
          onClick={onRemove}
          className="flex items-center gap-2 rounded-lg border border-red-300 px-5 py-2 text-red-600 hover:bg-red-50"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}
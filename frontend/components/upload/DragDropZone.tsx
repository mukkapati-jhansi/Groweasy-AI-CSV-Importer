"use client";

import { UploadCloud } from "lucide-react";

type Props = {
  onBrowse: () => void;
};

export default function DragDropZone({ onBrowse }: Props) {
  return (
    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 transition-all hover:border-blue-500 hover:bg-slate-50">

      <div className="flex flex-col items-center">

        <UploadCloud
          size={60}
          className="text-blue-600"
        />

        <h3 className="mt-6 text-xl font-semibold">
          Drag & Drop your CSV
        </h3>

        <p className="mt-2 text-slate-500">
          or click below to browse files
        </p>

        <button
          onClick={onBrowse}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse CSV
        </button>

        <p className="mt-6 text-sm text-slate-400">
          Supported file: .csv (Max 5 MB)
        </p>

      </div>

    </div>
  );
}
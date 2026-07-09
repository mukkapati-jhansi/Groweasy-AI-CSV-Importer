"use client";

type Props = {
  onImport: () => void;
  loading?: boolean;
};

export default function ConfirmImport({
  onImport,
  loading = false,
}: Props) {
  return (
    <div className="mt-6 flex justify-end">
      <button
        onClick={onImport}
        disabled={loading}
        className={`rounded-xl px-8 py-3 font-semibold text-white transition-all duration-200
          ${
            loading
              ? "cursor-not-allowed bg-gray-400"
              : "bg-green-600 hover:bg-green-700"
          }`}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>

            <span>Processing...</span>
          </div>
        ) : (
          "🚀 Confirm Import"
        )}
      </button>
    </div>
  );
}
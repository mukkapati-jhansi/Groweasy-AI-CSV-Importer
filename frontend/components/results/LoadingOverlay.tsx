"use client";

type Props = {
  step: string;
};

export default function LoadingOverlay({ step }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow">

      <div className="flex items-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

        <div>

          <h2 className="text-xl font-bold text-blue-700">
            🤖 AI Processing
          </h2>

          <p className="mt-1 text-blue-600">
            {step}
          </p>

        </div>

      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-blue-100">

        <div className="h-full w-full animate-pulse rounded-full bg-blue-500" />

      </div>

    </div>
  );
}
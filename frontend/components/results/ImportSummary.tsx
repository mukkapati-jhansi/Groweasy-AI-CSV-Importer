"use client";

type Props = {
  imported: number;
  skipped: number;
  fileName?: string;
};

export default function ImportSummary({
  imported,
  skipped,
  fileName = "Uploaded CSV",
}: Props) {
  const processedAt = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

  const cards = [
    {
      title: "Imported",
      value: imported,
      icon: "✅",
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      title: "Skipped",
      value: skipped,
      icon: "❌",
      bg: "bg-red-50",
      text: "text-red-700",
    },
    {
      title: "CSV File",
      value: fileName,
      icon: "📄",
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    {
      title: "AI Model",
      value: "Gemini 2.5 Flash",
      icon: "🤖",
      bg: "bg-purple-50",
      text: "text-purple-700",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

      <div className="mb-6 border-b border-slate-100 pb-4">

        <h2 className="text-3xl font-bold text-slate-800">
          🤖 AI Processing Dashboard
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Processed on {processedAt}
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl ${card.bg} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
          >

            <p className={`text-sm font-medium ${card.text}`}>
              {card.icon} {card.title}
            </p>

            {card.title === "CSV File" ? (
              <h3
                className={`mt-3 truncate text-lg font-bold ${card.text}`}
                title={String(card.value)}
              >
                {card.value}
              </h3>
            ) : card.title === "AI Model" ? (
              <h3
                className={`mt-3 text-xl font-bold ${card.text}`}
              >
                {card.value}
              </h3>
            ) : (
              <h3
                className={`mt-3 text-4xl font-bold ${card.text}`}
              >
                {card.value}
              </h3>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}
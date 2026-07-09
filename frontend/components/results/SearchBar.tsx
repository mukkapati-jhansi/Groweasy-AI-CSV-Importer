"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔍 Search by name, email or company..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 shadow-sm transition focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
import UploadArea from "@/components/upload/UploadArea";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">

      <div className="w-full max-w-5xl">

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-bold">
            AI Powered CSV Importer
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Upload any CSV and intelligently extract CRM leads using AI.
          </p>

        </div>

        <UploadArea />

      </div>

    </main>
  );
}
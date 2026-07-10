# AI Powered CSV Importer

An AI-powered CSV Importer developed as part of the **GrowEasy Software Developer Internship Assignment**.

The application intelligently extracts CRM lead information from CSV files with different column names and structures using **Google Gemini AI**.

---

## Live Demo

**Frontend (Vercel)**

https://groweasy-ai-csv-importer-gamma.vercel.app

**Backend (Render)**

https://groweasy-ai-csv-importer-qrpk.onrender.com

---

## GitHub Repository

https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer

---

## Features

- Drag & Drop CSV Upload
- CSV File Picker
- CSV Preview before Import
- AI-powered CRM Field Extraction
- Intelligent Mapping of Different CSV Formats
- Responsive UI
- Error Handling
- Production Deployment

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Multer
- CSV Parser

### AI
- Google Gemini 2.5 Flash

### Deployment
- Vercel
- Render

---

## Project Structure

```
AI-powered CSV/
│
├── frontend/
├── backend/
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer.git
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=your_google_gemini_api_key
FRONTEND_URL=http://localhost:3000
```

### Frontend

Create a `.env.local` file inside the frontend folder.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production, set `NEXT_PUBLIC_API_URL` to your deployed Render backend URL.

---

## Workflow

1. Upload a CSV file.
2. Preview the uploaded data.
3. Click **Confirm Import**.
4. The backend processes the CSV using Google Gemini AI.
5. AI extracts CRM fields and returns structured JSON.
6. The frontend displays the imported CRM records.

---

## Assignment Highlights

- Intelligent AI-based field mapping
- Supports different CSV structures
- Responsive interface
- TypeScript-based codebase
- Production deployment using Vercel and Render

---

## Author

**Mukkapati Jhansi**

B.Tech CSE (2026)

GitHub: https://github.com/mukkapati-jhansi
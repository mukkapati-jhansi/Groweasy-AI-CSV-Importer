# AI Powered CSV Importer

An AI-powered CSV Importer developed as part of the **GrowEasy Software Developer Internship Assignment**.

The application intelligently extracts CRM lead information from CSV files with different column names, layouts, and structures using **Google Gemini 2.5 Flash AI**.

---

# Live Demo

### Frontend (Vercel)

https://groweasy-ai-csv-importer-gamma.vercel.app

### Backend API (Render)

https://groweasy-ai-csv-importer-qrpk.onrender.com

---

# GitHub Repository

https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer

---

# Features

- Drag & Drop CSV Upload
- CSV File Picker
- CSV Preview before AI Processing
- AI-powered CRM Field Extraction
- Intelligent Mapping of Different CSV Formats
- Responsive UI
- Search Functionality
- CSV Export
- Error Handling
- Production Deployment

---

# Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- Express.js
- Multer
- CSV Parse

## AI

- Google Gemini 2.5 Flash

## Deployment

- Vercel
- Render

---

# Project Structure

```text
AI-powered CSV/
│
├── frontend/
├── backend/
├── sample-csv/
├── screenshots/
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer.git
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

## Backend

Create a `.env` file inside the **backend** folder.

### Local Development

```env
GEMINI_API_KEY=your_google_gemini_api_key
FRONTEND_URL=http://localhost:3000
```

### Production (Render)

```env
FRONTEND_URL=https://groweasy-ai-csv-importer-gamma.vercel.app
```

---

## Frontend

Create a `.env.local` file inside the **frontend** folder.

### Local Development

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Production

```env
NEXT_PUBLIC_API_URL=https://groweasy-ai-csv-importer-qrpk.onrender.com
```

---

# Application Workflow

1. Upload any valid CSV file.
2. Preview uploaded records before processing.
3. Click **Confirm Import**.
4. Backend parses the CSV.
5. Google Gemini AI intelligently maps CRM fields.
6. Structured CRM records are returned.
7. Display imported CRM records in a responsive table.
8. Export processed CRM records as CSV.

---

# Assignment Highlights

- AI-powered intelligent field mapping
- Supports different CSV structures
- Responsive user interface
- TypeScript-based architecture
- Clean folder structure
- Error handling
- Production deployment using Vercel and Render

---

# Future Improvements

- Progress indicator during AI processing
- Batch processing for large CSV files
- Retry mechanism for failed AI requests
- Virtualized tables for very large datasets
- Unit tests
- Docker support
- Dark mode

---

# Author

**Mukkapati Jhansi**

B.Tech – Computer Science & Engineering (2026)

GitHub Profile:
https://github.com/mukkapati-jhansi

Project Repository:
https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer
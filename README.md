# AceIt 🎯
### AI-Powered Interview Preparation Platform

AceIt helps students and job seekers prepare smarter for technical interviews. Upload your resume, paste a job description, and let AI generate a fully personalized interview prep report — in under 30 seconds.

<img width="1397" height="767" alt="image" src="https://github.com/user-attachments/assets/c6e1f9bb-6aee-4185-a6f1-34f13e1274e4" />

<img width="1401" height="763" alt="image" src="https://github.com/user-attachments/assets/692a7cfc-1d97-4659-b922-95121a64d742" />

<img width="1411" height="756" alt="image" src="https://github.com/user-attachments/assets/dfb5ef76-1be6-4a3d-bb7c-c78a763f7c3a" />

<img width="1408" height="761" alt="image" src="https://github.com/user-attachments/assets/0382e587-681c-4587-9dd4-98521ab16ff3" />


---

## ✨ Features

- **Resume Upload** — Upload your resume as a PDF and let the AI extract and analyze it
- **Match Score** — Get a compatibility score between your profile and the job description
- **Technical Questions** — Role-specific questions with intended answers and interviewer intent
- **Behavioral Questions** — Situational questions tailored to your background
- **Skill Gap Analysis** — Know exactly what you're missing and how critical each gap is
- **Day-wise Prep Plan** — A personalized study plan to close your skill gaps before the interview
- **Secure Auth** — JWT-based authentication with token blacklisting on logout
- **Report History** — View all your previously generated interview reports

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| React Router | Client-side routing |
| Axios | HTTP requests |
| CSS3 | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server and REST API |
| MongoDB + Mongoose | Database and ODM |
| Google Gemini AI (`@google/genai`) | AI report generation |
| Multer | PDF resume upload |
| pdf-parse | PDF text extraction |
| JWT + bcrypt | Authentication |
| Zod | AI response validation |

---

## 📁 Project Structure

```
AceIt/
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx          # UI layer
│   │   │   │   ├── Home.css          # Styles
│   │   │   │   └── index.jsx         # Wires state + UI
│   │   │   └── Interview/
│   │   ├── services/
│   │   │   └── interview.api.js      # API layer
│   │   ├── hooks/
│   │   │   └── useInterview.js       # Hooks layer
│   │   ├── context/
│   │   │   └── interview.context.jsx # State layer
│   │   └── app.routes.jsx
│   └── package.json
│
└── Backend/
    ├── src/
    │   ├── controllers/
    │   │   └── interview.controllers.js
    │   ├── services/
    │   │   └── ai.service.js         # Gemini AI integration
    │   ├── models/
    │   │   └── interviewReport.model.js
    │   ├── routes/
    │   │   └── interview.routes.js
    │   ├── middleware/
    │   │   ├── auth.middleware.js
    │   │   └── upload.middleware.js
    │   ├── schemas/
    │   │   └── interviewReport.schema.js
    │   ├── prompts/
    │   │   └── interviewReport.prompt.js
    │   └── config/
    │       ├── db.js
    │       └── gemini.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Google Gemini API key — get one at [aistudio.google.com](https://aistudio.google.com)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/aceit.git
cd aceit
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/aceit
JWT_SECRET=your_jwt_secret_here
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.0-flash
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd Frontend
npm install
```

Create a `.env` file in the `Frontend` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

### 4. Open the app

Visit `http://localhost:5173` in your browser.


## 🤖 How the AI Works

1. Resume PDF is uploaded and text is extracted using `pdf-parse`
2. Extracted text + job description + self description are passed to Gemini
3. A manually crafted JSON Schema (not Zod) is passed as `responseSchema` to enforce structured output
4. Gemini returns a structured JSON report
5. Zod validates the response shape before saving to MongoDB

```
Resume PDF → pdf-parse → text
                              ↘
Job Description          →  Gemini AI  →  Structured JSON  →  Zod validate  →  MongoDB
                              ↗
Self Description
```

> **Why manual JSON Schema instead of Zod?**  
> Gemini's `responseSchema` only accepts a minimal subset of JSON Schema. `zodToJsonSchema()` outputs extra fields (`$schema`, `additionalProperties`) that cause Gemini to silently ignore the schema and generate free-form text. The solution is to write the schema manually and use Zod only for post-response validation.

---

## ⚙️ Frontend Architecture

The frontend follows a clean **4-layer React pattern**:

| Layer | File | Responsibility |
|---|---|---|
| UI | `Home.jsx` | Purely presentational, receives everything via props |
| API | `interview.api.js` | Axios calls, returns raw response data |
| Hooks | `useInterview.js` | Business logic, error handling, loading state |
| State | `interview.context.jsx` | Global state shared across components |

---



## 👩‍💻 Author

**Aanya Singh**  
B.Tech Computer Science, IGDTUW  
[GitHub](https://github.com/aanyasingh) • [LinkedIn](https://linkedin.com/in/aanyasingh)

---

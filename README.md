# 🧠 Terms & Conditions Summarizer

### TL;DR for the stuff nobody reads.

---

## 📘 Introduction

Every day, people click **"I Agree"** without reading Terms & Conditions that often hide data-sharing rules, cancellation traps, or liability clauses.  
This project automatically fetches and summarizes any website’s **Terms & Conditions** into **simple, color-coded bullet points**, showing what’s **risky**, **neutral**, or **safe** for users.  

It uses Google’s **Gemini AI** to extract key insights and deliver quick, human-readable summaries.  

---

## 🧩 Why It’s Useful

We mindlessly accept legal documents online.  
This project helps users make informed choices by exposing the most important clauses from those documents in a few seconds.  
Perfect for users who value privacy, transparency, and simplicity.

---

## ⚙️ Tech Stack

**Backend:** Node.js, Express, Axios, Cheerio, Google GenAI API  
**Frontend:** React.js, Tailwind CSS, Axios  
**AI Model:** Google Gemini 2.5 Flash  

---

## 📂 Project Structure

```
terms-conditions-summarizer/
│
├── backend/
│   ├── server.js          # Express server and AI summarization logic
│   ├── route.js           # route logic, fetching api and getting response
│   ├── .env               # API key configuration (GEMINI_API_KEY)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main application
│   │   ├── components/    # UI components: Search, Card, Navbar, Footer
│   │   ├── index.css      # Styling
│
└── README.md
```

---

## 🚀 Installation

### Backend setup
```bash
cd backend
npm install
```

Create a `.env` file:
```
GEMINI_API_KEY=your_google_gemini_api_key_here
```

Run the server:
```bash
node server.js
```

Backend runs on: `http://localhost:4000`

---

### Frontend setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173` (Vite default)  
Make sure the backend is running before using the frontend.

---

## 💡 Usage

1. Open the frontend app.  
2. Type a website name or URL (e.g. `google.com`).  
3. Click **Search T&C**.  
4. Wait a few seconds for the summarization.  
5. The results will display as color-coded cards:
   - 🟥 **Red** → risky clauses  
   - ⚪ **Gray** → standard terms  
   - 🟩 **Green** → protective clauses  

Each summary point is generated dynamically from the actual Terms & Conditions text on the website.

---

## 🧠 Features

- Fetches any website’s Terms & Conditions page  
- Uses AI to summarize into clear, short points  
- Color-coded risk indicators  
- Local storage for saved summaries  
- Responsive React UI  

---

## 🔧 Configuration

Environment variables (in `.env`):
```
GEMINI_API_KEY=your_google_gemini_api_key
```

No other config needed.  

---

## 🧪 Example

Input: `https://www.netflix.com/terms`  
Output:
```json
[
  {"point": "Data shared with partners", "color": "red"},
  {"point": "Subscription auto-renews monthly", "color": "gray"},
  {"point": "You can cancel anytime", "color": "green"}
]
```

---

## 🩺 Troubleshooting

| Problem | Possible Cause | Fix |
|----------|----------------|-----|
| `Something went wrong` | Invalid URL or unreachable T&C page | Try adding `https://` |
| AI returns empty result | Gemini API limit or parsing issue | Wait and retry |
| No color coding | Non-JSON AI output | Restart server and check `.env` |

---

## 👤 Author

**Mayur V. Jadhav**  
Personal learning project on responsible AI and user transparency.  

---

## 📜 License

This project is open for personal and educational use.  
No formal license applied. You may modify and use it freely.

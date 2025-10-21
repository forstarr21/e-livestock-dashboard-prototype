# 🐄 E-Livestock Global — Dashboard Prototype

This repository contains the **prototype implementation** of the *E-Livestock Global Administrative Dashboard*.  
The project aims to build a unified, data-driven monitoring and analytics platform for livestock management —  
combining **Power BI analytics**, **React frontend**, and **AI-powered prediction models**.

---

## 📊 Project Overview

**Goal:**  
To create an integrated dashboard that visualizes livestock data (animals, farms, mortality, and transfers)  
and provides predictive insights for decision-makers using machine learning models.

**Problem Statement:**  
Current livestock data are stored across multiple sources without an accessible, visual monitoring interface.  
The system solves this by integrating data from SQL & CSV sources into Power BI, then building a web interface  
that connects to AI models for real-time prediction.

**Objectives:**
- Design an **interactive Power BI dashboard** for administrators.
- Develop a **React frontend** connected to Power BI visuals and ML APIs.
- Prepare the foundation for **AI-driven mortality predictions**.

---

## 🧩 System Architecture

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | React (Vite) | Prototype user interface for dashboard and prediction views |
| **Visualization** | Microsoft Power BI | Embedded visuals for KPIs, charts, and geospatial maps |
| **Backend / API** | Node.js (planned) | Handles data API requests and connects to ML model endpoints |
| **Machine Learning** | Python + MLflow | Predictive analytics (mortality, transfer trends) |
| **Database** | MySQL / CSV | Data sources for animals, farms, and events |

---

## 🧱 Folder Structure
e-livestock-dashboard-prototype/
│
├── frontend/ # React skeleton (prototype)
│ ├── package.json
│ ├── src/
│ │ ├── App.js
│ │ └── pages/
│ │ ├── Dashboard.js
│ │ └── Predictions.js
│ └── README.md
│
├── api/ # API contract / backend integration docs
│ └── api_contract.md
│
└── PowerBI/ # (local files, not uploaded)
└── e-livestock.pbix

---

## 🧠 Features (Current Progress)

| Component | Status | Description |
|------------|---------|-------------|
| Power BI Dashboard | ✅ Done | Interactive KPI cards, mortality rate, maps, and time trends |
| Data Model (SQL/CSV) | ✅ Done | Tables: animals, farms, events, users, etc. |
| React Frontend | 🚧 In Progress | “Dashboard” and “AI Predictions” pages built |
| API Contract | ✅ Drafted | Includes endpoints for KPIs, animals, and predictions |
| ML Integration | ⏳ Upcoming | MLflow integration for mortality prediction |

---

## ⚙️ How to Run (Frontend)

```bash
# navigate to frontend folder
cd frontend

# install dependencies
npm install

# start development server
npm run start
🧮 Power BI Prototype

The Power BI file (e-livestock.pbix) visualizes:

Total Animals / Total Farms / Total Transfers / Mortality Rate

Farm distribution by country

Deaths by province

Animals trend by year

Geospatial map of farms

The visual layout follows the E-Livestock brand theme:

🟩 Primary color: #007E33

⚪ Background: #F9F9F9

⚫ Text: #222222

🤝 Team Collaboration
Member	Role	Responsibilities
Jiachen Wang	Data Visualization Lead	Built Power BI dashboard, data model, and integrated metrics
Hayrenzy Redi Hassen	UI/Frontend	React design, page structure, navigation
Charan & Hemant	Machine Learning / API	ML model training and backend integration
Team (All)	Coordination	Weekly meetings via Teams and GitHub collaboration
🚀 Next Steps

Embed Power BI report into React via iframe or Power BI REST API.

Connect /api/predictions endpoint to actual ML model hosted in MLflow.

Add interactive filters and chart controls to the React dashboard.

Conduct client feedback review for next sprint iteration.
📜 License

© 2025 E-Livestock Global Project — Prototype use only.

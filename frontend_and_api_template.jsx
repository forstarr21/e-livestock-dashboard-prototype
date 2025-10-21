📁 **/frontend/**  — React 前端骨架（可直接上传）

### package.json
```json
{
  "name": "e-livestock-dashboard-frontend",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1",
    "axios": "^1.4.0",
    "recharts": "^2.7.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### src/App.js
```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-50 min-h-screen">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-700">E-Livestock Global</h1>
          <nav>
            <Link className="mr-4 text-green-600 hover:underline" to="/">Dashboard</Link>
            <Link className="text-green-600 hover:underline" to="/predictions">AI Predictions</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

### src/pages/Dashboard.js
```javascript
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Administrative Dashboard</h2>
      <p>This page will display Power BI visuals or embedded charts.</p>
    </div>
  );
};

export default Dashboard;
```

### src/pages/Predictions.js
```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

const Predictions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api/predictions").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">AI Predictions</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading prediction data...</p>
      )}
    </div>
  );
};

export default Predictions;
```

### frontend/README.md
```markdown
# 🖥️ E-Livestock Frontend Prototype
This folder contains a minimal React framework for the **E-Livestock Global Dashboard**.

### Pages
- `/` → Administrative Dashboard
- `/predictions` → AI Prediction Page (linked to backend API)

### Run locally
```bash
npm install
npm start
```

### Future Integration
- Embed Power BI visual via iframe
- Connect ML predictions from API endpoint `/api/predictions`
```

---

📁 **/api/** — API 合同文档

### api_contract.md
```markdown
# 📡 E-Livestock API Contract

This document defines the API endpoints for integrating Power BI and AI model predictions.

## Base URL
```
https://api.elivestock.global/v1/
```

## Endpoints
### 🧮 1. GET /stats
Returns key KPIs for dashboard cards.
```json
{
  "total_animals": 18666,
  "total_farms": 18,
  "total_transfers": 26,
  "mortality_rate": 0.04
}
```

### 🧠 2. GET /predictions
Returns AI-predicted mortality or transfer trends.
```json
{
  "predicted_mortality_rate": 0.037,
  "model_version": "v1.2.0",
  "confidence_interval": [0.032, 0.041],
  "updated_at": "2025-10-20T12:00:00Z"
}
```

### 🐄 3. GET /animals/{id}
Fetch animal details from database.
```json
{
  "animal_id": 501,
  "species": "Cattle",
  "farm": "Admire Test Farm",
  "status": "Healthy",
  "birth_date": "2023-01-12"
}
```

### 🔄 4. POST /predictions/retrain
Trigger retraining of AI models.
```json
{
  "model_type": "mortality",
  "triggered_by": "admin",
  "status": "accepted"
}
```

---
### ⚙️ Future Additions
- `/alerts` → Smart notifications for disease outbreaks
- `/model-metrics` → Integration with MLflow dashboard

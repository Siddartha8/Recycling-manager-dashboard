# ♻️ Recycling Production Line Manager Dashboard

**AI-Assisted Candidate Evaluation System**

![Dashboard Preview](Screenshot%202026-02-06%20232714.png)

## 📌 Overview
This project is a React-based dashboard designed to streamline the hiring process for a **Recycling Production Line Manager**. It simulates an AI-powered system that evaluates candidates based on three critical metrics:
1.  **Crisis Management** (Handling machinery failure, safety incidents).
2.  **Sustainability Knowledge** (Circular economy, waste reduction).
3.  **Team Motivation** (Leadership under pressure).

The system generates realistic candidate data, ranks them automatically, and provides visual insights into their strengths.

## 🚀 Features

* **🏆 Live Leaderboard:** Automatically ranks candidates by weighted total score.
* **📊 Visual Skill Profiles:** Color-coded progress bars for instant skill assessment.
* **🤖 Data Simulation:** Uses **Faker.js** to generate **40 unique candidate profiles**.
* **⚡ Modern UI:** Built with **Mantine UI** for a responsive interface.
* **💾 Database Design:** Includes a production-ready **MySQL schema** with **Triggers**.
* **🧠 AI Prompt Engineering:** Includes optimized prompts for LLM-based evaluation.

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite
* **Styling:** Mantine UI (v7)
* **Data Generation:** Faker.js
* **Database:** MySQL (Schema included)

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Siddartha8/Recycling-manager-dashboard.git](https://github.com/Siddartha8/Recycling-manager-dashboard.git)
    cd Recycling-manager-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 📝 Evaluation Criteria Checklist

| Requirement | Status | Implementation Details |
| :--- | :---: | :--- |
| **Database Design** | ✅ | MySQL Schema with Foreign Keys & Auto-Ranking Trigger. |
| **AI Prompting** | ✅ | 3 Structured Prompts with JSON output & scoring rubrics. |
| **Dashboard UI** | ✅ | React + Mantine UI with responsive Grid layout. |
| **Random Data** | ✅ | `mockData.js` generates 40 realistic profiles via Faker.js. |

---

*This project was built for the Green Cycle Productions Internship Assignment.*
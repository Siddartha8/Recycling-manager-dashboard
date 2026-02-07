# ♻️ Recycling Production Line Manager - AI Evaluation Dashboard

> **AI-Assisted Candidate Ranking System for Green Cycle Productions**

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Mantine](https://img.shields.io/badge/Mantine-7-cyan)
![MySQL](https://img.shields.io/badge/MySQL-8-orange)

---

## 📌 Project Overview

This project is a **React-based dashboard** that demonstrates an AI-powered candidate evaluation system for hiring a **Recycling Production Line Manager**. The system evaluates candidates across three critical competencies:

1. 🚨 **Crisis Management** - Handling equipment failures, safety incidents, and operational disruptions
2. 🌱 **Sustainability Knowledge** - Understanding of recycling, waste reduction, and environmental compliance  
3. 👥 **Team Motivation & Leadership** - Ability to lead and inspire production teams

The dashboard provides:
- **Automated ranking** based on AI-evaluated scores
- **Visual skill profiles** with color-coded progress bars
- **Interactive leaderboard** showing top candidates
- **Detailed candidate cards** with individual assessments

---

## 🚀 Features

### Core Functionality
✅ **Live Leaderboard** - Automatically ranks 40 candidates by weighted total score  
✅ **Visual Skill Analysis** - Color-coded progress bars for instant assessment  
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
✅ **Mock AI Evaluation** - Simulates AI scoring system with realistic data  

### Technical Highlights
✅ **Production-Ready Database** - MySQL schema with foreign keys, indexes, and triggers  
✅ **Automatic Ranking** - Database trigger recalculates rankings on new evaluations  
✅ **Random Data Generation** - Uses Faker.js to create 40 unique candidate profiles  
✅ **Modern UI Framework** - Built with Mantine UI for professional appearance  
✅ **AI Prompt Engineering** - Includes structured prompts with scoring rubrics  

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, Vite 5 |
| **UI Framework** | Mantine UI v7 |
| **State Management** | React Hooks (useState, useMemo) |
| **Data Generation** | Faker.js |
| **Database** | MySQL 8.0+ |
| **Styling** | CSS3, Mantine Theme System |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- MySQL 8.0+ (optional, for database demo)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/recycling-manager-dashboard.git
cd recycling-manager-dashboard
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 4: (Optional) Setup MySQL Database
```bash
# Start MySQL server
mysql -u root -p

# Create database and load schema
source schema.sql

# Load sample data
source sample_data.sql

# Verify data
SELECT * FROM rankings ORDER BY rank_position LIMIT 5;
```

---

## 📁 Project Structure

```
recycling-manager-dashboard/
│
├── src/
│   ├── components/
│   │   ├── CandidateCard.jsx      # Individual candidate profile cards
│   │   ├── LeaderboardTable.jsx   # Top 10 ranked candidates table
│   │   └── SkillBars.jsx           # Skill visualization components
│   │
│   ├── pages/
│   │   └── Dashboard.jsx           # Main dashboard layout
│   │
│   ├── data/
│   │   └── mockData.js             # 40 generated candidate profiles
│   │
│   ├── App.jsx                      # Root application component
│   ├── main.jsx                     # Application entry point
│   ├── index.css                    # Global styles
│   └── App.css                      # Component styles
│
├── public/                          # Static assets
├── schema.sql                       # MySQL database schema
├── sample_data.sql                  # Sample INSERT statements
├── AI_PROMPTS.md                    # Complete AI evaluation prompts
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## 💾 Database Design

### Entity Relationship Diagram

```
┌─────────────────┐
│   candidates    │
├─────────────────┤
│ id (PK)         │
│ full_name       │
│ experience_years│
│ skills (JSON)   │
│ created_at      │
└────────┬────────┘
         │
         │ 1:1
         │
┌────────▼────────┐       ┌─────────────────┐
│  evaluations    │       │    rankings     │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ candidate_id(PK)│
│ candidate_id(FK)│◄──────┤ total_score     │
│ crisis_score    │  1:1  │ rank_position   │
│ sustain_score   │       └─────────────────┘
│ motivation_score│
│ evaluated_at    │
└─────────────────┘
```

### Key Database Features

1. **Automatic Ranking System**
   ```sql
   CREATE TRIGGER trg_update_rankings
   AFTER INSERT ON evaluations
   FOR EACH ROW
   BEGIN
       -- Recalculate all rankings automatically
   END
   ```

2. **Data Integrity**
   - Foreign key constraints ensure referential integrity
   - Check constraints validate score ranges (0-10)
   - Unique constraint prevents duplicate evaluations

3. **Performance Optimization**
   - Indexed on `experience_years` for filtering
   - Indexed on `rank_position` for leaderboard queries
   - InnoDB engine for ACID compliance

---

## 🤖 AI Evaluation System

### Evaluation Methodology

Each candidate is evaluated using three structured AI prompts:

#### 1. Crisis Management (0-10 points)
Assesses ability to handle:
- Equipment breakdowns and production shutdowns
- Safety incidents and emergency responses
- Quick decision-making under pressure

#### 2. Sustainability Knowledge (0-10 points)
Evaluates understanding of:
- Recycling processes and material sorting
- Environmental regulations and compliance
- Circular economy principles

#### 3. Team Motivation & Leadership (0-10 points)
Measures capability in:
- Managing diverse production teams
- Employee development and retention
- Safety culture and communication

### Sample AI Prompt Structure

```markdown
You are an HR expert evaluating a candidate for a recycling line manager role.

**Candidate Profile:**
- Name: {{name}}
- Experience: {{years}} years
- Skills: {{skills}}

**Task:** Rate crisis management ability (0-10) based on:
1. Emergency response experience (0-3 pts)
2. Decision-making under pressure (0-4 pts)
3. Communication & coordination (0-3 pts)

**Output (JSON):**
{
  "score": 8,
  "justification": "Strong operational background with documented crisis response..."
}
```

**→ See [AI_PROMPTS.md](./AI_PROMPTS.md) for complete prompt templates and rubrics**

---

## 📊 Data Generation

### Mock Candidate Creation

The `mockData.js` file uses **Faker.js** to generate 40 realistic candidate profiles:

```javascript
import { faker } from '@faker-js/faker';

export const candidates = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  experience: faker.number.int({ min: 2, max: 25 }),
  scores: {
    crisis: faker.number.int({ min: 4, max: 10 }),
    sustainability: faker.number.int({ min: 4, max: 10 }),
    motivation: faker.number.int({ min: 4, max: 10 }),
  },
  specialty: faker.helpers.arrayElement([
    'Operations', 
    'Supply Chain', 
    'Engineering', 
    'Safety'
  ]),
}));
```

### Score Distribution
- **Score Range:** 4-10 per category (realistic distribution)
- **Total Possible:** 30 points (3 categories × 10 max)
- **Top Performers:** Typically score 25-28 points

---

## 🎨 UI Components

### 1. Dashboard Header
- Gradient background with company branding
- Key statistics: Total candidates, highest score, average experience

### 2. Leaderboard Table
- Top 10 ranked candidates
- Trophy icons for top 3 positions
- Focus area badges (Sustainability, Crisis Mgmt, Generalist)
- Progress bars showing score visualization

### 3. Candidate Cards
- Avatar with initials
- Experience years
- Color-coded skill bars
- Hover effects for interactivity
- Special highlighting for #1 candidate

---

## 📝 Assignment Requirements Checklist

| Requirement | Status | Implementation |
|-------------|:------:|----------------|
| **Database Design** | ✅ | MySQL schema with 3 tables, foreign keys, and auto-ranking trigger |
| **40 Candidate Generator** | ✅ | `mockData.js` using Faker.js with realistic profiles |
| **AI Prompts (3)** | ✅ | `AI_PROMPTS.md` with detailed rubrics and examples |
| **React + Vite Dashboard** | ✅ | Full dashboard with leaderboard, heatmaps, and cards |
| **Mantine UI Components** | ✅ | Table, Card, Progress, Badge, Grid, and more |
| **GitHub Repository** | ✅ | Complete codebase with documentation |
| **README Instructions** | ✅ | This comprehensive setup guide |

---

## 🌟 Key Highlights

### What Makes This Solution Stand Out

1. **Production-Ready Database**
   - Automatic ranking system via MySQL trigger
   - Proper normalization and indexing
   - Sample data matches frontend exactly

2. **Thoughtful AI Prompt Design**
   - Structured rubrics with clear scoring criteria
   - JSON output format for easy parsing
   - Real-world evaluation scenarios

3. **Professional UI/UX**
   - Responsive design that works on all devices
   - Visual hierarchy guides user attention
   - Interactive elements enhance engagement

4. **Code Quality**
   - Component-based architecture
   - Reusable UI components
   - Clean separation of concerns
   - Performance optimizations (useMemo)

5. **Complete Documentation**
   - Comprehensive README
   - Detailed AI prompt examples
   - SQL schema with comments
   - Clear setup instructions

---

## 🚧 Future Enhancements

Potential improvements for production deployment:

- [ ] **Backend API** - Node.js/Express server to connect frontend to MySQL
- [ ] **Real AI Integration** - Connect to OpenAI or Anthropic API
- [ ] **Candidate Upload** - CSV import for bulk candidate data
- [ ] **Advanced Filtering** - Filter by experience, score range, specialty
- [ ] **Export Functionality** - Download rankings as PDF/Excel
- [ ] **Interview Scheduling** - Integrate with calendar APIs
- [ ] **Email Notifications** - Auto-notify top candidates
- [ ] **User Authentication** - HR role-based access control
- [ ] **Analytics Dashboard** - Hiring trends and metrics over time
- [ ] **Mobile App** - React Native version for on-the-go access

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard Header](./screenshots/dashboard-header.png)

### Leaderboard Table
![Leaderboard](./screenshots/leaderboard-table.png)

### Candidate Cards
![Candidate Cards](./screenshots/candidate-cards.png)

---

## 🤝 Contributing

This project was created as an internship assignment for **Green Cycle Productions**. 

If you'd like to suggest improvements:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational and evaluation purposes as part of an internship assignment.

---

## 👤 Author

**Kandadi Siddartha**  
Final Year B.Tech (CSE)  
Sree Dattha Institute of Engineering and Science, Hyderabad  
📧 Email: [siddharthakandadi@gmail.com](mailto:siddharthakandadi@gmail.com)  
💼 LinkedIn: [linkedin.com/in/siddartha-kandadi-90593326b](https://linkedin.com/in/siddarthakandadi)  
🐱 GitHub: [@Siddartha8](https://github.com/Siddartha8)

---

## 🙏 Acknowledgments

- **Green Cycle Productions** for the internship opportunity
- **Mantine UI** for the excellent React component library
- **Faker.js** for realistic data generation capabilities
- **Vite** for blazing-fast development experience

---

## 📞 Support

For questions or issues:
1. Check existing GitHub Issues
2. Create a new issue with detailed description
3. Contact via email for urgent matters

---

<div align="center">

**Built with ♻️ for a Sustainable Future**

*This dashboard demonstrates AI-assisted candidate evaluation using simulated data.*  
*This project was built for the Green Cycle Productions Internship Assignment.*

</div>
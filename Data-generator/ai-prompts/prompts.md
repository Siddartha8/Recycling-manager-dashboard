# 🤖 AI Evaluation Prompts for Recycling Line Manager Candidates

This document contains the three structured prompts used to evaluate candidates using AI (Claude/GPT/Gemini). Each prompt is designed to assess specific competencies critical for a Recycling Production Line Manager role.

---

## 📋 Overview

The evaluation system uses AI to score candidates on three dimensions:
1. **Crisis Management** - Ability to handle emergencies and operational disruptions
2. **Sustainability Knowledge** - Understanding of recycling, waste management, and environmental compliance
3. **Team Motivation & Leadership** - Capability to lead and inspire production teams

Each dimension is scored 0-10, with a maximum total score of 30 points.

---

## 1️⃣ Crisis Management Evaluation

### Purpose
Assess the candidate's ability to respond effectively to operational emergencies, equipment failures, safety incidents, and production disruptions in a recycling facility.

### Prompt Template

```
You are an expert HR evaluator for a recycling production facility. Evaluate the following candidate's crisis management capabilities for a Line Manager position.

**CANDIDATE PROFILE:**
- Full Name: {{full_name}}
- Years of Experience: {{experience_years}}
- Skills: {{skills_list}}
- Previous Roles: {{job_history}}

**EVALUATION TASK:**
Rate this candidate's crisis management ability on a scale of 0-10 based on the following criteria:

**Scoring Criteria:**

1. **Emergency Response Experience (0-3 points)**
   - Has handled equipment breakdowns in manufacturing/recycling environments
   - Experience with safety incident response (injuries, chemical spills, fires)
   - Familiarity with emergency protocols and evacuation procedures

2. **Decision-Making Under Pressure (0-4 points)**
   - Evidence of quick, effective decisions during operational crises
   - Ability to prioritize competing urgent demands (production vs. safety vs. quality)
   - Track record of minimizing downtime and financial impact
   - Root cause analysis and prevention of recurring issues

3. **Communication & Coordination (0-3 points)**
   - Experience coordinating multi-stakeholder responses (operators, management, safety teams, external authorities)
   - Clear escalation protocols and incident documentation
   - Ability to maintain team morale and provide direction during chaos

**Scoring Rubric:**
- **9-10 (Exceptional):** Extensive crisis management experience with documented success stories. Has managed major incidents (multi-hour shutdowns, safety events) with minimal impact. Shows systematic approach to emergency preparedness.

- **7-8 (Strong):** Solid crisis management background with 3+ years in operations. Has successfully handled moderate incidents. Demonstrates good judgment under pressure.

- **5-6 (Adequate):** Some exposure to operational issues but limited major crisis experience. Shows potential but would benefit from mentorship. May have managed smaller-scale incidents.

- **3-4 (Developing):** Minimal crisis management experience. Lacks exposure to high-pressure situations. Requires significant training and supervision.

- **0-2 (Insufficient):** No relevant crisis management background. No evidence of decision-making under pressure or emergency response capabilities.

**OUTPUT FORMAT (JSON):**
{
  "score": 8,
  "justification": "Candidate has 15 years in manufacturing with documented experience managing equipment failures. Successfully minimized a 6-hour production shutdown to 2 hours through quick troubleshooting. Led safety incident response team for 3 years.",
  "strengths": ["Emergency protocols", "Quick decision-making", "Safety leadership"],
  "development_areas": ["Multi-site crisis coordination"]
}
```

### Example Evaluation

**Input:**
- Name: Lawrence Osinski
- Experience: 21 years
- Skills: ["Team Leadership", "Process Optimization", "Safety Management", "Crisis Response"]

**Output:**
```json
{
  "score": 9,
  "justification": "Extensive 21-year track record in operations with explicit safety management and crisis response expertise. The combination of team leadership and process optimization suggests systematic approach to preventing and managing emergencies.",
  "strengths": ["Veteran experience", "Safety-first mindset", "Process-oriented thinking"],
  "development_areas": ["Modern technology integration"]
}
```

---

## 2️⃣ Sustainability Knowledge Evaluation

### Purpose
Evaluate the candidate's understanding of sustainable recycling practices, environmental regulations, circular economy principles, and commitment to waste reduction.

### Prompt Template

```
You are an environmental compliance expert evaluating candidates for a Recycling Line Manager role. Assess this candidate's sustainability knowledge and environmental awareness.

**CANDIDATE PROFILE:**
- Full Name: {{full_name}}
- Years of Experience: {{experience_years}}
- Skills: {{skills_list}}
- Industry Background: {{industry}}

**EVALUATION TASK:**
Rate this candidate's sustainability expertise on a scale of 0-10 based on the following criteria:

**Scoring Criteria:**

1. **Technical Recycling Knowledge (0-4 points)**
   - Understanding of material sorting processes (plastics, metals, paper, glass, e-waste)
   - Knowledge of contamination control and quality standards
   - Familiarity with recycling efficiency metrics (recovery rates, purity percentages)
   - Experience with different recycling technologies (MRF, single-stream, composting)

2. **Environmental Compliance & Standards (0-3 points)**
   - Knowledge of waste management regulations (EPA, state/local ordinances)
   - Experience with environmental permits and reporting requirements
   - Familiarity with industry standards (ISO 14001, R2, e-Stewards)
   - Understanding of lifecycle assessments and carbon footprint calculations

3. **Circular Economy & Innovation (0-3 points)**
   - Understanding of circular economy principles and closed-loop systems
   - Track record of waste reduction or process improvement initiatives
   - Knowledge of emerging trends (chemical recycling, upcycling, zero waste)
   - Ability to identify value in waste streams and optimize resource recovery

**Scoring Rubric:**
- **9-10 (Expert):** Deep technical knowledge of recycling operations with proven sustainability improvements. Has certifications (CEM, LEED, etc.). Demonstrates thought leadership in circular economy. Can articulate complex environmental concepts clearly.

- **7-8 (Proficient):** Strong understanding of recycling processes and environmental compliance. Has implemented sustainability initiatives with measurable results. Actively stays current with industry best practices.

- **5-6 (Competent):** Foundational knowledge of recycling and waste management. Understands basic regulations. Shows genuine interest in sustainability but lacks deep expertise.

- **3-4 (Basic):** Limited technical knowledge. Awareness of sustainability concepts but minimal practical application. Needs significant training on environmental standards.

- **0-2 (Minimal):** No relevant sustainability background. Little to no understanding of recycling operations or environmental compliance.

**OUTPUT FORMAT (JSON):**
{
  "score": 10,
  "justification": "Candidate has 18 years specifically in recycling operations with ISO 14001 auditor certification. Successfully increased facility diversion rate from 65% to 89% through contamination reduction program. Deep understanding of circular economy principles.",
  "strengths": ["ISO 14001 certified", "Proven track record", "Innovation mindset"],
  "development_areas": ["Emerging chemical recycling technologies"]
}
```

### Example Evaluation

**Input:**
- Name: Mrs. Hope Hyatt
- Experience: 18 years
- Skills: ["Environmental Compliance", "ISO 14001", "Green Operations", "Sustainability Reporting"]

**Output:**
```json
{
  "score": 10,
  "justification": "Explicit ISO 14001 expertise with 18 years in environmental compliance. The 'Green Operations' and 'Sustainability Reporting' skills indicate hands-on experience with both operational implementation and strategic environmental management.",
  "strengths": ["ISO certification", "Regulatory expertise", "Long-term experience"],
  "development_areas": ["Digital sustainability tracking tools"]
}
```

---

## 3️⃣ Team Motivation & Leadership Evaluation

### Purpose
Assess the candidate's ability to lead, motivate, and develop diverse production teams in a demanding industrial recycling environment.

### Prompt Template

```
You are an organizational development specialist evaluating leadership capabilities for a Production Line Manager position in a recycling facility. Assess this candidate's team motivation and management skills.

**CANDIDATE PROFILE:**
- Full Name: {{full_name}}
- Years of Experience: {{experience_years}}
- Skills: {{skills_list}}
- Team Size Managed: {{team_size}}

**EVALUATION TASK:**
Rate this candidate's team motivation and leadership ability on a scale of 0-10 based on the following criteria:

**Scoring Criteria:**

1. **Team Management Experience (0-3 points)**
   - Size and complexity of teams previously led (direct reports, shift workers, contractors)
   - Duration and consistency of supervisory/management roles
   - Experience in manufacturing, production, or industrial environments
   - Handling of diverse, multilingual, or unionized workforces

2. **Motivational Leadership & Development (0-4 points)**
   - Evidence of employee training and skills development programs
   - Track record of improving team morale, engagement, and retention
   - Ability to inspire teams toward shared goals and performance targets
   - Conflict resolution and interpersonal communication skills
   - Recognition programs or performance management systems implemented

3. **Safety Culture & Inclusive Environment (0-3 points)**
   - Commitment to worker safety and health as a leadership priority
   - Experience creating psychologically safe and inclusive work environments
   - Communication across hierarchy levels (floor workers to executives)
   - Ability to balance productivity demands with employee well-being

**Scoring Rubric:**
- **9-10 (Inspirational):** Exceptional leader with proven record of transforming team culture. Has measurably improved engagement scores, reduced turnover, and increased productivity. Known for developing talent and creating successors. Strong emotional intelligence.

- **7-8 (Effective):** Strong people management skills with successful multi-year team leadership. Consistent positive feedback from direct reports. Has implemented structured development programs. Good at balancing empathy with accountability.

- **5-6 (Adequate):** Competent supervisor with basic team management experience. Can handle day-to-day personnel issues. Shows potential but needs refinement in motivational techniques and conflict resolution.

- **3-4 (Emerging):** Limited leadership experience or primarily technical/individual contributor background. Struggles with delegation or employee engagement. Needs coaching on soft skills.

- **0-2 (Insufficient):** No management experience or evidence of poor people skills. Not suited for supervisory roles without significant development.

**OUTPUT FORMAT (JSON):**
{
  "score": 9,
  "justification": "Candidate has 11 years managing production teams of 15-30 people. Reduced turnover from 28% to 12% through employee recognition program and career development paths. Strong communication skills evidenced by union relations experience.",
  "strengths": ["Team development", "Retention expert", "Union relations"],
  "development_areas": ["Remote/hybrid team management"]
}
```

### Example Evaluation

**Input:**
- Name: Dwayne Wuckert
- Experience: 11 years
- Skills: ["Leadership", "Conflict Resolution", "Performance Management", "Team Building"]

**Output:**
```json
{
  "score": 9,
  "justification": "Comprehensive leadership skill set with specific expertise in conflict resolution and performance management. 11 years of experience suggests sustained success in people management. Team building focus indicates proactive approach to culture development.",
  "strengths": ["Conflict resolution", "Performance systems", "Cultural builder"],
  "development_areas": ["Scaling leadership across multiple shifts"]
}
```

---

## 🎯 Implementation Guidelines

### How to Use These Prompts

1. **Data Preparation:** Extract candidate information from your database (name, experience, skills)

2. **API Integration:** Use these prompts with OpenAI GPT-4, Anthropic Claude, or Google Gemini
   ```javascript
   const evaluateCandidate = async (candidate) => {
     const prompt = crisisManagementPrompt
       .replace('{{full_name}}', candidate.name)
       .replace('{{experience_years}}', candidate.experience)
       .replace('{{skills_list}}', candidate.skills.join(', '));
     
     const response = await ai.complete(prompt);
     return JSON.parse(response);
   };
   ```

3. **Batch Processing:** Evaluate all candidates in parallel for efficiency

4. **Score Aggregation:** Sum the three scores (max 30) and rank candidates

5. **Human Review:** Use AI scores as initial filter, then conduct interviews with top 10

### Quality Assurance

- **Consistency Checks:** Run same candidate profile multiple times to verify score stability
- **Bias Monitoring:** Review scores by demographic groups to ensure fairness
- **Calibration:** Compare AI scores with human evaluator ratings on sample set
- **Audit Trail:** Store complete AI responses (not just scores) for transparency

---

## 📊 Expected Score Distribution

Based on 40 candidates, typical distribution:

| Score Range | Category | Expected % | Description |
|-------------|----------|------------|-------------|
| 27-30 | Exceptional | 5-10% | Top-tier candidates, immediate interviews |
| 24-26 | Strong | 15-20% | Very good fit, strong consideration |
| 20-23 | Good | 30-40% | Solid candidates, competitive pool |
| 15-19 | Adequate | 25-30% | May need development, situational fit |
| 0-14 | Below Bar | 10-15% | Not recommended for role |

---

## 🔍 Sample Complete Evaluation

**Candidate:** Brandy Carroll  
**Experience:** 15 years  
**Skills:** Crisis Response, Waste Management, Operations

### Results:
```json
{
  "crisis_management": {
    "score": 10,
    "justification": "Explicit 'Crisis Response' skill with 15 years operations experience"
  },
  "sustainability": {
    "score": 9,
    "justification": "Direct waste management expertise demonstrates sustainability knowledge"
  },
  "team_motivation": {
    "score": 8,
    "justification": "Operations background suggests team coordination, though not explicitly leadership-focused"
  },
  "total_score": 27,
  "rank": 2,
  "recommendation": "STRONG HIRE - Interview immediately. Excellent crisis and sustainability fit."
}
```

---

*These prompts are designed for AI-assisted evaluation and should be used as part of a comprehensive hiring process that includes human interviews, reference checks, and skills assessments.*
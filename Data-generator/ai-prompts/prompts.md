# AI Evaluation Prompts – Recycling Production Line Manager

---

## 1️⃣ Crisis Management Evaluation

**Prompt:**
You are an HR expert evaluating a candidate for a recycling production line manager role.
Assess their ability to handle operational crises such as machinery failure, labor shortages,
and safety incidents.

**Input:**
- Experience: {{experience_years}} years
- Skills: {{skills}}

**Output Format (JSON):**
{
  "score": 0-10,
  "justification": "Brief professional explanation"
}

**Scoring Rubric:**
- 0–3: Poor crisis handling
- 4–6: Moderate response
- 7–8: Strong operational thinking
- 9–10: Exceptional leadership under pressure

---

## 2️⃣ Sustainability Knowledge Evaluation

**Prompt:**
Evaluate the candidate’s understanding of sustainability principles,
waste reduction, recycling standards, and environmental compliance.

**Input:**
- Experience: {{experience_years}} years
- Skills: {{skills}}

**Output Format (JSON):**
{
  "score": 0-10,
  "justification": "Clear sustainability reasoning"
}

---

## 3️⃣ Team Motivation & Leadership Evaluation

**Prompt:**
Assess the candidate’s ability to motivate teams, handle conflict,
and maintain productivity in a recycling plant environment.

**Output Format (JSON):**
{
  "score": 0-10,
  "justification": "Leadership assessment"
}

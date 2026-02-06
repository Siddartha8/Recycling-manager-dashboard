import { faker } from '@faker-js/faker';
import fs from 'fs';

const SKILL_POOL = [
  "Leadership",
  "Waste Management",
  "Safety Compliance",
  "Recycling Operations",
  "Sustainability",
  "Team Handling",
  "Process Optimization",
  "Environmental Law"
];

const TOTAL_CANDIDATES = 40;

let sql = "USE recycling_hiring;\n\n";
sql += "INSERT INTO candidates (full_name, experience_years, skills) VALUES\n";

for (let i = 0; i < TOTAL_CANDIDATES; i++) {
  const name = faker.person.fullName();
  const experience = faker.number.int({ min: 1, max: 20 });

  const skills = faker.helpers.arrayElements(
    SKILL_POOL,
    faker.number.int({ min: 3, max: 5 })
  );

  sql += `('${name}', ${experience}, '${JSON.stringify(skills)}')`;

  sql += i === TOTAL_CANDIDATES - 1 ? ";\n" : ",\n";
}

fs.writeFileSync("candidates.sql", sql);

console.log("✅ candidates.sql generated successfully");

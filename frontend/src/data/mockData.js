import { faker } from '@faker-js/faker';

// Generate 40 candidates as per assignment requirement
export const candidates = Array.from({ length: 40 }, (_, index) => {
  return {
    id: index + 1,
    name: faker.person.fullName(),
    experience: faker.number.int({ min: 2, max: 25 }),
    scores: {
      crisis: faker.number.int({ min: 4, max: 10 }),
      sustainability: faker.number.int({ min: 4, max: 10 }),
      motivation: faker.number.int({ min: 4, max: 10 }),
    },
    // Adding a random specialized skill for extra realism
    specialty: faker.helpers.arrayElement(['Operations', 'Supply Chain', 'Engineering', 'Safety']),
  };
});
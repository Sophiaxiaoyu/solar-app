import { springTerms } from './terms/spring';
import { summerTerms } from './terms/summer';
import { autumnTerms } from './terms/autumn';
import { winterTerms } from './terms/winter';

export const solarTerms = {
  spring: springTerms,
  summer: summerTerms,
  autumn: autumnTerms,
  winter: winterTerms
};

// Helper function to find a term by name
export const findTermByName = (termName) => {
  const allTerms = [
    ...springTerms,
    ...summerTerms,
    ...autumnTerms,
    ...winterTerms
  ];
  return allTerms.find(term => term.name === termName);
};
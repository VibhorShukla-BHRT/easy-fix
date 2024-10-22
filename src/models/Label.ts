export let label = [
  'none',
  'hacktoberfest',
  'good first issue',
  'bug',
  'enhancement',
  'documentation',
  'easy fix',
];

export const sortedLabels = [...label];

export type Label = (typeof label)[number];

export function ageInYearsConverter(date) {
  const currentDate = new Date();
  const birthDate = new Date(date);
  const diffTime = Math.abs(currentDate - birthDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  return diffYears;
}

export function ageInMonthsConverter(date) {
  const currentDate = new Date();
  const birthDate = new Date(date);
  const diffTime = Math.abs(currentDate - birthDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(
    diffDays / 30.436875 - Math.floor(diffDays / 365) * 12,
  );
  return diffMonths;
}

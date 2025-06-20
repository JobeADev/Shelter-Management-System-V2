export function ageInYearsConverter(date) {
  const currentDate = new Date();
  const birthDate = new Date(date);
  const diffTime = Math.abs(currentDate - birthDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(
    diffDays / 30.436875 - Math.floor(diffDays / 365) * 12,
  );
  const diffYears = Math.floor(diffDays / 365);
  if (diffYears < 0) {
    return 0;
  }
  if (diffMonths < 0) {
    return diffYears - 1;
  }
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
  if (diffMonths < 0) {
    return 11;
  }
  return diffMonths;
}

export const isToday = (startDate: Date, endDate: Date) => {
  const today = new Date();

  if (today >= startDate && today <= endDate) {
    return true;
  }
};

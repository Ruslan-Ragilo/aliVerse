export const isToday = (startDate: string, endDate: string) => {
  const today = Date.now();

  if (today >= Date.parse(startDate) && today <= Date.parse(endDate)) {
    return true;
  }
};

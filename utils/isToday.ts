export const isToday = async (startDate: string, endDate: string) => {
  const today = await useFetch(
    "https://worldtimeapi.org/api/timezone/Europe/Moscow",
  );

  if (today.data.value.unixtime >= Date.parse(startDate)/1000 && today.data.value.unixtime <= Date.parse(endDate)/1000) {
    return true;
  } else {
    return false;
  }
};

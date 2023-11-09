export const isToday = async (startDate: string, endDate: string) => {
  const { data } = await useFetch(
    "https://worldtimeapi.org/api/timezone/Europe/Moscow",
  );
  const today = data.value.unixtime;

  if (
    today >= Date.parse(startDate) / 1000 &&
    today <= Date.parse(endDate) / 1000
  ) {
    return true;
  } else {
    return false;
  }
};

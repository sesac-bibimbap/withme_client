const dateFormatWithTime = (dateData: Date | undefined) => {
  if (!dateData) return;
  const allDate = new Date(dateData);

  const year = allDate.getFullYear().toString().substring(2);
  const month = allDate.getMonth() + 1;
  const date = allDate.getDate();
  const hours = allDate.getHours();
  const minute = allDate.getMinutes();

  return `${year}-${month}-${date} ${
    hours > 12 ? `오후 ${hours % 12}` : `오전 ${hours}`
  }:${minute >= 10 ? minute : `0${minute}`}`;
};

export default dateFormatWithTime;

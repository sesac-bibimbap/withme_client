const dateFormatting = (dateData: Date | undefined) => {
  if (!dateData) return;
  const allDate = new Date(dateData);

  const year = allDate.getFullYear();
  const month = allDate.getMonth() + 1;
  const date = allDate.getDate();
  return `${year}.${month}.${date}`;
};

export default dateFormatting;

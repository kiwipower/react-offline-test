function formatDate(dateString: string) {
  const date = new Date(dateString);

  const months = [
    "January",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];

  const hoursData = date.getUTCHours();
  const minutesData = date.getUTCMinutes();
  const monthsData = date.getUTCMonth();

  const hours = hoursData > 12 ? hoursData - 12 : hoursData;
  const minutes = minutesData < 10 ? `0${minutesData}` : minutesData;
  const timeOfDay = hoursData < 12 ? "am" : "pm";
  const month = months[monthsData];

  return `${month} ${date.getUTCDate()}, ${hours}:${minutes}${timeOfDay}`;
}

export default formatDate;

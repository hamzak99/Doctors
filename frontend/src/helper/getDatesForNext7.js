export function getDatesForNext7Days() {
  const today = new Date("2025-01-27"); // Get the current date
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today); // Clone the current date
    currentDate.setDate(today.getDate() + i); // Add `i` days to the current date
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
    });
    let temp = formattedDateTime.split(" ");

    dates.push(temp); // Format the date as a string
  }

  return dates;
}

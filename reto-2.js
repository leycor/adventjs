function countHours(year, holidays) {
  const weekFines = [0, 6];
  const extraHours = holidays.reduce((totalHours, date) => {
    const day = new Date(`${date}/${year}`).getDay();
    return totalHours + (weekFines.includes(day) ? 0 : 2);
  }, 0);
  return extraHours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; 
countHours(year, holidays);

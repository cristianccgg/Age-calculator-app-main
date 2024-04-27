const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("month-result");
const dayResult = document.getElementById("day-result");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const btn = document.getElementById("btn");

const calculateDifferences = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  let yearDiff = currentYear - year;
  let monthDiff = currentMonth - month;
  let dayDiff = currentDay - day;

  if (dayDiff < 0) {
    monthDiff--;
    dayDiff += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  yearResult.innerText = yearDiff >= 0 ? yearDiff : "--";
  monthResult.innerText = monthDiff >= 0 ? monthDiff : "--";
  dayResult.innerText = dayDiff >= 0 ? dayDiff : "--";
};

const validateInputs = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const isDayValid = !isNaN(day) && day >= 1 && day <= 31;
  const isMonthValid = !isNaN(month) && month >= 1 && month <= 12;
  const isYearValid = !isNaN(year) && year <= currentYear;

  dayError.classList.toggle("active", isDayValid);
  monthError.classList.toggle("active", isMonthValid);
  yearError.classList.toggle("active", isYearValid);

  ageCalc(isDayValid, isMonthValid, isYearValid);
};

const ageCalc = (dayValid, monthValid, yearValid) => {
  if (dayValid && monthValid && yearValid) {
    calculateDifferences();
  } else {
    yearResult.innerText = "--";
    monthResult.innerText = "--";
    dayResult.innerText = "--";
  }
};

btn.addEventListener("click", () => {
  validateInputs();
});
ageCalc();

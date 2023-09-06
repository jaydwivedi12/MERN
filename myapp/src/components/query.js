import data from "./CompanyData.js";

// const dates = Object.keys(data).map((program) => ({
//   Programs: program,
//   Startdate: data[program]["Start Date"],
//   "End date": data[program]["End Date"],
// }));

// console.log(dates);

// const progAData = data.A.Branches["Branch A"].total.completed;
// console.log(progAData);
const duration = Object.keys(data).map((program) => {
    const date1 = new Date(data[program]["Start Date"]); 
    const date2 = new Date(data[program]["End Date"]); 
    
    const days_between = calculateDaysBetween(date1, date2);
  
    return {
      Program: program,
      Duration: days_between,
    };
  });
  
  function calculateDaysBetween(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(date1 - date2);
    return Math.round(differenceMs / ONE_DAY);
  }
  
  console.log(duration);
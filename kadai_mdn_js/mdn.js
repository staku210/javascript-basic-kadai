const today = new Date(); 
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(today.toLocaleDateString(undefined,options));

let dataYear=today.getFullYear();

let dataMonth=today.getMonth();

let dataDate=today.getDate();


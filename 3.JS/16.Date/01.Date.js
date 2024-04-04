const today = new Date();
console.log(today);

const date = new Date(1000 * 3600 * 24 * 365);
console.log(date);

const myDate = new Date(2024, 3, 18, 5, 15, 17);
console.log(myDate);

console.log(today.toISOString());

// récupérer un timestamp

const timestampDate = Date.parse("2024-04-04T07:05:15.211Z");
console.log(timestampDate);

const newDate = new Date(1712214315212);
console.log(newDate);

const todayTimeStamp = Date.now();
console.log(todayTimeStamp);

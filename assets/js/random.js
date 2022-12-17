// let num_days = 3
let dailyBudget = [5, 10, 15]
let stores = ["Gas Station", "Drug Store", "Grocery Store", "Walmart", "Dollar Store"];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

let getRandomFromArray = function(values){
	let randomIndex = Math.floor(Math.random() * values.length);
	return values[randomIndex]
}

let randomBudget = getRandomFromArray(dailyBudget);
let randomStore = getRandomFromArray(stores);
let formatBudget = formatter.format(randomBudget);

document.getElementById("store").innerHTML = randomStore;
document.getElementById("budget").innerHTML = formatBudget;


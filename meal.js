document.getElementById('meal-btn').addEventListener('click', function () {
	const mealField = document.getElementById('meal-field');
	// console.log(mealField);
	const mealvalue = mealField.value;
	mealField.value = '';
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealvalue}`;
	fetch(url)
		.then(res => res.json())
		.then(data => mealsDisplay(data));
})
const mealsDisplay = (name) => {
	const meals = name.meals;
	for (const meal of meals) {
		console.log(meal);
	}
}
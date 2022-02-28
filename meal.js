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
	const mealsContainer = document.getElementById('meals-container');
	mealsContainer.textContent = '';
	for (const meal of meals) {
		// console.log(meal.idMeal);
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `
			<div class="card">
					<img src="${meal.strMealThumb}" class="card-img-top" alt="..." onclick = "mealDetilesId(${meal.idMeal})">
					<div class="card-body">
						<h5 class="card-title">${meal.strMeal}</h5>
						<p class="card-text" style="text-align: justify;">${meal.strInstructions.slice(0, 200)}</p> 
					</div>
			</div>
		`
		mealsContainer.appendChild(div);
	}
}
const mealDetilesId = meal => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
	fetch(url)
		.then(res => res.json())
		.then(data => displayId(data.meals[0]));
}
const displayId = idItem => {
	console.log(idItem);
	const cardContainer = document.getElementById('card-container');
	cardContainer.textContent = '';
	cardContainer.innerHTML = `
			<div class="card">
				<img src="${idItem.strMealThumb}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${idItem.strMeal}</h5>
					<p class="card-text">${idItem.strInstructions.slice(0, 100)}</p>
					<a href="${idItem.strYoutube}" class="btn btn-primary">Go somewhere</a>
				</div>	
		    </div>
	`
}

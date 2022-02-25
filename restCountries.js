const restCountries = () => {
	fetch('https://restcountries.com/v3.1/all')
		.then(res => res.json())
		.then(data => displayRestCountries(data));
}
const displayRestCountries = (countries) => {
	// console.log(countries);
	const conuntryContainer = document.querySelector('.country-container')
	countries.forEach(countrie => {
		// console.log(countrie);
		// console.log(countrie.capital + ' ' + countrie.borders);
		const div = document.createElement('div');
		div.classList.add('country')
		div.innerHTML = `
			<h2> Name : ${countrie.name.common} </h2> 
			<p> Capital : ${countrie.capital} </p> 
			<button onclick="restCountriesByName('${countrie.name.common}');" class="btn"> Details </button>
		`
		/* const h2 = document.createElement('h2');
		h2.innerText = `Name : ${countrie.name.common}`;
		div.appendChild(h2);
		const p = document.createElement('p');
		p.innerText = ` Capital : ${countrie.capital}`;
		div.appendChild(p); */
		conuntryContainer.appendChild(div);
	});
}
const restCountriesByName = (name) => {
	console.log(name)
}
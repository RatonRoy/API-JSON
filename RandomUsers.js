const randomUsers = () => {
	fetch('https://randomuser.me/api/?results=5')
		.then(res => res.json())
		.then(data => displayRandomUsers(data));
}
const displayRandomUsers = user => {
	const resultContainer = document.querySelector('#randomUser');
	// here user refer the result object inside the result object remains 5  array elements. So we can not for ... of loop through on users becase for ... of loop actually work on array elements. so first select the array elements then loop through that element.
	// console.log(user);
	const users = user.results;
	// console.log(users);
	for (const person of users) {
		// console.log(person);
		// console.log(person.name.title + ' ' + person.name.first);
		const p = document.createElement('p');
		p.innerHTML = `<h2> Name : ${person.name.title} ${person.name.first} ${person.name.last} </br> <h4> Email: ${person.email} </h4>`;
		resultContainer.appendChild(p);
	}
}
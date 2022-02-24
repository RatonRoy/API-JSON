function getUserData() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
	.then(data => usersDataDisplay(data))
}
// display users data by this function 
/* function usersDataDisplay(data) {
	console.log(data);
} */
// display the users name email and id 
function usersDataDisplay(data) {
	// console.log(data);
	const userUl = document.querySelector('.user-container')
	for (const user of data) {
		const li = document.createElement('li');
		li.innerText = `name : ${user.name}  email : ${user.email}  Id : ${user.id} addres : ${user.address.city}`; 
		li.classList.add('list-class');
		userUl.appendChild(li); 
		console.log(user.name);
	}
}

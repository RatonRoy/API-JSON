/* 
What is an API? (Application Programming Interface)
API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
*/
/* after fetch the url link remain json formate object then convert it into a normal object formate by the arrow function. Here response is the parameter of the arrow function and response.json() is the formate of convert a json object to a normal object. Then console.log(json) means show the normal object */
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
	.then(json => console.log(json))
//   only show the object id use json.id 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
	.then(json => console.log(json.id))
//   show the object title use json.title 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
	.then(json => console.log(json.title))
  
	// manual fuction formate 
function myFunction() {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	  .then(json => console.log(json))
}
	// get the users data 
function getUserData() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => displayUsers(data));
}
// display users data 
function displayUsers(data) {
	console.log(data);
}
// get posts data 
function getPostData() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => console.log(data));
}
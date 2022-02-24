function getPostData() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => postDataDisplay(data));
}
// create the display function 
function postDataDisplay(posts) {
	const postContainer = document.querySelector('.post-container');
	for (const post of posts) {
		// console.log(post.title);
		const div = document.createElement('div');
		div.classList.add('div-container');
		div.innerHTML = `<h1> ${post.title} </h1> 
			<p> ${post.body} </p> 
		`
		postContainer.appendChild(div);
	}
}
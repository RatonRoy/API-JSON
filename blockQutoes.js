const blockQuotes = () => {
	fetch('https://api.kanye.rest/')
		.then(res => res.json())
		.then(data => displayPosts(data));
}
// display data functions 
const displayPosts = (quote) => {
	const quoteElement = document.querySelector('#blockQutoes');
	quoteElement.innerText = quote.quote;
}
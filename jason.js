const jobHolder = {
	name: 'abc', position: 'developer', age: '30',
	skills: [web1 = 'html', web2 = 'css', web3 = 'javascript']
}
// console.log(jobHolder);
/* inside the jobholder skills is an array. If you want to get an element write jobHolder.skills[index of the array elements] */
console.log(jobHolder.skills[2]);
/* the jobHolder object you want to get it like an json formate then write JSON.stringify(the object name ). So it become like a string and the json formate is all files remain inside a curly braket . property and property value remains double cotation and between them remain colon and end of the give a commma  */
const jobHolderJson = JSON.stringify(jobHolder);
console.log(jobHolderJson);
/* convert a json formate to a normal object formate use the json.parse(jsonFormate name) */
const convertObject = JSON.parse(jobHolderJson);
console.log(convertObject);
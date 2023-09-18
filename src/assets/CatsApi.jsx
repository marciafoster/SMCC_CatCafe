
const CatsApi = async ()=>{ 



const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06dac55145msh43ca0f365b5b73cp138cdfjsn37f31adbc82f',
		'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	 console.log(data);
	 return data
} catch (error) {
	console.error(error);
}
}
export default CatsApi
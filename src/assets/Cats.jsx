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
	const result = await response.json();
	 console.log(result);
} catch (error) {
	console.error(error);
}



// Weather API for Temperature and Conditions
// Credit: Asish George Tech
// URL: https://www.youtube.com/watch?v=6trGQWzg2AI&ab_channel=AsishGeorgeTech

const weatherData = () => {
	navigator.geolocation.getCurrentPosition((position) => {
		console.log(position);

		let latitude = position.coords.latitude;
		let longitude = position.coords.longitude;
		let key = '5f4e151d3bc884e41220825957dbab13';
		let units = 'imperial';

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				showWeather(data);
			});
	});
};

weatherData();

const showWeather = (data) => {
	let temperature = data.main.temp;
	let conditions = data.weather[0].main;
	console.log(temperature);
	console.log(conditions);

	$('.weather-data').append(Math.round(temperature) + '°F ' + conditions);
};

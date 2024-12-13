const API_KEY = `ea518ed67dc4f5edc6ff854bffdec68f
`;
const inputData = document.getElementById("inputfield");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=${API_KEY}
`;

  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();
  console.log(response);
  return showData(response)
};

const showData = (data) => {
    showWeather.innerHTML = `<img width="80" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}>
    <h1>${data.main.temp} C</h1>
    <h4>${data.weather[0].main}</h2>
    <h4>${data.main.feels_like}</h3>`
}
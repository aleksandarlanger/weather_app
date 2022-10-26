const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7e200c91328e1a88a58e32c3a722040e`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.cod === 400) {
      callback("Please enter valid location data", undefined);
    } else {
      callback(undefined, {
        temperature: Math.floor(body.main.temp),
        feelsLike: Math.floor(body.main.feels_like),
        description: body.weather[0].description,
        humidity: body.main.humidity,
      });
    }
  });
};

module.exports = forecast;

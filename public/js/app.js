const weatherForm = document.querySelector("#weather");
const search = document.querySelector("#search");
const report = document.querySelector(".report");
const error = document.querySelector(".error");
const load = document.querySelector(".loading");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  load.textContent = " Loading .. Wow";

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          load.textContent = "";
          error.textContent = data.error;
        } else {
          console.log(data);
          const temp = data.forecast.temperature;
          const city = data.location;
          const description = data.forecast.description;

          document.querySelector(".report").innerHTML = `
            
            <div class="tempwrap">

            <p class="temp"> ${temp}°C </p>
            
            </div>

            <div class="info">

            <p class="location"> ${city}  </p>
            <p class="desc"> ${description} </p>

            </div>
            `;

          if (temp >= 30) {
            document.querySelector(".temp").style.color = "#DD5353";
          }
        }
      });
    }
  );
});

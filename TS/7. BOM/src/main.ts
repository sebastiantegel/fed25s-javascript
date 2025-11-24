import type { Position } from "./models/Position";
import "./style.css";

let intervalId = 0;
let watchId = 0;
let counter = 0;
const positions: Position[] = [];

document.getElementById("intervalStart")?.addEventListener("click", () => {
  intervalId = setInterval(() => {
    const result = document.getElementById("intervalResult");

    if (!result) return;

    result.innerHTML = counter.toString();
    counter++;
  }, 2000);
});

document.getElementById("intervalEnd")?.addEventListener("click", () => {
  clearInterval(intervalId);
});

const success = (pos: GeolocationPosition) => {
  const result = document.getElementById("geoResult");

  if (!result) return;

  result.innerHTML = JSON.stringify(pos.coords.toJSON());
  //   console.log(pos.coords);
};

const successMany = (pos: GeolocationPosition) => {
  positions.push({
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  });

  const result = document.getElementById("geoResult");

  if (!result) return;

  result.innerHTML = JSON.stringify(positions);
  console.log(positions);
};

const error = (error: GeolocationPositionError) => {
  console.error(error.message);
};

document.getElementById("geoStartOnce")?.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error);
});

document.getElementById("geoStart")?.addEventListener("click", () => {
  watchId = navigator.geolocation.watchPosition(successMany, error);
});

document.getElementById("geoEnd")?.addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchId);
});

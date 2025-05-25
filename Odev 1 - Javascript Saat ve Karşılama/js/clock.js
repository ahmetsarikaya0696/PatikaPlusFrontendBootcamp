function showTime() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let day = now.getDay();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  document.getElementById(
    "myClock"
  ).textContent = `${hours}:${minutes}:${seconds} ${days[day]}`;
}

document.addEventListener("DOMContentLoaded", function () {
  let name = prompt("Name:");
  document.getElementById("myName").textContent = name;

  setInterval(showTime, 1000);
});

const canvas = document.getElementById('petaLapangan')
const ctx = canvas.getContext("2d")

canvas.style.backgroundImage = 'url(/src/images/lap_nasional.png)';
canvas.style.backgroundRepeat = 'no-repeat';

const consoleCoordinate = document.querySelector('.consoleCoordinate');

canvas.addEventListener('click', function (e) {
  const x = Math.round(e.pageX - this.offsetLeft)
  const y = Math.round(e.pageY - this.offsetTop)

  consoleCoordinate.innerHTML = `Coordinate: ${x},${y}`;
})
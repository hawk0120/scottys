// Get the canvas and context
const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Car properties
const carWidth = 100;
const carHeight = 65;
let carX = 50;
const carY = canvas.height - carHeight - 20;
const carSpeed = 3;


 // Car image
 const carImage = new Image();
 carImage.src = 'icons/car.png';  



// Function to draw the car
function drawCar() {
    ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
}

// Function to update the car position
function updateCar() {
  carX += carSpeed;
  

  // Reset car position when it goes off the canvas
  if (carX > canvas.width) {
    carX = -carWidth;
  }
}

// Function to handle resizing
function resizeCar(newWidth) {
    carWidth = newWidth;
    }

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
 
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});
document.addEventListener('click', () => {
  shakeCar(); // Call the shakeCar function when the document is clicked
});

// Function to shake the car
function shakeCar() {
  const shakeIntensity = 20; // Adjust the intensity of the shake
  const shakeDuration = 1000; // Adjust the duration of the shake in milliseconds
  const startTime = Date.now();

  function shake() {
    const elapsedTime = Date.now() - startTime;
    
    if (elapsedTime < shakeDuration) {
      // Generate a random offset within the shakeIntensity
      const offsetX = Math.random() * shakeIntensity - shakeIntensity / 2;
      const offsetY = Math.random() * shakeIntensity - shakeIntensity / 2;

      // Apply the shake to the car position
      carX += offsetX;
      carY -+ canvas.height - carHeight - offsetY;;

      // Request the next animation frame to continue the shake
      requestAnimationFrame(shake);
    } 
  }

  // Call the shake function to start the shake
  shake();
}


// Function to animate the car
function animate() {
  clearCanvas();
  updateCar();
  drawCar();
  requestAnimationFrame(animate);
}

handleResize();
window.addEventListener('resize', handleResize);




animate();

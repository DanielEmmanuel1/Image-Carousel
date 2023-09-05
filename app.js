const imgSlideLeftButton = document.getElementById('lbut');
const imgSlideRightButton = document.getElementById('rbut');
const imgContainer = document.querySelector('.container');
const images = ['./pics/Model1.jpg', './pics/Model2.jpg', 
'./pics/Model3.jpg', './pics/Model4.jpg', './pics/Model5.jpg', 
'./pics/Model6.jpg', './pics/Model8.jpg', './pics/Model9.jpg', 
'./pics/Model10.jpg'];
let currentIndex = 0;

const image = document.createElement('img');
image.width = 600;
image.height = 600;
image.src = images[currentIndex];
imgContainer.appendChild(image);
// images.style.width = '10px';
imgSlideLeftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

imgSlideRightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});

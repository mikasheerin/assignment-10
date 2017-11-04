var photo1 = document.getElementById("guitar-image-container");

var photo2 = document.getElementById("records-image-container");

var photo3 = document.getElementById("studio-image-container");

var photo4 = document.getElementById("streaming-image-container");

if (document.photo) {
  var photo1 = new Image(); // Preload an image
  photo1.src = "/images/guitar.jpg";
  var photo2 = new Image(); // Preload second image
  photo2.src = "/images/records.jpg";

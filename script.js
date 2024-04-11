//When clicking the logo it will jump back to the main page
var icon = document.getElementById("icon");
icon.addEventListener('click', function() {
  window.location.href = window.location.href;
});


document.addEventListener("DOMContentLoaded", function() {
  var homeLink = document.getElementById("home"); // Get the Home link element
  var videoLink = document.getElementById("video"); // Get the Video link element
  var videoSection = document.getElementById("video-section"); // Get the video section element
  var newsLink = document.getElementById("graphs"); // Get the news link element
  var petitionSection = document.getElementById("petition"); //Get the petition section element


  //Testing to see if the element ids are printed correctly
  console.log("Home link:", homeLink);
  console.log("Video link:", videoLink);
  console.log("News link:", newsLink);
  console.log("Petition link:", petitionSection);

  // Add click event listener to the Home link
  homeLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Add click event listener to the Video link
  videoLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the video section smoothly
    videoSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add click event listener to the News link
  newsLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the news section smoothly
    document.getElementById("news-section").scrollIntoView({ behavior: "smooth" });
  });

  petitionSection.addEventListener("click", function(event) {
    event.preventDefault();
    // Scroll to the petitions section smoothly
    document.getElementById("petition-form").scrollIntoView({ behavior: "smooth" });
  });
});


//Function for the scrolling in the navbars
function handleClick(buttonId) {

  // Generate different prompts based on buttonId
  if (buttonId === 1) {
    // Prompt for button 1
    var message = "Close your laptop/mobile devices now!!!";
    alert(message);
  } else if (buttonId === 2) {
    // Prompt for button 2
    var message = "No seriously close it..";
    alert(message);
  }
}
// Adding event listeners to buttons
document.getElementById("button1").addEventListener("click", function() {
  handleClick(1);
});

document.getElementById("button2").addEventListener("click", function() {
  handleClick(2);
});

//Toggle dark mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);


//Animation for webpage when scrolling up and down

const body = document.body;
let oldScroll = window.pageYOffset;

window.addEventListener('scroll', function() {
  let newScroll = window.pageYOffset;

  if (newScroll > oldScroll) {
    body.style.animation = "pushContent 0.5s ease-in-out";
  } else {
    body.style.animation = "pushContent 0.5s ease-in-out";
  }

  oldScroll = newScroll;
});


//Slide show 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".image");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = 1;
  dots[slideIndex - 1].classList.add("active");
}


//Petition form

//Tracks the entire counters of support
let totalSignatures = 3;

const addSignature = (name, city) => {
  const petitionContainer = document.querySelector('.signatures');
  const signature = document.createElement('p');
  signature.textContent = `🖊️ ${name} from ${city} supports this.`;
  signature.classList.add('signature'); // Add the signature class


  petitionContainer.appendChild(signature);
  totalSignatures++;

  updateTotalCount();
}

const updateTotalCount = () => {
  const totalCountElement = document.getElementById('total-count');
  totalCountElement.textContent = `${totalSignatures} people have signed this petiton and support this cause.`;
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  var name = petitionInputs.name.value.trim();
  var city = petitionInputs.city.value.trim();
  var email = petitionInputs.email.value.trim();

  //Uses regex to make sure that email pattern is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Array.from(petitionInputs).forEach(input => {
    input.style.border = "";
  });

  // TODO: Loop through all inputs
  if (name === '') {
    petitionInputs.name.style.border = "1px solid red";
    containsErrors = true;
  }
  if (city === '') {
    petitionInputs.city.style.border = "1px solid red";
    containsErrors = true;
  }
  if (email === '') {
    petitionInputs.email.style.border = "1px solid red";
    containsErrors = true;
  }
  else if (!emailPattern.test(email)) {
    // If email is not empty, check its format
    petitionInputs.email.style.border = "1px solid red";
    containsErrors = true;
  }

  if (containsErrors) {
    // Stop form submission if there are empty fields
    return;
  }

  addSignature(name, city);
  petitionInputs.name.value = '';
  petitionInputs.city.value = '';
  petitionInputs.email.value = '';
}

const signNowButton = document.getElementById('sign-now-button');

signNowButton.addEventListener('click', validateForm);

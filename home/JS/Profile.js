const FirstElement = document.querySelector('.name-design');
const SecondElement = document.querySelector('.Hello');
const ThirdElement = document.querySelector('.projects');
const FourthElement = document.querySelector('.socials');

const rectFirst = FirstElement.getBoundingClientRect();
const FirstHeight = rectFirst.height;

const rectSecond = SecondElement.getBoundingClientRect();
const SecondHeight = rectSecond.height;

console.log('Height of the first section:', FirstHeight);
console.log('Height of the second section:', SecondHeight);

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
  
    // Adjust opacity based on scroll position (adjust threshold as needed)
    if (scrollPosition > 100) {
      FirstElement.style.opacity = '0';
    } else {
      FirstElement.style.opacity = '1';
    }

    if (scrollPosition < 500 | scrollPosition > 800) {
      SecondElement.style.opacity = 0;
    } else {
      SecondElement.style.opacity = 1;
    }

    if (scrollPosition < 800 | scrollPosition > 1600) {
      ThirdElement.style.opacity = 0;
    } else {
      ThirdElement.style.opacity = 1;
    }

    if (scrollPosition < 1700) {
      FourthElement.style.opacity = 0;
    } else {
      FourthElement.style.opacity = 1;
    }
  });

  const rootElement = document.documentElement;
  const element = document.querySelector('.body-container');
  const icon = document.getElementById('change-icon')
  
  let currentMode = 'dark'; // store the current mode
  
  function modeChange() {
    if (currentMode === 'dark') {
      // Switch to light mode
      rootElement.style.setProperty('--fg-color', getComputedStyle(rootElement).getPropertyValue('--light-fg-color'));
      rootElement.style.setProperty('--bg-color', getComputedStyle(rootElement).getPropertyValue('--light-bg-color'));
      currentMode = 'light';
      icon.textContent = '🌙';
      } else {
      // Switch to dark mode
      rootElement.style.setProperty('--fg-color', getComputedStyle(rootElement).getPropertyValue('--dark-fg-color'));
      rootElement.style.setProperty('--bg-color', getComputedStyle(rootElement).getPropertyValue('--dark-bg-color'));
      currentMode = 'dark';
      icon.textContent = '💡';
    }
  }

// Get the link elements
const socialsLinks = document.querySelectorAll(".socials-link");

// Add an event listener to each link
socialsLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "socials"
    const socialsSection = document.querySelector(".socials");

    // Scroll to the socials section
    socialsSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const aboutLink = document.querySelectorAll(".about-link");

// Add an event listener to each link
aboutLink.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "about"
    const aboutSection = document.querySelector(".about");

    // Scroll to the socials section
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const projectLink= document.querySelectorAll(".project-link");

// Add an event listener to each link
projectLink.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "projects"
    const ProjectSection = document.querySelector(".projects");

    // Scroll to the socials section
    ProjectSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

 // Get the width of the screen
const screenWidth = window.innerWidth;

// Define the breakpoint for mobile devices
const mobileBreakpoint = 768; // adjust this value according to your needs

// Add an event listener to the window resize event
window.addEventListener('resize', () => {
  // Check if the screen width is less than or equal to the mobile breakpoint
  if (screenWidth <= mobileBreakpoint) {
    // Adjust the layout for mobile devices
    document.body.classList.add('mobile');
  } else {
    // Remove the mobile class when the screen width is greater than the breakpoint
    document.body.classList.remove('mobile');
  }
});

// Initial check on page load
if (screenWidth <= mobileBreakpoint) {
  document.body.classList.add('mobile');
}

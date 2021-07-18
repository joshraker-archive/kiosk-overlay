const urlParams = new URLSearchParams(location.search);
const homePage = urlParams.get('homePage');
const iframe = document.getElementById('iframe');
const homeButton = document.getElementById('home_button');

function returnToHome() {
  iframe.src = homePage;
}

homeButton.onclick = returnToHome;
returnToHome();

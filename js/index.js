const mobile_client_img =
  "https://www.econsor.de/wp-content/uploads/2021/09/unsere-kunden-2.jpg.webp";
const desktop_client_img =
  "https://www.econsor.de/wp-content/uploads/2021/09/unsere-kunden-4.jpg.webp";

function isMobileDevice() {
  const screenSize = window.innerWidth;

  if (screenSize < 700) {
    return true;
  }
  return false
}


function cardHover(element) {
  element.classList.add("active");
}

function cardHoverLeave(element) {
  element.classList.remove("active");
}

function workCardHover(element) {
  element.classList.add("active");
}

function workCardHoverLeave(element) {
  element.classList.remove("active");
}

function handleNavigationBar() {
  const navigation = document.querySelector(".nav-drawer")
  
  if(navigation.classList.contains("open")) {
    document.body.style.overflow = "auto"
    navigation.style.display = "none"
    navigation.classList.remove("open")

    return
  }
  document.body.style.overflow = "clip"
  navigation.style.display = "flex"
  navigation.classList.add("open")
}

function handleHoverDropDown(element) {
  const div = element.firstElementChild.nextElementSibling
  div.style.display = "flex"
}

function handleLeaveDropDown(element) {
  const div = element.firstElementChild.nextElementSibling
  div.style.display = "none"
}
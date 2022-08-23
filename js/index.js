const mobile_client_img =
  "https://www.econsor.de/wp-content/uploads/2021/09/unsere-kunden-2.jpg.webp";
const desktop_client_img =
  "https://www.econsor.de/wp-content/uploads/2021/09/unsere-kunden-4.jpg.webp";
const mobile_certification =
  "https://www.econsor.de/wp-content/uploads/2022/06/econsor-partner-mobil.jpg.webp";

const locationDetails = {
  "Digital Agency Stuttgart":
    "We are your digital agency in Stuttgart for individual requirements and solutions for your website. Get to know us",
  "Digital Agency Heilbronn":
    "Tailor-made strategies and individual solutions from our experts in Heilbronn. Your digital agency in the center.",
  "Digital Agency Heidelberg":
    "Our digital agency in Heidelberg offers you all services related to online shops, websites, web design and online marketing.",
  "Digital Agency Nuremberg":
    "Are you looking for a digital agency in the Nuremberg area? Our experts will be happy to advise you in Nuremberg and the surrounding area.",
  "Digital Agency Munich":
    "You will find our digital agency in the center of Munich. Come by for a personal consultation.",
  "Digital Agency Frankfurt":
    "Our experts are also available in Frankfurt. We offer you sustainable solutions for your online presence.",
};

window.addEventListener("scroll", function () {
  const nav2 = document.querySelector(".nav-2");
  if (this.scrollY > 40) {
    nav2.style.position = "fixed";
  } else {
    nav2.style.position = "sticky";
  }
});

function isMobileDevice() {
  const screenSize = window.innerWidth;

  if (screenSize < 700) {
    return true;
  }
  return false;
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
  const navigation = document.querySelector(".nav-drawer");

  if (navigation.classList.contains("open")) {
    document.body.style.overflow = "auto";
    navigation.style.display = "none";
    navigation.classList.remove("open");

    return;
  }
  document.body.style.overflow = "clip";
  navigation.style.display = "flex";
  navigation.classList.add("open");
}

function handleHoverDropDown(element) {
  const text = element.firstElementChild;
  text.style.color = "var(--light-blue)";

  const div = text.nextElementSibling;
  div.style.display = "inline-block";
}

function handleLeaveDropDown(element) {
  const text = element.firstElementChild;
  text.style.color = "black";

  const div = text.nextElementSibling;
  div.style.display = "none";
}

function handleLocation(element) {
  const title = element.firstElementChild.textContent.trim();
  const paragraph = document.querySelector("#about-location");
  paragraph.textContent = locationDetails[title];

  paragraph.parentElement.lastElementChild.firstElementChild.textContent = `Go To ${
    title.split(" ")[1]
  } ${title.split(" ")[2]}`;
}

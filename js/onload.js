(function loadClientsImage() {
  const clientImgElement = document.querySelector("#client-img");
  const size = isMobileDevice();

  if (size) {
    clientImgElement.src = mobile_client_img;
  }
})();

(function loadCertificationImage() {
  const clientImgElement = document.querySelector("#certification-img");
  const size = isMobileDevice();

  if (size) {
    clientImgElement.src = mobile_certification;
  }
})();

(function addScrollsToRefrences() {
  if (isMobileDevice()) {
    const locationDetails = document.querySelector(".location .details");
    const allLocations = document.querySelectorAll(
      ".location .items .story-card"
    );

    for (locationItem of allLocations) {
      locationItem.addEventListener("click", () => {
        locationDetails.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
})();

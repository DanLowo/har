(function loadClientsImage() {
  const clientImgElement = document.querySelector("#client-img");
  const size = isMobileDevice();

  if (size) {
    clientImgElement.src = mobile_client_img;
  }
})();

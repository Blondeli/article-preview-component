// Function to activate popup
function popup() {
  let width = window.innerWidth;
  // Check if the user sees the desktop or mobile design
  if (width >= 768) {
    let popup = document.getElementsByClassName("desktop-popup");
    if (window.getComputedStyle(popup[0]).getPropertyValue("display") === "none") {
      popup[0].style.display = "block";
    } else {
      popup[0].style.display = "none";
    }
  }
  else {
    let popup = document.getElementsByClassName("mobile-popup");
    popup[0].style.display = "block";
    shareButton.style.display = "none";
  }
}

// Function to close popup when in mobile design
function closePopup() {
  let popup = document.getElementsByClassName("mobile-popup");
  popup[0].style.display = "none";
  shareButton.style.display = "block";
}

// Add event listener for the share icon
let shareButton = document.querySelector(".author .share-icon-box");
shareButton.addEventListener("click", popup);

let popupButton = document.querySelector(".popup-share-icon-box");
popupButton.addEventListener("click", closePopup);

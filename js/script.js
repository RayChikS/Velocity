const tabsBtns = document.querySelectorAll(".tabs-btn");
const tabImages = document.querySelectorAll(".tabs-image");

//this fun hide all tabs and remove active from the buttons
function hideTabs() {
  tabImages.forEach((image) => image.classList.add("visually-hidden"));
  tabsBtns.forEach((btn) => btn.classList.remove("active"));
}

//this function shows the tab number and makes the corresponding button active

function showTabs(index) {
  tabImages[index].classList.remove("visually-hidden");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTabs(0);

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
  })
);

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const navLinks = document.querySelectorAll(".nav-link");

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeShow();
  removeBorder();
  // Add border to current tab item
  const tabItems = document.querySelector(`#tab-${this.id}`);
  tabItems.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#tab-${this.id}-content`);
  //Add show class
  tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

// Listen for nav item click
navLinks.forEach((item) => {
  item.addEventListener("click", selectItem);
});

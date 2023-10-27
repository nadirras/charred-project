//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  // biar keywordnya langsung aktif
  searchBox.focus();
  // untuk mematikan default kalau scroll klik si search gak ke atas lagi
  e.preventDefault();
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  //selama yang diklik bukan hamburger dan navbar (alias dimana pun), hilangin active nya
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// document.addEventListener("click", function (e) {
//   //selama yang diklik bukan hamburger dan navbar (alias dimana pun), hilangin active nya
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }

// });

//Nyoba buat ganti arrow

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const chevronDownIcon = document.getElementById("chevronDownIcon");
  const chevronUpIcon = document.getElementById("chevronUpIcon");
  const hiddenContent = document.getElementById("hiddenContent");

  toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class on the hidden content
    hiddenContent.classList.toggle("active");

    // Toggle the visibility of the chevron icons
    chevronDownIcon.classList.toggle("hidden");
    chevronUpIcon.classList.toggle("hidden");
  });

  feather.replace();
});

// adjust image dimension
// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("modal");
//   const modalContainer = document.querySelector(".modal-container");
//   const modalImage = document.getElementById("modalImage");

//   modalImage.addEventListener("load", () => {
//     const imageWidth = modalImage.naturalWidth;
//     const imageHeight = modalImage.naturalHeight;

//     // Set the modal container's width and height to match the image
//     modalContainer.style.width = `${imageWidth}px`;
//     modalContainer.style.height = `${imageHeight}px`;

//     // Show the modal after setting the dimensions
//     modal.style.display = "flex";
//   });

//   // Add the rest of your modal logic here
//   document.querySelector("#peta-akademi").onclick = (e) => {
//     e.preventDefault();
//     modal.classList.toggle("active");
//   };

//   document.querySelector(".close-icon").onclick = (e) => {
//     e.preventDefault();
//     modal.classList.remove("active");
//   };
// });

document.querySelector("#peta-akademi").onclick = (e) => {
  e.preventDefault();
  //add swal fire
  Swal.fire({
    title: "Peta Akademi Mangroveshield",
    // text: "Modal with a custom image.",
    imageUrl: "img/markas-akademi2.jpg",
    imageWidth: 1000,
    // imageHeight: 200,
    imageAlt: "Custom image",
    background: "#fff",
    customClass: {
      confirmButton: "custom-confirm-class",
    },
  });
};

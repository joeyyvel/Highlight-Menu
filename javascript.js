//first of all i need to access all the links
//bodys id of the current page. this script will run
//on every page we visit

let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

// now i will loop through all links and do a check.
for (let link of links) {
  // if a links data-active value is equal to the
  //body's id, then we add the active class to the link.

  if (link.dataset.active == bodyId) {
    link.classList.add("active");
  }
}

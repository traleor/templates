
// Function to copy the current page url to the clipboard
function copyLink() {
    var dummy = document.createElement("input"),
      text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Link copied to clipboard");
  }

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get 
var share = document.getElementById("shareIcon");
const blogContent = document.getElementById("blogContent")

// Get the offset position of the blogArticle
var sticky = blogContent.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    share.classList.add("showIcons");
  } else {
    share.classList.remove("showIcons");
  }
}

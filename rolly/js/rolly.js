function navResponsive() {
    var x = document.getElementById("navContainerId");
  
    if (
      x.className === "navBarContainer" ||
      x.className === "navBarContainer sticky"
    ) {
      //x.classList.add("sticky");
      x.className += " responsive";
      console.log("111");
    } else {
      x.className = "navBarContainer";
      console.log("000");
    }
  }
  
  function fsDivResponsive() {
    var y = document.getElementById("fsDivId");
    // Fixes Blog Header when sub menu drops
    var c = document.getElementById("fsText");
    //console.log("rr", c);
    if (y.className === "fsDiv") {
      c.className += " fsTextResponsive";
      y.className += " ShowFsDiv responsive";
    } else {
      c.className += "fsText";
      y.className = "fsDiv";
    }
  }
  
  function fsDivArticleResponsive() {
    var y = document.getElementById("fsDivId");
    // Fixes Blog Article Header when sub menu drops
    var c = document.getElementById("articleImg");
    if (y.className === "fsDiv") {
      y.className += " ShowFsDiv responsive";
      c.className += " articleImgResponsive";
    } else {
      y.className = "fsDiv";
      c.className += "articleImg";
    }
  }
  
  // Function to copy the current page url to the clipboard
  function copyLink()
      {
          var dummy = document.createElement('input'),
            text = window.location.href;
          document.body.appendChild(dummy);
          dummy.value = text;
          dummy.select();
          document.execCommand('copy');
          document.body.removeChild(dummy);
          alert('Link copied to clipboard');
      }
  
      
  // For Sticky navBar
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {stickyNav()};
  
  // Get the navbar
  var navbar = document.getElementById("navContainerId");
  
  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position
  function stickyNav() {
    if (window.pageYOffset >= 155) {
      // console.log("If Sticky");
  
      //IF NAVBAR OPEN CLOSE IT
      if (navbar.className === "navBarContainer responsive") {
        navbar.className = "navBarContainer";
        console.log("222");
      }
      //console.log("QUI", window.pageYOffset);
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      console.log("Elsing ");
    }
  }
 
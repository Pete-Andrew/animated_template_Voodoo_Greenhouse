const openNavButton = document.getElementById('openNavButton');
const closeNavButton = document.getElementById('closeNavButton');

// code for the side nav bar 
 openNavButton.addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "350px";
  console.log("open nav bar clicked");

});

closeNavButton.addEventListener('click', function () {
  document.getElementById("mySidenav").style.width = "0px";
});


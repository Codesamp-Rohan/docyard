// function showoption(){
//     const a = document.getElementById("subbtn").style.visibility = "visible";
// }
// function hideoption(){
//     const b = document.getElementById("subbtn").style.visibility = "hidden";
// }
function myFunction() {
    document.getElementById("subbtn").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.mainbutton')) {
      var dropdowns = document.getElementById("subbtn");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
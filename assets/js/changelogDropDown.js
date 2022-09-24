function clDropDown() {
  document.getElementById('clDropdown').classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-cl')) {
    var dropdowns = document.getElementsByClassName('dropbtn-cl-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
  }
}
function pfDropDown() {
  document.getElementById('pfDropdown').classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-pf')) {
    var dropdowns = document.getElementsByClassName('dropbtn-pf-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
  }
}
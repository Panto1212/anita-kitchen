/*row1*/
function openNav() {
    document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
    document.getElementById("navigation").style.width = "0";
}
/*row7*/

  $("#blanks form").submit(function(event) {
    var blanks = ["email"];
    alert("blanks"+"has been successfully added to our emailing list. Thank you"+".");
    event.preventDefault();
  });

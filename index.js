function getText() {
    var text = document.getElementsByClassName("classAchievements").value;
    alert(text);
}

function setText() {
    var text = document.getElementsByClassName("classAchievements").value = 'Congs';
    alert(text)

}
function validateForm() {
  let x = document.forms["name"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
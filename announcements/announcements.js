
// Load announcement banner into index.html
document.addEventListener("DOMContentLoaded", function () {
    fetch("announcements/announcements.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("announcement-container").innerHTML = data;
      });
  });
  
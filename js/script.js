function init() {
  var questionButton = document.getElementById('questionbutton');

  /* Only the map page has this button. */
  if (questionButton) {
    questionButton.addEventListener('click', showContact);
  }
}

function showContact() {
  alert('If you have questions, contact me at:\njshin@iit.edu');
}

function initMap() {

  const center = { lat: 37.2875218, lng: 127.0602285 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: center,
  });

  /* Feature 1: marker */
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "HamHamPangPang",
  });

  /* Feature 2: info window, opens on marker click */
  const info = new google.maps.InfoWindow({
    content: '<div class="infowindow">HamHamPangPang - 25 Beopjo-ro, Suwon, Gyeonggi-do</div>',
  });

  marker.addListener("click", function () {
    info.open(map, marker);
  });

  /* Feature 3: circle around the block */
  const area = new google.maps.Circle({
    map: map,
    center: center,
    radius: 150,
    strokeColor: "#e01b3d",
    strokeWeight: 2,
    fillColor: "#e01b3d",
    fillOpacity: 0.15,
  });

}

window.addEventListener('load', init);

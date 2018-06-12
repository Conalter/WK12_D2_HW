const drawMap = function () {
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86515, -4.25763];
  const javastreet = [55.801507, -4.003805];
  const pyongyang =[39.03385, 125.75432];
  const zoomLevel = 10;
  const mainMap = new MapWrapper(mapDiv, pyongyang, zoomLevel);
  mainMap.addMarker(pyongyang);

}

window.addEventListener("load", drawMap);

function Place(location, landmarks, time, notes, wikiLink) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
  this.wikiLink = wikiLink;

}


Place.prototype.getLocation = function() {
  return this.location;
}

Place.prototype.getTime = function() {
  return this.time;
}

Place.prototype.getNotes = function() {
  return this.notes;
}

Place.prototype.getLink = function() {
  return "<a href="+this.wikiLink+" " +"target=\"_blank\"> link to Wikipedia </a>"
}

Place.prototype.getLandmarks = function() {
  var string = "<ul>";
  var len = this.landmarks.length;
  for (var i = 0; i < this.landmarks.length; i++) {
    string += "<li>" + this.landmarks[i] + "</li>";
  }
  return string + "</ul>";
}

var getResult = function(place) {
  var result = "";
  result += "<li>" + place.getLocation() + "</li>";
  result += "<li>" + place.getTime() + "</li>";
  result += "<li>" + place.getNotes() + "</li>";
  result += place.getLandmarks();
  result += "<li>" + place.getLink() + "</li>";
  return result;
}








$(function() {
  var arraySeattle = ["Space Needle", "Pike Market Place"];
  var seattle = new Place("WA, USA", arraySeattle, "Spring", "Rainy","https://en.wikipedia.org/wiki/Seattle");
  var arrayColorado = ["Rocky Mountains", "Hot Springs"];
  var colorado = new Place("CO, USA", arrayColorado, "Summer", "Sunshine", "https://en.wikipedia.org/wiki/Colorado");
  var result = "";
  $(".placeOne").click(function() {
    result = getResult(seattle);
    $("#sea").append(result);
    $("#seattle").replaceWith(result).show();
  });

  $(".placeTwo").click(function() {

    var result = getResult(colorado);
    $("#co").append(result);
    $("#colorado").replaceWith(result).show();

  });

});

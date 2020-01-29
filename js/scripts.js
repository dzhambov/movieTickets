// Business Logic

function MovieSelection() {
  this.tickets = []
}

MovieSelection.prototype.addTickets = function (ticket) {
  this.tickets.push(ticket);
}

function Tickets(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

function getPrice(movieSelection) {
  var totalPrice = 0;
  var moviePrice = 0;
  var timePrice = 0;
  var totalMoviePrice = 0;
  var totalTimePrice = 0;
  var ageDiscount = 0;
  var totalAgeDiscount = 0;
  movieSelection.tickets.forEach(function(ticket) {
    totalMoviePrice = moviePrice += (ticket.movie);
    totalTimePrice = timePrice += (ticket.time);
    if (ticket.age < 12 || ticket.age >= 65) {
      return totalAgeDiscount =  ageDiscount += 2;
    } else {
    return totalPrice;
    } 
  // totalAgeDiscount = ageDiscount -= parseInt(ticket.age);
  // console.log(totalPrice);
  });
  totalPrice = totalMoviePrice + totalTimePrice - totalAgeDiscount
  return console.log(totalPrice);
}

function displayTicketDetails(movieSelectionToDisplay) {
  var ticketsList = $("#summary");
  $("#summary").show();
  var htmlForTicketInfo = "";
  movieSelectionToDisplay.tickets.forEach(function(ticket) {
    htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.movie + " " + ticket.time + " " + ticket.age + "</li>";
  });
  ticketsList.html(htmlForTicketInfo);
}

//  User Logic Interface
var movieSelection = new MovieSelection();

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = parseInt($("select#movie").val()); 
    var inputtedTime = parseInt($("select#time").val()); 
    var inputtedAge = parseInt($("input#age").val()); 
    $("input#age").val("");
    var newTickets = new Tickets(inputtedMovie, inputtedTime, inputtedAge);
    movieSelection.addTickets(newTickets);
    getPrice(movieSelection);
    displayTicketDetails(movieSelection);
    $("#summary").append();
  });
});
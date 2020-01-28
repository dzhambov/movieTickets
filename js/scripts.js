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

Tickets.prototype.getPrice = function() {
  tickets.forEach(function(ticket) {
    console.log(ticket);
    return this.movie + " " + this.time + " " + this.age;
  })
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
    var inputtedMovie = $("select#movie").val(); 
    var inputtedTime = $("select#time").val(); 
    var inputtedAge = $("input#age").val(); 
    $("input#age").val("");
    var newTickets = new Tickets(inputtedMovie, inputtedTime, inputtedAge);
    movieSelection.addTickets(newTickets);
    displayTicketDetails(movieSelection);
    $("#summary").show();
    console.log(movieSelection);
  });
});



// function getPrice() {
//   var price = 0;
//   price + newTickets.inputtedMove
// }

// function ageGet(age) {
//   if (age < 12 || age >= 65) {
//     return price - 2;
//   } else
//   return price
// }

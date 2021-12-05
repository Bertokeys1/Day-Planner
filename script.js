// $('.container')

var column = $('.container')
var date = $('#currentDay')

// time and date on jumbotron
var currentDay = moment();
        $("#currentDay").text(currentDay.format("dddd, MMMM Do"));

$('.container').on('click', 'button', function(event) {
  // $(event.target).data()
});

// currentHour


//loop from 0 to 24
for (var i = 0; i <= 24; i++) {
  //create a new block of html for each hour 
  // save the current hour to a data attribute so it can be access from the event listener

  // i = current hour of the loop, 0-24

  // local storage key = "hour -9"
  var savedValueForHour = localStorage.getItem( "hour-" + i );

  var timeRow = $("#hour-" + i)

  if(i < moment().hour())
}
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
$('.time-block').each(function() {
  var time = $(this).attr('id').split('-')[1];
  console.log(time)
  // 'hour-9'  -> 9
  // 'hour-10' -> 10
  
  if(time < moment().hours()){
      $(this).addClass('past')
  }else if(time == moment().hours()){
      $(this).removeClass('past')
      $(this).addClass('present')
  }else{
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
  }

})

// var savedValueForHour = localStorage.getItem( "hour-" + i );

// var timeRow = $("#hour-" + i)




// // save click event function to get value from text area and store value to local storage with key(idname "hour-time")
// function
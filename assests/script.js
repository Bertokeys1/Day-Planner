var column = $('.container')
var date = $('#currentDay')

// time and date on jumbotron.
var currentDay = moment();
        
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));




// to get current hour for styling.
$('.time-block').each(function() {
  var time = $(this).attr('id').split('-')[1];
  //sets styling for past, present and future rows.
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



var saveButtonEl = $("button");

// targets value from hours and text areas.
saveButtonEl.click(function(event) {
  var hour = event.target.value;
  var task = event.target.parentElement.children[1].value;
  var hourData = {
      hour: hour,
      task: task
  }
  // sets the values from above to a string.
  localStorage.setItem(hour,JSON.stringify(hourData))

});

// this is to call on the saved data.
function getToDos() {
  var retrievedData = [];
  
 for (var i=9; i<18; i++) {       
     // gets stored values local storage.
     var hourData = JSON.parse(localStorage.getItem(i));

     // this is to call on data that was save in "hourData".
     if (hourData) {
         retrievedData.push(hourData);
     };
  }
  
  return retrievedData;
  
};

// this is to populate the text area element where data was entered and saved.
function populateToDos() {
  // calls todo values that were saved.
  var toDos = getToDos();

  if (toDos.length == 0) {
      return
  }
  
  // adds the values to element in html file to be displayed. 
  toDos.map(toDo => { 
      $(`textarea[data-hour='${toDo.hour}']`).val(toDo.task);
  })
  
}

populateToDos();

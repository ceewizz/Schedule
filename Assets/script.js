// Displaying the date today
var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(todayDate);

$(document).ready(function () {
    // Now we saveBtn click listener
    $('#saveBtn').on('click', function () {
        // Getting the text from the JQuery object
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save the date to the storage
        localStorage.setItem(time, text);
    })

    // Now to track the time
$(function timeTracker() {

    // Getting the current time
    var currentTime = moment().hour();

    // looping the time
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        // checking if the current hour is greater than the block hour
        if (blockHour < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        // checking if the current hour is equal to the block hour
        else if (blockHour === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // checking if the current hour is greater than the block hour
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}



// Get the item in the local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));

$("#hour9.description").val(localStorage.getItem("hour9"));

$("#hour10.description").val(localStorage.getItem("hour10"));

$("#hour11.description").val(localStorage.getItem("hour11"));

$("#hour12.description").val(localStorage.getItem("hour12"));

$("#hour13.description").val(localStorage.getItem("hour13"));

$("#hour14.description").val(localStorage.getItem("hour14"));

$("#hour15.description").val(localStorage.getItem("hour15"));

$("#hour16.description").val(localStorage.getItem("hour16"));

$("#hour17.description").val(localStorage.getItem("hour17"));

timeTracker();
})
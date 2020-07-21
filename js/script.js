function addNewNumberListener() {
  var btn = $("#add-number-btn")
  btn.click(getNewNumber)
}

function getNewNumber() {
  var squareTarget = $(".square.active");
  var nextTarget = $(".square.active").next(".square");

  $.ajax ({
      url : 'https://flynn.boolean.careers/exercises/api/random/int',
      method : 'GET',
      success : function(data, state) {

        var success = data['success'];
        var value = data['response'];

        if (success) {
            if (value <= 5) {
              squareTarget.html(value);
              squareTarget.addClass("under-five");
            } else {
              squareTarget.html(value);
              squareTarget.addClass("above-five");
            }

        } else {
          console.log(error);
        }
      },
      error: function(request, state, error) {
        console.log('request' , request);
        console.log('state' , state);
        console.log('error' , error);
      }
    });




  squareTarget.removeClass("active");
  nextTarget.addClass("active");
}

function init() {
addNewNumberListener();
}

$( document ).ready(init);

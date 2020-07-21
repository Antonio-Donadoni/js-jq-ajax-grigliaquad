function addNewNumberListener() {
  var square = $(".square")
  square.click(getNewNumber)
}

function getNewNumber() {
  var squareTarget = $(this);

  if (!(squareTarget.hasClass("under-five") || squareTarget.hasClass("above-five")))
  {

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
   }
}

function init() {
addNewNumberListener();
}

$( document ).ready(init);

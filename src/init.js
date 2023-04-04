$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer); //append to global array
    $('body').append(dancer.$node);
  });

  //make lineup button, when called :
  // loop through window.dancers array and call lineup on each of the dancer's type
  $('.addLineUp').on('click', function(event) {
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
  // make dancers interact
  // loop through the window.dancers array and calculate each dancer's distance from the zeroth element
  // then order a new array in order of increasing distance from first element
  // and then split the array into pairs to lineup with each other
  $('.addInteractButton').on('click', function(event) {

    var even = function (el) {
      return el % 2 === 0;
    };

    window.dancers.forEach((dancer, i) => {
      if (even(i)) {
        dancer.top = '100px';
        dancer.left = '100px';

      } else {
        dancer.top = '500px';
        dancer.left = '500px';
      }
      dancer.setPosition();
    });
  });
});


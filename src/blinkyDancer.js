var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addEventListener(function('mouseover', (event)) {
  //   console.log(this.$node, this);
  //   this.$node.css('border', '1rem solid yellow'),
  //   // $(this).css('color', 'black');
  // });
  this.$node.mouseover(function () {
    $(this).css('border', '1rem solid yellow');
  });
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


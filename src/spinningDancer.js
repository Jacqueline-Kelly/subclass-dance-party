

var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinning');
  this.$p = $('<p> Weeee! </p>');
  this.$node.append(this.$p);
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.$p) {
    this.$p.toggle();
  }
};
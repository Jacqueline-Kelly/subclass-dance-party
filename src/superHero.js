
// inherit from dancer class

var makeHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hero');
  this.$node.text('kappow');
};

makeHeroDancer.prototype = Object.create(makeDancer.prototype);
makeHeroDancer.prototype.constructor = makeHeroDancer;

makeHeroDancer.prototype.step = function() {
  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  this.setPosition(this.top, this.left);
  makeDancer.prototype.step.call(this);
};
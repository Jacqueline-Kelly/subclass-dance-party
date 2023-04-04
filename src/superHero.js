
// inherit from dancer class

var makeHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hero');
  this.$node.text('kappow');
  this.linedUp = false;
};

makeHeroDancer.prototype = Object.create(makeDancer.prototype);
makeHeroDancer.prototype.constructor = makeHeroDancer;

makeHeroDancer.prototype.step = function() {
  if (!this.linedUp) {
    this.top = $('body').height() * Math.random();
    this.left = $('body').width() * Math.random();
    this.setPosition(this.top, this.left);
    makeDancer.prototype.step.call(this);
  }
};

makeHeroDancer.prototype.lineUp = function() {
  this.top = -1;
  this.left = 0;
  this.setPosition(this.top, this.left);
  this.linedUp = true;
};
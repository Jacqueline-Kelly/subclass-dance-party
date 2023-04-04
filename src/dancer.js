
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function () {
  var styleSettings = {
    top: this.top,
    left: this.left,
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.top = 0;
  this.left = 0;
  this.setPosition(this.top, this.left);
  // var styleSettings = {
  //   top: 1,
  //   left: 0,
  // };
  // this.$node.css(styleSettings);
};
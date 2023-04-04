describe('heroDance', function() {
  var heroDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heroDancer = new makeHeroDancer(10, 20, timeBetweenSteps);
  });

  // Make sure hero dancer is moving
  // ensure that top and left variables are different after the step function is called
  describe('dance', function() {
    it('should move locations at least once per second', function() {
      sinon.spy(heroDancer, 'step');
      var top = heroDancer.top;
      var left = heroDancer.left;
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(heroDancer.top).to.not.equal(top);
    });


    it('should have a step function that makes its node move', function() {
      sinon.spy(heroDancer, 'setPosition');
      heroDancer.step();
      expect(heroDancer.setPosition.called).to.be.true;
    });
  });
});
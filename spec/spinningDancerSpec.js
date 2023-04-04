
describe('spinningDancer', function() {
  var spinningDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new makeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });

  // Make sure spinning dancer is toggling its paragraph element

  describe('dance', function() {
    it('should toggle its paragraph', function() {
      sinon.spy(spinningDancer.$p, 'toggle');
      spinningDancer.step();
      expect(spinningDancer.$p.toggle.called).to.be.true;

    });

  });
});
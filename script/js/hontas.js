(function() {
	function init() {
		var img = document.getElementById('hontas');
		new BreathingHalftone( img, {
			 dotSize: 1/100,
			// // size as a fraction of the diagonal of the image
			// // smaller dots = more dots = poorer performance

			// dotSizeThreshold: 0.05,
			// // hides dots that are smaller than a percentage

			 initVelocity: 0.2,
			// // speed at which dots initially grow

			// oscPeriod: 3,
			// // duration in seconds of a cycle of dot size oscilliation or 'breathing'

			// oscAmplitude: 0.2,
			// // percentage of change of oscillation

			// isAdditive: false,
			// // additive is black with RGB dots,
			// // subtractive is white with CMK dots

			// isRadial: false,
			// // enables radial grid layout

			 channels: [ 'green', 'red' ], // 'green', 'red'
			// // layers of dots
			// // 'lum' is another supported channel, for luminosity

			// isChannelLens: true,
			// // disables changing size of dots when displaced

			 friction: 0.2,
			// // lower makes dots easier to move, higher makes it harder

			// hoverDiameter: 0.3,
			// // size of hover effect
			// // as a fraction of the diagonal of the image

			 hoverForce: -0.005,
			// // amount of force of hover effect
			// // negative values pull dots in, positive push out

			 activeDiameter: 0.5,
			// // size of click/tap effect
			// // as a fraction of the diagonal of the image

			 activeForce: 0.005
		});
	}

	window.addEventListener('DOMContentLoaded', init);
}());

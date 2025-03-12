// this is a little animation that changes the background color of the page

// select the body element and store it in a variable
const body = document.querySelector('body');

// we use HSL color values to set the background color as it makes it easier to transition between colors in a rainbow!
// set the luminosity, saturation, and hue of the background color

// luminosity is the brightness of the color—0% is black, 100% is white
// in this case we use 90% brightness for a nice, pastel color
const luminosity = 90;

// saturation is the purity of the color—0% is gray, 100% is pure color
// in this case we use 100% saturation for a vibrant color
const saturation = 100;

// hue is the color—0 is red, 120 is green, 240 is blue
// in this case we start with 0 (red) and increment by 0.1 each frame to create a smooth transition.
// we use the modulo operator to wrap the hue value back to 0 when it exceeds 360
let hue = 0;

// this is a function that changes the background color of the page incrementally every frame
const animate = () => {
	hue = (hue + 0.1) % 360;
	body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${luminosity}%)`;

	// request the next frame of the animation
	requestAnimationFrame(animate);
}

// start the animation
animate();
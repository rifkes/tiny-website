const canvas = document.querySelector('#secretCanvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const handleResize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

const draw = (x, y) => {
	const gradient = ctx.createRadialGradient(x, y, 0, x, y, window.innerWidth / 9);
	gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
	gradient.addColorStop(1, 'black');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);	
}

const handleMouseMove = (event) => {
	const x = event.clientX;
	const y = event.clientY;
	draw(x, y);
}

const handleTouchMove = (event) => {
	const x = event.touches[0].clientX;
	const y = event.touches[0].clientY;
	draw(x, y);
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchmove', handleTouchMove);
window.addEventListener('touchstart', handleTouchMove);

window.addEventListener('resize', handleResize);
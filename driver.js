'use strict';

const events = require('./events.js');

events.on('pickup', (e) => {
	let record = {
		event: 'pickup',
		time: new Date(),
		payload: e,
	};
	console.log(`EVENT`, record);
	setTimeout(() => {
		console.log(`DRIVER: pick up ${e.orderID}`);
	}, 1000);
});

events.on('in-transit', (e) => {
	let record = {
		event: 'pickup',
		time: new Date(),
		payload: e,
	};
	setTimeout(() => {
		console.log(`EVENT`, record);
		console.log(`DRIVER: delivered up ${e.orderID}`);
	}, 3000);
});

events.on('delivered', (e) => {
	let record = {
		event: 'pickup',
		time: new Date(),
		payload: e,
	};
	setTimeout(() => {
		console.log(`EVENT`, record);
		console.log(`DRIVER: delivered ${e.orderID}`);
	}, 5000);
});

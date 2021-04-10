'use strict';

const events = require('./events.js');

events.on('in-transit', (e) => {
	setTimeout(() => {
		console.log(`VENDOR: Thank you for delivering ${e.orderID}`);
	}, 4000);
});

events.on('delivered', (e) => {
	setTimeout(() => {
		console.log(`VENDOR: Thank you`);
	}, 6000);
});

'use strict';

const events = require('./events.js');
const faker = require('faker');

require('./driver.js');
require('./vendor.js');

const payload = {
	store: faker.company.companyName(),
	orderID: faker.random.uuid(),
	customer: faker.name.findName(),
	address: `${faker.address.country()} ${faker.address.city()} ${faker.address.streetAddress()} St. ${faker.address.zipCode()}`,
};

events.emit('pickup', payload);
events.emit('in-transit', payload);
events.emit('delivered', payload);

import "reflect-metadata";
import { createConnection } from 'typeorm';
import { User } from './entity/User';

import Logger from '../system/logging';

createConnection({
	type: 'mysql',
	host: 'localhost',
	port: 3366,
	username: 'root',
	password: 'usbw',
	database: 'riot',
	entities: [
		User
	],
	synchronize: true,
	logging: false
}).then(connection => {
	// alert program we can start
}).catch(error => {
	Logger.error(`Could not connect to database! ${error}`);
});
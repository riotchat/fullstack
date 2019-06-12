import "reflect-metadata";
import { createConnection } from 'typeorm';
import Logger from '../system/logging';

import User from './entity/User';
import Channel from './entity/Channel';
import Message from './entity/Message';

createConnection({
	type: 'mysql',
	host: '192.168.0.26',
	port: 3306,
	username: 'riot',
	password: 'riot',
	database: 'riot',
	entities: [
		User,
		Channel,
		Message
	],
	synchronize: true,
	logging: false
}).then(connection => {
	Logger.success('Connected to database!');
}).catch(error => {
	Logger.error(`Could not connect to database! ${error}`);
});
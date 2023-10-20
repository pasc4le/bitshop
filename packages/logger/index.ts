import winston from 'winston';

const ERROR_LOGS_PATH = process.env.ERROR_LOGS_PATH ?? '/var/logs/bitshop.error.log';
const COMBINED_LOGS_PATH = process.env.ERROR_LOGS_PATH ?? '/var/logs/bitshop.log';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: {
		scope: 'general'
	},
	transports: [
		new winston.transports.File({
			filename: ERROR_LOGS_PATH,
			level: 'error'
		}),
		new winston.transports.File({
			filename: COMBINED_LOGS_PATH
		})
	]
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple()
		})
	);
}

export default logger;

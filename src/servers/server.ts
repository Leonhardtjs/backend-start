import express, { Application } from 'express';
import cors from 'cors';

// Interfaces
import { IPaths } from '@interfaces/Paths';

// Routes
import StartRoutes from '@routes/start.route';

class Server {
	private readonly port: string;
	private readonly app: Application;
	private readonly paths: IPaths;

	constructor() {
		this.port = process.env.PORT ?? '';
		this.app = express();
		this.paths = {
			start: '/api',
		};

		this.middlewares();
		this.routes();
	}

	middlewares(): void {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes(): void {
		this.app.use(this.paths.start, StartRoutes);
	}

	listen(): void {
		this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port} ✅`);
		});
	}
}

export default Server;

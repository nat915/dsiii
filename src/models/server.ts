import express, { Application, Request, Response } from 'express';
import db from '../db/connection';
import cors from 'cors';




import User from '../routes/users';
import Property from '../routes/properties';
import PropertyImage from '../routes/propertyImages';
import Visit from '../routes/visits';
import Transaction from '../routes/transactions';
import Address from '../routes/addresses';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto http://localhost:${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                mensaje: 'Bienvenido a la API',
                version: '1.0.0',
                fecha: new Date().toISOString(),
                puerto: this.port

            })
        })

  

        this.app.use('/api/v1/users', User);
        this.app.use('/api/v1/properties', Property);
        this.app.use('/api/v1/propertyImages', PropertyImage);
        this.app.use('/api/v1/visits', Visit);
        this.app.use('/api/v1/transactions', Transaction);
        this.app.use('/api/v1/address', Address)


    }
    midlewares() {

        // Parseamos el body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Database iniciada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }
    }

}

export default Server;
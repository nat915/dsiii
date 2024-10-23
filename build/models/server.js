"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("../routes/users"));
const properties_1 = __importDefault(require("../routes/properties"));
const propertyImages_1 = __importDefault(require("../routes/propertyImages"));
const visits_1 = __importDefault(require("../routes/visits"));
const transactions_1 = __importDefault(require("../routes/transactions"));
const addresses_1 = __importDefault(require("../routes/addresses"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto http://localhost:${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                mensaje: 'Bienvenido a la API',
                version: '1.0.0',
                fecha: new Date().toISOString(),
                puerto: this.port
            });
        });
        this.app.use('/api/v1/users', users_1.default);
        this.app.use('/api/v1/properties', properties_1.default);
        this.app.use('/api/v1/propertyImages', propertyImages_1.default);
        this.app.use('/api/v1/visits', visits_1.default);
        this.app.use('/api/v1/transactions', transactions_1.default);
        this.app.use('/api/v1/address', addresses_1.default);
    }
    midlewares() {
        // Parseamos el body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database iniciada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;

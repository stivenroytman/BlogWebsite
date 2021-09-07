import express from 'express';
import './App';
import configureRouting from './App';

const server = () => {
    const app = express();
    configureRouting(app)
    
    const globalLogger = new MessageLogger('server')
}

export default server;
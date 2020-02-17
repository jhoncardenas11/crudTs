import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public games(req: Request, res: Response) {
        pool.query('DESCRIBE games');
        res.json('games');
    }

}

const gamesController = new GamesController();

export default gamesController;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ tex: 'API is /api/games' });
    }
}
const indexController = new IndexController();
exports.default = indexController;

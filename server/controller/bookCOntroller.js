const {Book} = require('../models/models')
const ApiError = require('../error/ApiError');

class BookController {
    async create(req, res) {
        const {name} = req.body
        const book = await book.create({name})
        return res.json(book)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BookController()
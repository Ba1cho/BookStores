const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketBook = sequelize.define('basket_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})
const Auth = sequelize.define('auth', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})
const AuthGenre = sequelize.define('auth_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Auth.hasMany(Book)
Book.belongsTo(Auth)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Book.hasMany(Rating)
Rating.belongsTo(Book)

Book.hasMany(BasketBook)
BasketBook.belongsTo(Book)


Auth.belongsToMany(Genre, {through: AuthGenre })
Genre.belongsToMany(Auth, {through: AuthGenre })
module.exports = {
    User,
    Basket,
    BasketBook,
    Book,
    Auth,
    Genre,
    Rating,
    AuthGenre
}
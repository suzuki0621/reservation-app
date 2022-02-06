const Product = require('./model/product');

class FakeDb {

    constructor(){
        this.products = [
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: 'A',
                price: 1,
                description: 'a',
                heading1: "AAA",
                heading2: "BBB",
                heading3: "CCC"
            },
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: 'B',
                price: 2,
                description: 'b',
                heading1: "AAA",
                heading2: "BBB",
                heading3: "CCC"
            },
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: 'C',
                price: 3,
                description: 'c',
                heading1: "AAA",
                heading2: "BBB",
                heading3: "CCC"
            },
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: 'D',
                price: 4,
                description: 'd',
                heading1: "AAA",
                heading2: "BBB",
                heading3: "CCC"
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductToDb()
    }

    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductToDb()
    }
}

module.exports = FakeDb
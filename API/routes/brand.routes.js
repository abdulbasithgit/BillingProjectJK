module.exports = (app) => {
    const products = require('../controllers/brand.controller.js');

    // Create a new Product
    app.post('/brands', products.create);

    // Retrieve all Products
    app.get('/brands', products.findAll);

    // Retrieve a single Product with productId
    app.get('/brands/:productId', products.findOne);

    // Update a Note with productId
    app.put('/brands/:productId', products.update);

    // Delete a Note with productId
    app.delete('/brands/:productId', products.delete);
}
const Product = require('../models/brand.model.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Brand content can not be empty"
        });
    }

    // Create a Brand
    const product = new Product({
        brandname: req.body.brandname, 
        brandcode: req.body.brandcode,
    });

    // Save Brand in the database
    product.save()
    .then(data => {
        res.send(data);
        console.log("creating new brand");
        console.log(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the brand."
        });
    });
};

// Retrieve all brands from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
        console.log("getting all the Brands");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

// Find a single brand with a productId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });            
        }
        res.send(product);
        console.log("getting Brand by ID");
        console.log(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving Brand with id " + req.params.productId
        });
    });
};

// Update a Brand
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Brand content can not be empty"
        });
    }

    // Find and update Brand with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        brandname: req.body.brandname, 
        brandcode: req.body.brandcode,
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });
        }
        res.send(product);
        console.log("updateing Brand by ID");
        console.log(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.productId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });
        }
        res.send({message: "Brand deleted successfully!"});
        console.log("deleteing product by ID");
        console.log(product);
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Brand not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Brand with id " + req.params.productId
        });
    });
};
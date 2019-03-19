const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
    brandname: String,
    brandcode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('brands', BrandSchema);
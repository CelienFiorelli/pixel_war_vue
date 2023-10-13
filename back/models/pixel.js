const { Schema, model } = require('mongoose');

const Pixel = model('Pixel', new Schema({
    color: {type: String, required: true},
    x: { type: Number, required: true },
    y: { type: Number, required: true }
}))

module.exports = Pixel;
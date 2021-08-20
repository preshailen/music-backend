const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({
    id: { type: String, required: true, trim: true, lowercase: true },
    dsp: { type: String, required: true, trim: true, lowercase: true },
    url: { type: String, required: true, trim: true },
});
const Link = mongoose.model('Link', linkSchema);
module.exports = Link;

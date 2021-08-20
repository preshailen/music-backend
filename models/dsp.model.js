const mongoose = require('mongoose');
const dspSchema = new mongoose.Schema({
    service: { type: String, required: true, trim: true, lowercase: true },
    icon: { type: String, required: true, trim: true, lowercase: true },
    verb: { type: String, required: true, trim: true, lowercase: true },
});
const DSP = mongoose.model('DSP', dspSchema);
module.exports = DSP;
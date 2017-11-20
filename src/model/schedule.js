import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let scheduleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
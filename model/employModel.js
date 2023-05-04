const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.set('strictQuery', false);

const employSchema = new Schema(
    {
        firstName:String,
        lastName:String,
        age: Number,
        brutSalary:Number,
        netSalary:Number,
        startDate: Date,
        endDate: { type: Date, default: null }
    }
)

const employModel = mongoose.model('employees', employSchema);

module.exports = employModel;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name : {type: String, required: true},
    dept : { type: String, required: true },
    leaves: {type: Number, required: true},
    manager: {type: String, required: true}
});

/* Virtual for this  instance URL.
not used atm
});*/

// Export model.
module.exports = mongoose.model('Employee', EmployeeSchema);

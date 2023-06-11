const {mongoose} = require('./database.js');

// create file schema
const fileSchema = new mongoose.Schema({
    originalname: {
        type: String,
        required: true
    }, 
    destination : {
        type: String,
        require: true
    },
    path : {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    size : {
        type: Number,
        required: true
    },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
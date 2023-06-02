const {mongoose} = require('./database.js');

// create file schema
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    size : {
        type: Number,
        required: true
    },
    type : {
        type: String,
        required: true
    }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
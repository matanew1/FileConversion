const FileService = require('../services/fileService.js');
const path = require('path');

class FileController {

    static uploadFile = async (req, res) => {
        try {
            const file = await FileService.uploadFile(req.file);
            res.status(200).json(file);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static downloadFile = async (req, res) => {
        try {
            const fileId = req.query._id;
            const savedFile = await FileService.downloadFile(fileId);
            res.status(200).json(savedFile);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static downloadFileByFilename = async (req, res) => {
        const fileName = req.params.filename;
        const file = path.join(__dirname, '..', `uploads/${fileName}`);  
        res.download(file, (err) => {
            if (err) {
                console.error('Error downloading file:', err);
            } else {
                console.log('File downloaded successfully');
            }
        });
    }
            
}

module.exports = FileController;

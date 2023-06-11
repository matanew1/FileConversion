const FileService = require('../services/fileService.js');

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
            
}

module.exports = FileController;

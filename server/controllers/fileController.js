const FileService = require('../services/fileService.js');

class FileController {

    static uploadFile = async (req, res) => {
        try {
            const file = await FileService.uploadFile(req.body);
            res.status(200).json(file);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static downloadFile = async (req, res) => {
        try {
            const fileType = req.query.type;
            const fileId = req.query.id;
            const savedFile = await FileService.downloadFile(fileId, fileType);
            res.status(200).json(file);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
            
}

module.exports = FileController;

const FileService = require('../services/fileService.js');

class FileController {

    static uploadFile = async (req, res) => {
        try {
            console.log(req)
            const file = await FileService.uploadFile(req.body);
            res.status(200).json(file);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default FileController;

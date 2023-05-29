import FileService from '../services/fileService.js';

class FileController {

    constructor() { 
        this.fileService = FileService;
    }

    uploadFile = async (req, res) => {
        try {
            const file = await this.fileService.uploadFile(req.file);
            res.status(200).json(file);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default new FileController();

import File from '../models/file.js';

class FileService {
    static uploadFile = async (file) => {
        try {
            console.log(file);
            const fileEntity = new File(file);
            await fileEntity.save();
        } catch (error) {
            throw new Error(error.message);
        }
    };

}

export default FileService;
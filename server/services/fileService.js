class FileService {
    constructor() {
        
    }

    uploadFile = async (file) => {
        try {
            console.log(file);
        } catch (error) {
            throw new Error(error.message);
        }
    };

}

export default new FileService();
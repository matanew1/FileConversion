const File = require('../models/file.js');
const AdmZip = require('adm-zip');

class FileService {
    static uploadFile = async (file) => {
        try {
            const fileEntity = new File(file);
            return await fileEntity.save();
        } catch (error) {
            throw new Error(error.message);
        }
    };

    static convertRarToZip = async (file) => {
        try {
          const zip = new AdmZip();
          zip.addLocalFile(file);
          const zipBuffer = zip.toBuffer(); // Get the ZIP file as a buffer
          return zipBuffer;
        } catch (error) {
          throw new Error(error.message);
        }
      };

    static downloadFile = async (fileId, fileType) => {
        try {
            const file =  await File.findById(fileId);
            switch (fileType) {
                case 'rar':
                    return await convertRarToZip(file);
                default:
                    return;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };


}

module.exports = FileService;
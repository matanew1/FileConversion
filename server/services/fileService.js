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

    static convertRarToZip = async (rarFilePath) => {
        try {
          console.log('Converting');
          const zip = new AdmZip();
          zip.addLocalFile(rarFilePath);
      
          const zipFilePath = rarFilePath.replace('.rar', '.zip');
          zip.writeZip(zipFilePath);
          console.log('Conversion successful!');
      
          return zipFilePath;
        } catch (error) {
          throw new Error(error.message);
        }
      };

    static downloadFile = async (fileId) => {
        try {
            const file =  await File.findById(fileId);
            switch (file.type) {
                case 'rar':
                    return await convertRarToZip(file);
                // case 'zip':
                //     return await convertZipToRar(file);
                default:
                    return;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };


}

module.exports = FileService;
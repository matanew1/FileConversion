const File = require('../models/file.js');
const AdmZip = require('adm-zip');
const fs = require('fs');

class FileService {
    static uploadFile = async (file) => {
        try {
            const fileEntity = new File(file);
            return await fileEntity.save();
        } catch (error) {
            throw new Error(error.message);
        }
    };

    static convertRarToZip = (file) => {
        try {
          console.log('Creating Zip file');
          console.log('Start Conversion');
          const zip = new AdmZip();
          const data = fs.readFileSync(file.name, 'utf8');
          zip.addFile('file.rar', data, 'file');
          zip.writeZip('file.zip');
          console.log('Conversion successful!');
          return zip;
        } catch (error) {
          throw new Error(error.message);
        }
      };
      

    static downloadFile = async (fileId) => {
        try {
            const file =  await File.findById(fileId);
            switch (file.type) {
                case 'rar':
                    return await this.convertRarToZip(file);
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
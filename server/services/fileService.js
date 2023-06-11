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

  static convertFileToRAR = async (file) => {
    try {
      const filePath = file.path;
        console.log(filePath)
      // Create an instance of AdmZip to work with ZIP files
      const zip = new AdmZip();

      // Add the file to the ZIP archive
      zip.addLocalFile(filePath);
      console.log(zip)
      // Specify the output path and filename for the RAR file
      const outputFilePath = `${filePath}.rar`;

      // Write the ZIP archive to disk
      zip.writeZip(outputFilePath);
      console.log(zip)
      console.log(outputFilePath)
      return outputFilePath;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  static downloadFile = async (fileId) => {
    try {
      const file = await File.findById(fileId);
      const rarFilePath = await this.convertFileToRAR(file);
      return rarFilePath;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = FileService;

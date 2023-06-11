const File = require('../models/file.js');
const AdmZip = require('adm-zip');
const unrar = require('node-unrar');
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

  static convertRarToZip = async (filePath) => {
    
  };
  
  static downloadFile = async (fileId, fileType) => {
    try {
      const file = await File.findById(fileId);
      this.convertRarToZip(file.path);
      return filePath;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = FileService;

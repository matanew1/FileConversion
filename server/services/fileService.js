const File = require('../models/file.js');
const unrar = require("node-unrar-js");
const AdmZip = require('adm-zip');
const path = require('path');
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
    try {

    } catch (error) {
      throw new Error(error.message);
    }
  };

  static downloadFile = async (fileId, fileType) => {
    try {
      const file = await File.findById(fileId);
      const zipFilePath = this.convertRarToZip(file.path);
      return zipFilePath;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = FileService;

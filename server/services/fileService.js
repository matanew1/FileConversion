const File = require('../models/file.js');
const fs = require('fs');
const path = require('path');
const zipper = require('zip-local');
const { createExtractorFromFile } = require('node-unrar-js');

class FileService {
  static uploadFile = async (file) => {
    try {
      const fileEntity = new File(file);
      return await fileEntity.save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  static unrarFile = async (pathFile, destination) => {
    try {
      // Create the extractor with the pathFile information (returns a promise)
      const extractor = await createExtractorFromFile({
        filepath: pathFile,
        targetPath: destination
      });
      // Extract the files
      [...extractor.extract().files];
    } catch (err) {
      // May throw UnrarError, see docs
      console.error(err);
    }
  };

  static createZipFile = async (pathFile, fileName) => {
    try {
      zipper.sync.zip(pathFile).compress().save(`${pathFile}/${fileName}.zip`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  static downloadFile = async (fileId, fileType) => {
    try {
      const file = await File.findById(fileId);
      const fileName = String(file.originalname).split('.')[0];
      const outputDir = path.join(__dirname, '..', `uploads/${fileName}`);   
      await this.unrarFile(file.path, outputDir);
      await this.createZipFile(outputDir, fileName);
      return await fileName+'.zip';
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = FileService;

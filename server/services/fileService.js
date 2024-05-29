const File = require("../models/file.js");
const fs = require("fs");
const path = require("path");
const zipper = require("zip-local");
const { exec } = require("child_process");
const { createExtractorFromFile } = require("node-unrar-js");
const extract = require("extract-zip");

const FILE_TYPES = {
  RAR: "rar",
  ZIP: "zip",
};

const UPLOADS_DIR = path.join(__dirname, "..", "uploads");

class FileService {
  static uploadFile = async (file) => {
    const fileEntity = new File(file);
    return await fileEntity.save();
  };

  static unRarFile = async (pathFile, destination) => {
    const extractor = await createExtractorFromFile({
      filepath: pathFile,
      targetPath: destination,
    });
    [...extractor.extract().files];
  };

  static unZipFile = async (pathFile, destination) => {
    try {
      console.log(pathFile);
      await extract(pathFile, { dir: destination });
      console.log("Extraction complete");
    } catch (err) {
      console.error(err);
    }
  };

  static createCompressedFile = async (pathFile, fileName, type) => {
    const filePath = this.getFilePath(fileName, type);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File ${filePath} already exists. Skipping compression.`);
      return;
    }
  
    if (type === FILE_TYPES.RAR) {
      await this.createRarCompressedFile(pathFile, fileName, type);
    } else if (type === FILE_TYPES.ZIP) {
      await this.createZipCompressedFile(pathFile, fileName, type);
    }
  };

  static createZipCompressedFile = async (pathFile, fileName, type) => {
    zipper.sync[type](pathFile)
      .compress()
      .save(this.getFilePath(fileName, type));
  };

  static createRarCompressedFile = async (pathFile, fileName, type) => {
    exec(
      `rar a "${this.getFilePath(fileName, type)}" "${pathFile}"`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
      }
    );
  };

  static getFilePath = (fileName, type) => {
    return path.join(UPLOADS_DIR, `${fileName}.${type}`);
  };

  static downloadFile = async (fileId) => {
    const file = await File.findById(fileId);
    const fileName = path.parse(file.originalname).name;
    const fileType = path.parse(file.originalname).ext.slice(1);
    const outputDir = path.join(UPLOADS_DIR, fileName);

    if (fileType === FILE_TYPES.RAR) {
      await this.unRarFile(file.path, outputDir);
      await this.createCompressedFile(outputDir, fileName, FILE_TYPES.ZIP);
    } else if (fileType === FILE_TYPES.ZIP) {
      await this.unZipFile(file.path, outputDir);
      await this.createCompressedFile(outputDir, fileName, FILE_TYPES.RAR);
    }

    return fileName + (fileType === FILE_TYPES.RAR ? `.${FILE_TYPES.ZIP}` : `.${FILE_TYPES.RAR}`);
  };
}

module.exports = FileService;
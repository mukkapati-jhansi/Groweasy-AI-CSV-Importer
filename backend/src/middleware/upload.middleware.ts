import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "src/uploads",

  filename(req, file, cb) {
    cb(
      null,
      `${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({
  storage,

  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".csv")) {
      return cb(new Error("Only CSV files are allowed"));
    }

    cb(null, true);
  },
});
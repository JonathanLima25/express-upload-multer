import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage });

const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
    (req, res) => res.send('<h2>Upload realizado com sucesso!</h2>'));

app.listen(port, () => console.log(`App disponível em http://localhost/${port}`))
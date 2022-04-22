import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage });

const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
    (req, res) => res.send('<h2>Upload realizado com sucesso!</h2>'));

app.listen(port, () => console.log(`App disponível em http://localhost/${port}`))
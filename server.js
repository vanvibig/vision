const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/test.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
config = {
    projectId: 'my-project-1530514940122',
    keyFilename: './resources/credencialKey.json',
};
const client = new vision.ImageAnnotatorClient(config);


// const fileName = 'Local image file, e.g. /path/to/image.png';
// fileName = 'https://i.ytimg.com/vi/0cq275P99JY/maxresdefault.jpg';
// Read a local image as a text document

// text = '';
//
// client
//     .documentTextDetection(fileName)
//     .then(results => {
//         const fullTextAnnotation = results[0].fullTextAnnotation;
//         console.log(`Full text: ${fullTextAnnotation.text}`);
//         text = fullTextAnnotation.text;
//     })
//     .catch(err => {
//         console.error('ERROR:', err);
//     });

// app.get('/annotate', (req, res) => {
//     res.send({
//         "text": text
//     });
// });

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname + '/test.html'));
});

app.post('/annotate-by-image', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    else {
        // res.send('File uploaded!');
        fileName = req.files.sampleFile.data;
        // console.log(req.files.sampleFile.name);
        client
            .documentTextDetection(fileName)
            .then(results => {
                const fullTextAnnotation = results[0].fullTextAnnotation;
                console.log(`Full text: ${fullTextAnnotation.text}`);
                res.send({
                    "text": fullTextAnnotation
                });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }
});

app.post('/annotate-by-link', function (req, res) {
    client
        .documentTextDetection(req.body.link)
        .then(results => {
            const fullTextAnnotation = results[0].fullTextAnnotation;
            // console.log(`Full text: ${fullTextAnnotation.text}`);
            res.send({
                "text": fullTextAnnotation
            });
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
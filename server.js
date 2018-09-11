const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
config = {
    projectId: 'my-project-1530514940122',
    keyFilename: './resources/credencialKey.json',
};
const client = new vision.ImageAnnotatorClient(config);


// const fileName = 'Local image file, e.g. /path/to/image.png';
fileName = './resources/block-of-text.png';
// Read a local image as a text document

text = '';

client
    .documentTextDetection(fileName)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        console.log(`Full text: ${fullTextAnnotation.text}`);
        text = fullTextAnnotation.text;
    })
    .catch(err => {
        console.error('ERROR:', err);
    });

app.get('/annotate', (req, res) => {
    res.send(text);
});
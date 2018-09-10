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
client
    .documentTextDetection(fileName)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        console.log(`Full text: ${fullTextAnnotation.text}`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
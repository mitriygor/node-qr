"use strict";
const qr = require('qr-image');
const fs = require('fs');

// QR generator
// E.g.: node qr.js first-param second-param.png
// First parameter is a string for generating qr-code
// Second parameter is a name of file

let dataToEncode = process.argv[2] || null; // first parameter for encoding
let outImage = process.argv[3] || null; // file name

if(dataToEncode !== null && outImage !== null) {
    qr.image(dataToEncode, {
        type: 'png',
        size: 20
    }).pipe(fs.createWriteStream(outImage));
    console.log('QR-image has been generated');
} else {
    console.log('Please check the command line argument!');
}
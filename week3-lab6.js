//import * as fs from 'fs';
const os = require('os');
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

fs.writeFile('output.txt', 'Data needs to write in output file.', (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });

os.hostname()
console.log('Hostname:', os.hostname());

os.platform()
console.log('Hostname:', os.platform());

os.cpus()
console.log('Hostname:', os.cpus());

/*
const os1 = require('os1');
const fs = require('fs');*/

const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

// Logging the information to the console
console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);

// Writing the information to a file
const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Information written to os_info.txt file.');
});


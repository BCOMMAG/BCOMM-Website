const fs = require('fs');
const path = require('path');

const startFrame = 180;
const endFrame = 192;

for (let i = startFrame; i <= endFrame; i++) {
  const n = i.toString().padStart(4, '0');
  
  const destDesktop = path.join('public', 'frames', 'desktop', `frame_${n}.jpg`);
  const destMobile = path.join('public', 'frames', 'mobile', `frame_${n}.jpg`);
  
  fs.copyFileSync('public/frames/final-desktop.jpeg', destDesktop);
  fs.copyFileSync('public/frames/final-mobile.jpeg', destMobile);
}

console.log('Frames replaced successfully!');

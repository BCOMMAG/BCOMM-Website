import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';
import path from 'path';

function extract(video, outDir) {
    return new Promise((resolve, reject) => {
        const args = [
            '-i', video,
            '-t', '6',
            '-vf', 'fps=32',
            '-qscale:v', '3',
            path.join(outDir, 'frame_%04d.jpg')
        ];
        
        console.log('Running: ', ffmpegPath, args.join(' '));
        const proc = spawn(ffmpegPath, args);
        
        proc.stderr.on('data', (d) => process.stdout.write(d.toString()));
        proc.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error('ffmpeg failed with code ' + code));
        });
    });
}

async function main() {
    console.log('Extracting desktop...');
    try {
        await extract('./public/videos/hero-desktop.mp4', './public/frames/desktop');
    } catch(e) {
        console.log('Skipping desktop or error:', e.message);
    }
    
    console.log('Extracting mobile...');
    try {
        await extract('./public/videos/hero-mobile.mp4', './public/frames/mobile');
    } catch(e) {
        console.log('Skipping mobile or error:', e.message);
    }
    console.log('Done!');
}
main();

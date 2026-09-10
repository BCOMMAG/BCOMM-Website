import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';
import path from 'path';

function extract(video, outDir, scaleFilter) {
    return new Promise((resolve, reject) => {
        const args = [
            '-i', video,
            '-t', '6',
            '-vf', `fps=32,${scaleFilter}`,
            '-c:v', 'libwebp',
            '-q:v', '75', // 75 is a good balance for WebP
            path.join(outDir, 'frame_%04d.webp')
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
    console.log('Extracting desktop (WebP 720p)...');
    try {
        // scale to height 720, width auto (keeps aspect ratio)
        await extract('./public/videos/hero-desktop.mp4', './public/frames/desktop', 'scale=-2:720');
    } catch(e) {
        console.log('Skipping desktop or error:', e.message);
    }
    
    console.log('Extracting mobile (WebP 720p width)...');
    try {
        // scale to width 720, height auto
        await extract('./public/videos/hero-mobile.mp4', './public/frames/mobile', 'scale=720:-2');
    } catch(e) {
        console.log('Skipping mobile or error:', e.message);
    }
    console.log('Done!');
}
main();

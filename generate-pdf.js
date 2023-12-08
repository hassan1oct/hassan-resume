const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npm', ['run', 'dev'], { shell: true, stdio: ['ignore', 'pipe', 'pipe'] });

    server.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      // Adjust this string to match the exact startup message of your server
      if (data.toString().includes('✓ Ready')) {
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    server.on('error', (error) => {
      console.error(`error: ${error.message}`);
      reject(error);
    });

    server.on('close', (code) => {
      console.log(`server process exited with code ${code}`);
    });
  });
}

(async () => {
  const serverProcess = await startServer();
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
    });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await page.pdf({
      path: 'hassan-resume.pdf',
      format: 'A4',
      printBackground: true, // No background colors or images
      margin: {
        top: '0mm',
        bottom: '0mm',
        left: '0mm',
        right: '0mm'
      }
    });
    
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    serverProcess.kill('SIGINT'); // This will close the Next.js server
  }
})();

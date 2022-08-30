import { Router } from 'express';
import * as fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const VideosController = () => {
  const router = Router();
  
  router.get('/celebrate', (req, res, next)=>{

    try{
      const range = req.headers.range;
      console.log(range);
      if (!range) {
        res.status(400).send("Requires Range header");
      }

      const videoPath = path.resolve(__dirname, "Elza_annoy_compress.mp4");
      const videoSize = fs.statSync(videoPath).size;
      const CHUNK_SIZE = 2 * (10 ** 6); 

      let parts = range.split('=')[1]
      let start = Number(parts.split('-')[0])
      let end = Number(parts.split('-')[1])

      if (!end) {
          end = Math.min(start + CHUNK_SIZE, videoSize - 1)
      }
      
      const contentLength = end - start + 1;
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
      };
      
      res.writeHead(206, headers);

      const videoStream = fs.createReadStream(videoPath, { start, end });

      videoStream.pipe(res);
    }catch(error){
      console.log(error);
      next()
    }
    
  });

  return router;
}

export default VideosController();
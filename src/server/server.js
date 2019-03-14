import express from 'express';
import ytdl from 'ytdl-core';

const app = express();
const port = 1337;

let ytUrl = 'https://www.youtube.com/watch?v=';

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

  });

app.get('/download', (req, res) => {                                                // /download?url=VIDEO_ID&title=VIDEO_TITLE
    let videoUrl = ytUrl + req.query.url;
    let filename = (req.query.title).replace(/ /g, '_');
    

    if (ytdl.validateURL(videoUrl)) {
        res.header('Content-Disposition', `attachment; filename="${filename}.mp3"`);

        console.log('Going to download ' + videoUrl);

        ytdl(videoUrl, { filter: "audioonly" }).pipe(res);

    } else {
        res.sendStatus(404);
        res.end();

    };
});

app.get('/getinfo', (req, res) => {                                                 // /getinfo?url=VIDEO_ID
    let videoUrl = 'https://www.youtube.com/watch?v=' + req.query.url;

    ytdl.getBasicInfo(videoUrl, (err, info) => {
        if (err) {
            res.status(404);
            res.end();

            console.log('Error: not a valid url ');
            
        } else {
            res.json({ title: info.title, author: info.author.name}); 

            console.log('info sent:\ntitle -> ' +  info.title + '\nauthor -> ' + info.author.name);
        
        };

    });
       

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
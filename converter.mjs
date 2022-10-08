import dir from "node-dir";
import { appendFile } from "fs";

let framesLocation = "./frames/";
let frames = [];

dir.readFiles(framesLocation,
    function(err, content, next) {
        if (err) throw err;
        frames.push(content.toString("base64"));
        next();
    },
    function(err, files){
        if (err) throw err;
        console.log('finished reading files');
        appendFile("frames.json", JSON.stringify({ frames }), function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    });



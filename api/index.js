const express = require('express');
const server = express();

const fs = require("fs");
let fetch_json;
fs.readFile("/home/rrs6/Desktop/teste-desenvolvedor-frontend/api/dotlib.json", "utf8", (error, data) => {
        if(error){
            console.log(error);
            return;
        }else{
            fetch_json = JSON.parse(data);
            initialize();
        }
    })

const initialize = () => {
    server.listen(3000, () => {
        server.get('/', (req, res) => {
            res.send({
                data: fetch_json
            })
        })
    });
}
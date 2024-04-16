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
        server.get('/data', (req, res) => {
            let pages = [];
            let max_pages = Math.ceil(fetch_json.data.length/10);
            for(let i = 0; i < max_pages; i++){
                let ans = fetch_json['data'].slice(i * 10, Math.min((i+1)* 10, fetch_json.data.length));
                pages = pages.concat(ans);
            }
            res.send({
                data: pages,
                num_pages: max_pages,
                steps: 10
            })
        })
        server.get('/data/:id', (res, req) => {
        })
    });
}
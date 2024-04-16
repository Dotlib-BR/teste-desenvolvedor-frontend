const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors({
    origin: '*'
}));
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
    server.listen(3000);
    server.get('/data/', (req, res) => {
        let pages = [];
        let query = req.query._page;
        let max_pages = Math.ceil(fetch_json.data.length/10);
        for(let i = 0; i < max_pages; i++){
            let ans = fetch_json['data'].slice(i * 10, Math.min((i+1)* 10, fetch_json.data.length));
            pages.push(ans);
        }
        if(query){
            if(query >= 0 && query < max_pages)
                res.send({data: pages[query], num_pages: max_pages, steps: 10})
            else
                res.json({message: "Esta página não existe."})
        }else{
            res.send({
                data: pages
            })
        }
    })
    server.get('/data/:id', (req, res) => {
        let id = req.params.id;
        for(let i = 0; i < fetch_json.data.length; i++){
            if(id == fetch_json.data[i]['id']){
                res.send({item: fetch_json.data[i]})
                return;
            }
        }
        res.json({
            message: "Produto não encontrado"
        })
    })
}
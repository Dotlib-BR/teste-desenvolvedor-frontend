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
function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
const initialize = () => {
    server.listen(3000);
    server.get('/data/', (req, res) => {
        let pages = [];
        console.log(req.query)
        let query_page = req.query['_page'];
        let query_name = req.query['_name'];
        let query_company = req.query['_company'];
        let max_pages = Math.ceil(fetch_json.data.length/10);
        for(let i = 0; i < max_pages; i++){
            let ans = fetch_json['data'].slice(i * 10, Math.min((i+1)* 10, fetch_json.data.length));
            ans.sort(function(a, b){
                return dateDiffInDays(new Date(a.published_at), new Date(b.published_at));
            });
            pages.push(ans);
        }
        if(query_page){
            if(query_page >= 0 && query_page < max_pages){
                let ans = pages[query_page];
                if(query_name)
                    ans = ans.map((item) => {return item.name.contains(query_name)})
                if(query_company)
                    ans = ans.map((item) => {return item.company.contains(query_company)});
                res.send({data: ans, num_pages: max_pages, steps: 10})

            }else{
                res.json({message: "Esta página não existe."})
            }
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
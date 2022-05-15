import { Controller, Get } from '@midwayjs/decorator';

@Controller('/home')
export class HomeController {
    @Get('/to_get')
    async home() {
        
        const http = require("http")
        const https = require("https")
        const cheerio = require("cheerio")
        let src = ""
        let t = "false"
        
        let filterData = (data) => {
            const $ = cheerio.load(data)
            $("div #lg img").each(function () {
                //console.log($("div #lg img").attr("src"));
                src = $("div #lg img").attr("src");
            })
        }
        http.createServer((req, res) => {
            let data = ''
            const time1 = new Date().getTime();
            https.get('https://www.baidu.com/', (result) => {
                result.on('data', (chunk) => {
                    data += chunk
                })
                result.on('end', () => {
                    filterData(data)
                })
            })
            const time2 = new Date().getTime();
            const time = time2 - time1;
            if(time-100000000>0){
                t="false"
            }else{
                t="true"
            }

        })
        var info = {"success":t,"body":src}
        return info;
    }
}

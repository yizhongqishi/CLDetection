const supA = require('superagent')
const cheI = require('cheerio')
function getHtml(address) {
    let header = {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; it; rv:1.8.1.11) Gecko',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4,zh-TW;q=0.2',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}
    let result = []
    page = supA.post(address).set(header).type('form').send({a: "g", v: "0"}).then((res, err) => {
        if (err){
            throw err
        } else{
            let $ = cheI.load(res.text)
            document.getElementById("res").innerHTML = res.text
        }
    })
}

getHtml('http://get.xunfs.com/app/listapp.php')
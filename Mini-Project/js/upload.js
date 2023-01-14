var axios = require('axios');
var fs = require('fs');
var base64 = require('base-64');

let token = "ghp_SgpPBp7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
let file = fs.readFileSync("abc.txt").toString();
console.log(file);
var content = base64.encode(file);
console.log(content);
uploadFileApi(token, content)

function uploadFileApi(token, content) {

    var data = JSON.stringify({
        "message": "txt file",
        "content": `${content}`
    });

    var config = {
        method: 'put',
        url: 'https://api.github.com/repos/sumit-s03/Test/contents/abc.txt',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
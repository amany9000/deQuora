import { post } from 'axios';

const request = require('request');
//const axios = require('axios');
 
export const ipfsAdd = async (question) => {
//const ipfsAdd = async (question) => {
    // let options = {
    //     method: "POST",
    //     url: "https://ipfs.infura.io:5001/api/v0/add",
    //     port: 443,
    //     headers: {
    //         "Authorization": "Basic ",
    //         "Content-Type": "multipart/form-data"
    //     },
    //     formData: {
    //         file: question
    //     }
    // };
    // const res = await request.post(options.url, question)
    // console.log(res)
    // await request(options, function (err, res, body) {
    //     if (err) console.log(err);
    //     console.log(body)
    //     return body
    // });
    
    const formData = new FormData();
    formData.append('file',question)

    post({
        url: "https://ipfs.infura.io:5001/api/v0/add",
        formData: formData,
        config: {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    }).then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
}

//export const ipfsGet = (hash) => {
////const ipfsGet = (hash) => {
//    let options = {
//        method: "GET",
//        url: `https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`,
//        port: 443
//    };
//
//    request(options, function (err, res, body) {
//        if (err) console.log(err);
//        return body.Hash
//    });
//}


//ipfsAdd("answer")
// //ipfsGet("QmdrPqhYzFsTXzw8y1ppkjuma4rgsJRCFvEkWxzgBgSVRH");
// ipfsGet("Qmb66G2a3WsDXjrPm4zHErPNiX4Lnhy5Ry1UincKBnHftc")


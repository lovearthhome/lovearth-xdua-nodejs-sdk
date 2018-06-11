'use strict';
const co = require('co');
const Client = require('aliyun-api-gateway').Client;
const client = new Client('24772094','5f4521e0989db4aa0b30b5a716a8b33b');
const host   = "http://api.xdua.com";
const test_dua    = "16fc397a75a4265040875ced14121147";

const {
    CONTENT_TYPE_FORM,
    CONTENT_TYPE_TEXT,
} = require('aliyun-api-gateway');

//测试echo接口
co(function* () {
    var url = host+'/echo';
    var result = yield client.get(url, {
        headers: {
            accept: 'application/json'
        }
    });
    console.log(JSON.stringify(result));
});

//测试login接口
co(function* () {
    var url = host+'/login';
    var result = yield client.post(url, {
        headers: {
            'accept': 'application/json',
            'content-type':'application/x-www-form-urlencoded; charset=UTF-8' ,
            'dua':test_dua,
            'apiv':'1.0.0'
        },
        signHeaders: {
            'X-Ca-Stage':'RELEASE',
        },
        data: {
            by  : "tel",
            ustr: "+86-15810419011",
            pwd : "a906449d5769fa7361d7ecc6aa3f6d28"
        },
    });
    var resp =  result;
    console.log(resp);

    var resp_status = resp["status"];
    var resp_reason = resp["reason"];
    var resp_result = resp["result"];
    if (resp_status == 0){
        var resp_token = resp_result["token"];
        var result = yield client.get("http://api.xdua.com/ugrp/wikicivi", {
            headers: {
                accept: 'application/json',
                'dua':test_dua,
                'apiv':"1.0.0",
                'token':resp_token
            }
        });
        console.log(result);
    }
});

//'content-type': 'application/x-www-form-urlencoded',




let express = require("express");
let mongoose = require("mongoose");
let body = require("body-parser");
let uE = body.urlencoded({
    extended: false
});

let app = express();

//跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});

//设置集合
let collect = mongoose.model("flowers", {
    username: String,
    code: String
});
let searchCollect = mongoose.model("searchs", {
    word: String,
    img: String,
    title: String,
    price: String
});

//注册
app.post("/enter", uE, function (req, res) {
    let username = req.body.username;
    let code = req.body.code;

    mongoose.connect("mongodb://127.0.0.1:27017/ryan", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log("连接失败");
        } else {
            console.log("连接成功");

            collect.find({
                username
            }).then((ok) => {
                // console.log(ok);
                if (ok.length >= 1) {
                    let data = {
                        name: username,
                        code: code
                    };
                    res.send({
                        mag: "用户存在,直接登录",
                        status: 300,
                        data: {
                            id: 11,
                            data
                        }
                    });
                } else {
                    let user = new collect({
                        username,
                        code
                    });
                    let data = {
                        name: username,
                        code: code
                    };
                    user.save().then(() => {
                        console.log("插入成功");
                        res.send({
                            msg: "插入成功",
                            status: 200,
                            data: {
                                id: 1,
                                data
                            }
                        });
                    }, () => {
                        console.log("插入失败");
                        res.send({
                            msg: "插入失败",
                            status: 500,
                            data: {
                                id: 0
                            }
                        });
                    });
                }
            });
        }
    });
});

//搜索
app.get("/search", function (req, res) {
    let value = req.query.val;

    mongoose.connect("mongodb://127.0.0.1:27017/ryan", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log("连接失败");
        } else {
            console.log("连接成功");

            // let user = new searchCollect({
            //     word: "套西",
            //     img: "suit8.png",
            //     title: "浅灰色人字纹商务套西",
            //     price: "￥1899.00"
            // });
            // user.save().then((ok) => {
            //     console.log(ok + "成功");
            // });

            searchCollect.find({
                word: value
            }).then((ok) => {
                // console.log(ok);
                res.send({
                    mag: "搜索成功",
                    status: 200,
                    data: {
                        data: ok
                    }
                });
            });
        }
    });
});

app.listen(13000);
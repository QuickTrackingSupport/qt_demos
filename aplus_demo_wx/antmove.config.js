module.exports = {
    "env": "development",
    "type": "wx-alipay",
    "error": true,
    "input": "./",
    "output": "../aplus_demo_ali"
,
    "hooks": {
        "appJson": function plugin (appJson) {return appJson}

    },
    "babel": {
        "plugins": []
    }
}
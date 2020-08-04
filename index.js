const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const { Login, Register, Verify } = require("./systems/account");
const { UserData, StoryData, PlacesData} = require("./systems/data");
const https = require("https");
const fs = require("fs");
const httpProxy = require("http-proxy");
const pug = require("pug");
const multer  = require("multer");
const upload = multer({ dest: "uploads/" });

const proxy = httpProxy.createProxyServer();
const app = express();
const port = 4000;
const secret = 'nsc2020';

const compiledFunction = pug.compileFile(path.join(__dirname, "views/map.pug"));
app.use(session({
    secret: secret, 
    resave: true, 
    saveUninitialized: true, 
    cookie: {maxAge: 19200000}
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    var action = req.query.action;
	if (req.session.loggedin) {
		res.send(compiledFunction());
	} else if (action == "register") {
	    res.sendFile(path.join(__dirname, "views/register.html"));
    } else if (action == "verify") {
	    res.sendFile(path.join(__dirname, "views/verify.html"));
	} else {
	    res.sendFile(path.join(__dirname, "views/login.html"));
	}
});

app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.send("loggedOut");
    });
});

app.post('/auth', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    Login(req.session.loggedin, email, password, () => {
        req.session.loggedin = true;
        req.session.email = email;
        res.send("LoggedIn");
    }, (err_msg) => {
        res.send(err_msg);
    });
});

app.post('/regist', (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    Register(req.session.loggedin, username, email, password, () => {
        res.send("Registered");
    }, (err_msg) => {
        res.send(err_msg);
    });
});

app.post('/verify', (req, res) => {
    var email = req.body.email;
    var code = req.body.code;
    Verify(req.session.loggedin, email, code, () => {
        res.send("Verified");
    }, (err_msg) => {
        res.send(err_msg);
    });
});

app.post('get_places', (req, res) => {
    var lat = req.body.lat;
    var lon = req.body.lon;
    PlacesData(lat, lon, (result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    });
});

app.post('/get_story', (req, res) => {
    var story_path = path.join(__dirname, "stories/" + req.body.storyId + ".json");
    fs.access(story_path, fs.F_OK, (err) => {
        if (err) {
            res.send("Can not find the story");
        } else {
            res.sendFile(story_path);
        }
    });
});

app.post('/get_image', (req, res) => {
    var test = [
        {
            url: "image/CC_20200131_011018.png"
        },
        {
            url: "image/CC_20200131_005147.png"
        },
        {
            url: "image/CC_20200131_010852.png"
        }
    ];
    res.json(test);
});

app.post('/get_user', (req, res) => {
    var userId = req.body.userId;
    UserData(userId, (result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    });
});

app.get("/route/*", (req, res) => {
    proxy.web(req, res, { target: "http://localhost:5000" });
});

app.post("/upload", upload.single("data"), (req, res, next) => {
    console.log(req.file);
    res.send("uploaded");
});

https.createServer({
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem"),
    passphrase: "232544"
}, app).listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

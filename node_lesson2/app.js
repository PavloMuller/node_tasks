const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

const userss = [
    {
        email: "dima@gmail.com",
        password: 123
    },
    {
        email: "vova@gmail.com",
        password: 321
    }
];

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'views')));

app.engine('.hbs', expressHbs({
    defaultLayout: false,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/reg', (req, res) =>{
    const {email, password} = req.body;
    let regUser =  userss.find(user =>{user.email === email && user.password === password});

    if (regUser ) {
        res.render('login')
    }else{
        userss.push(req.body);
        res.render('main',{message :`new user ${email}` })
    }
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/log', (req, res)=>{
    const{ email, password} = req.body;
    let logUser = userss.find((user)=> { user.email=== email && user.password=== password});
    if (logUser){
        res.render('register')
    }else{
        res.render('main', {message: email})
    }
});


app.get('/users', (req, res) => {
    res.render('users', {userss})
});

app.listen(5000, () => console.log("port 5000 started"));

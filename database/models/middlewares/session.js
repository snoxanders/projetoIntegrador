const validator = (req, res, next) => {
    console.log('validator')
    body('emailCliente').isEmail();


}

module.exports = validator;

//Rotas privadas protegidas por um middleware
app.use((req, res, next) => {
    //se não tiver usuário logado, redirecionamos para o login
    if (req.session.usuario === undefined) {
        console.log('redirect')
        return res.redirect('/login');
    }
    //se não, deixamos o usuário passar
    next();
})

app.get('/home', (req, res) => {
    res.send('aqui é a home, uma área privada, o usuário logado é: ' + req.session.usuario + ' <a href="/logout">Logout</a>');
})

app.get('/dashboard', (_, res) => {
    res.send('aqui é o dashboard, uma área privada');
})

app.listen(PORT, console.log('server running...'));
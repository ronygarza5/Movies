const movies = require('../controller/movies');

module.exports = (app) => {
    app.get('/api/all', (req,res) => movies.index(req,res))
    app.get('/api/:id', (req,res) => movies.single(req,res))
    app.post('/api/create',(req,res) => movies.create(req,res))
    app.put('/api/update/:id', (req,res) => movies.update(req,res))
    app.delete('/api/delete/:id', (req,res) => movies.delete(req,res))
    app.post('/api/review/create/:id', (req,res) => movies.addReview(req,res))
}
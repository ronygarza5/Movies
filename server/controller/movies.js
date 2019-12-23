const mongoose = require('mongoose');
require('../models/movie');
const Movie = mongoose.model('Movie');
Review = mongoose.model('Review');

module.exports = {
  index: (req,res) => {
        Movie.find()
            .then(movies => {
                res.json({results : movies})
            })
            .catch(err => {
                res.json({errors : err})
            })
    },
    single: (req,res) => {
        Movie.findOne({_id: req.params.id})
            .then(movie => {
                res.json({results : movie})
            })
            .catch(err => {
                res.json({errors : err.errors})
            })
    }, 
    // create: (req,res) => {
    //     const OBJECT_NAME = new OBJECT_NAME();
    //     OBJECT_NAME.title = req.body.title;
    //     OBJECT_NAME.description = req.body.description;
    //     OBJECT_NAME.completed = req.body.completed;
    //     OBJECT_NAME.save()
    //         .then(OBJECT_NAMEs => {
    //             console.log(OBJECT_NAMEs)
    //             res.json({results : OBJECT_NAMEs})
    //         })
    //         .catch(err => {
    //             res.json({error : err})
    //         })
    // }, 

    create: (req, res) => {
        Movie.create(req.body)
            .then(movies => {
                res.json({ results: movies });
    })
            .catch (err => {
    res.json({ errors: err.errors });
        })
    },
    update: (req, res) => {
        Movie.findOneAndUpdate({_id: req.params.id}, req.body, {useFindAndModify: true})
            .then( movie => {
                res.json({results : movie})
            })
    }, 
    delete: (req,res) => {
        Movie.deleteOne({_id: req.params.id})
            .then(movies => {
                res.json({results : moives})
            })
            .catch(err => {
                res.json({errors : err})
            })
    }, 
    addReview: (req, res)=> {
        Review.create(req.body)
            .then(review =>{
                // console.log(review)
                // console.log(req.params.id);
                Movie.findOneAndUpdate({_id: req.params.id}, { $push: {reviews : review} }, {useFindAndModify:false})
                    .then(movie => {
                        // console.log("DID IT");
                        // console.log(movie);
                        res.json({results : movie })
                    })
                    .catch(err => {
                        res.json({errors: err.errors})
                    })
            })
            .catch(err => {
                res.json({errors: err.errors})
            })
    }
}
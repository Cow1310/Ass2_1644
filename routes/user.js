var express = require('express');
var router = express.Router();

var UserModel = require('../models/UserModel');

router.get('/', async (req, res) => {
    var users = await UserModel.find({});
    res.render('user/index', {users});
})

router.get('/add', (req, res) => {
    res.render('user/add');
})

router.post('/add', async (req, res) => {
    var user = req.body;
    await UserModel.create(user);
    res.redirect('/user');
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var users = await ProductModel.find({ user : id }).populate('user');
    res.render('user/detail', { users })
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    var user = await UserModel.findById(id);
    await UserModel.deleteOne(user);
    res.redirect('/user');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var user = await UserModel.findById(id);
    res.render('user/edit', { user });
})

router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var user = req.body;
    try {
       await UserModel.findByIdAndUpdate(id, user);
       console.log('update succeed !');
    } catch (err) {
       console.log('update failed. Error: ' + err);
    }
    res.redirect('/user');
})

module.exports = router;
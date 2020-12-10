var express = require('express');
var router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt');
const passport = require('passport');
const { redirectAuthenticated } = require('../config/auth')

router
      .get('/login', redirectAuthenticated, (req, res) => {
        res.render('login')
      })
      .get('/register', redirectAuthenticated, (req, res) => {
        res.render('register')
      })
      .post('/register', async (req, res) => {
        const { first_name, last_name, email, password, confirm_password } = req.body

        try {
          if (!first_name || !last_name || !email || !password || !confirm_password) {
            throw new Error('Please fill in every field')
          }

          if (password != confirm_password) throw new Error('Passwords do not match')
          if (password.length < 6) throw new Error('Password should be at least 6 characters long')

          let user = await User.findOne({ email: email })
          if (user) throw new Error('Email is already registered')

          user = new User({ first_name, last_name, email, password })

          bcrypt.genSalt(10, (error, salt) => {
            if (error) throw error

            bcrypt.hash(user.password, salt, async (error, hash) => {
              if (error) throw error

              user.password = hash
              await user.save()
              req.flash('success_message', 'You are now registered. Please log in.')
              res.redirect('/users/login')
            })
          })
        } catch (err) {
          res.render('register', { ...req.body, error: err.message })
        }
      })
      .post('/login', (req, res, next) => {
        passport.authenticate('local', {
          successRedirect: '/',
          failureRedirect: '/users/login',
          failureFlash: true
        })(req, res, next)
      })
      .get('/signout', (req, res) => {
        req.logout()
        req.flash('success_message', 'You are logged out')
        res.redirect('/users/login')
      })

module.exports = router;

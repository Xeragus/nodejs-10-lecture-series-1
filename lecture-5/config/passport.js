const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (passport) => {
  const localStrategy = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email })
        .then(user => {
          if (!user) return done(null, false, { message: 'The email is not registered' })
          
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error

            if (isMatch) {
              return done(null, user, { user: user })
            } else {
              return done(null, false, { message: 'Password incorrect' })
            }
          })
        })
        .catch(error => {
          console.log('error during login', error)
        })
  })

  passport.use(localStrategy)

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}
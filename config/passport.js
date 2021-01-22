require('dotenv').config();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const db = require("../models");

const User = db.users;
const Trener = db.treners;
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY || 'kitty_mitty';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
// create jwt strategy 
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {

      if (jwt_payload.type == 'user') {
        userFireWall(jwt_payload, done);
      }

      if (jwt_payload.type == 'trener') {
        trenerFireWall(jwt_payload, done);
      }
    })
  );
};

function userFireWall(jwt_payload, done) {
  User.findAll({ where: { id: jwt_payload.id } })
    .then(user => {
      if (user.length) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => console.log(err));
}
function trenerFireWall(jwt_payload, done) {
  Trener.findAll({ where: { id: jwt_payload.id } })
    .then(trener => {
      if (trener.length) {
        return done(null, trener);
      }
      return done(null, false);
    })
    .catch(err => console.log(err));
}
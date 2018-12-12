import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';

let app = (express) => {
    return express;
};

let GoogleStrategyOAuth = GoogleStrategy.OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategyOAuth({
        clientID: "475475987307-gn5jatn7s914j8ju18f5piu8d0ot1tp4.apps.googleusercontent.com",
        clientSecret: "_Huuu5_Ke6jZFvcTHlggLtQp",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        //    User.findOrCreate({ googleId: profile.id }, (err, user) => {
        //      return done(err, user);
        //    });
        console.log(accessToken);
        console.log(profile['emails'][0].value);
        done();
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/login');
    });

module.exports = app;
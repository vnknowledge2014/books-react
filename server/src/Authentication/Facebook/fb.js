import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

let app = (express) => {
    return express;
};

let FaceBookStrategyOAuth = FacebookStrategy.Strategy;

passport.use(new FaceBookStrategyOAuth({
        clientID: "186554348950298",
        clientSecret: "8ef6b5f9d0fffec7daa9acdf68b403e1",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate(..., function(err, user) {
        //     if (err) { return done(err); }
        //     done(null, user);
        // });
        console.log(accessToken);
        console.log(profile);
        done();
    }
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
        failureRedirect: '/login' }));

module.exports = app;
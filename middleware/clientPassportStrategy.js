
const {
  Strategy, ExtractJwt 
} = require('passport-jwt');
const { JWT } = require('../constants/authConstant');

const clientPassportStrategy = ({ userDb }) => async (passport) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
  options.secretOrKey = JWT.CLIENT_SECRET;
        
  passport.use('client-rule',
    new Strategy(options, async (payload, done) => {            
      try {
        const user = await userDb.findOne({ id: payload.id });
        if (user) {
          return done(null, { ...user.toJSON() });
        }
        return done('No User Found', {});
      } catch (error) {
        return done(error,{});
      }
    })
  );
};
module.exports = clientPassportStrategy;
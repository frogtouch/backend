module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '33cbf81ba565289099d5ddf2b73e5430'),
  },
});

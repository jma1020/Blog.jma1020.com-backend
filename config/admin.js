module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '280cc52819497510a1152ea4b501c964'),
  },
});

const withAuth = (req, res, next) => {
    if (!req.session._id) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
module.exports = withAuth;
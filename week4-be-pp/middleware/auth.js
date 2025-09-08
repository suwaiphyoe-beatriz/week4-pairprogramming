const auth = (req, res, next) => {
  
  if (req.query.admin === 'true') {
    
    console.log('Authentication successful: Admin access granted.');
    next();
  } else {
    
    console.log('Authentication failed: Admin access denied.');
    res.status(403).json({
      status: 'fail',
      message: 'Access denied. You must be an administrator.'
    });
  }
};

module.exports = auth;

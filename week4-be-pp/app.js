const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');


// Middleware to parse JSON
app.use(express.json());
app.use(morgan('tiny'));
// Use the carRouter for all /cars routes
//app.use('/tours', tourRouter);

// Use the userRouter for all /users routes
//app.use('/users', userRouter);

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
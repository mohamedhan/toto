const express = require('express');
const connectDB = require('./config/db');





const app = express();

 // c*onnect DB
connectDB();



//D*B Config
const db = require('./config/default').mongoURI;  

//I*nit Middleware
app.use(express.json({ extended: false}));






// Use Route*s

app.use('/api/users', require('./routes/api/users') );
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
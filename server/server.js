const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const captionRoutes = require('./routes/captions');
const postRoutes = require('./routes/posts');

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/api/captions', captionRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

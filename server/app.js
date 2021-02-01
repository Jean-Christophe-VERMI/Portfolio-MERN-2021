import express from  'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import path from 'path';

//Routes
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const { MONGO_URI, MONGO_DB_NAME } = config;

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose.connect(db, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((error) => console.log(error.message));

  // Use Routes
  app.use('/posts', postRoutes);
  app.use('/user', userRoutes);

  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;
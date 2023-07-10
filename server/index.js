import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const NAME_DB = process.env.NAME_DB;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

async function startServer() {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.wvcf8jv.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`server start on port: ${PORT}`);
    });
  } catch (error) {
    console.log('error');
  }
}
startServer();

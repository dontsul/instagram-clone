import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timeseries: true,
  }
);

export default mongoose.model('Post', PostSchema);

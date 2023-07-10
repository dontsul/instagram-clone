import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// registration
export const registration = async (req, res) => {
  try {
    const { email, fullName, username, password } = req.body;

    const isUsedEmail = await User.findOne({ email });
    if (isUsedEmail) {
      return res.json({
        message: 'This email is already registered',
      });
    }

    const isUsedUserName = await User.findOne({ username });
    if (isUsedUserName) {
      return res.json({
        message: 'This user name is already registered',
      });
    }

    const salt = bcrypt.genSaltSync(10); // создание сложности хеширования пароля

    const hash = bcrypt.hashSync(password, salt); // хеширование пароля

    const newUser = new User({
      email,
      fullName,
      username,
      password: hash,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    await newUser.save(); //сохранение нового юзера в базе данных

    res.status(200).json({
      token,
      newUser,
      message: 'Registration completed successfully',
    });
  } catch (error) {
    res.json({ message: 'Error creating a user' });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: 'The user does not exist.' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: 'Incorrect password',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );

    res.json({
      token,
      user,
      message: 'You are logged in',
    });
  } catch (error) {
    res.json({ message: 'User authorization error' });
  }
};

//get me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.josn({ message: 'The user does not exist.' });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({
      message: 'No access',
    });
  }
};

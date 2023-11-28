import User from "../models/User.js";
import express from 'express';

const user = express.Router();

user.post("/find", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const users = await User.findAll({
    where: {
      name: name,
      password: password
    },
  });
  res.json(users);
});

user.post("/new", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name: name,
    email: email,
    password: password,
    cash: '100'
  });

  const saveUser = async () => {
    const savedUser = await newUser.save();
    res.json({savedUser: savedUser, message: "Obrigado pelo Cadastro!"});
  };

  saveUser();
});

export default user;
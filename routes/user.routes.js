import User from "../models/User.js";
import express from 'express';

const user = express.Router();

user.get("/find", async (req, res) => {
  const query = req.query.name;
  const users = await User.findAll({
    where: {
      name: query,
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
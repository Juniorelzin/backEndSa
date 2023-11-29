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
    cash: 1000,
    userDeck: 'vazio',
    inventary: 'vazio',
    battle: false
  });

  const saveUser = async () => {
    const savedUser = await newUser.save();
    res.json({savedUser: savedUser, message: "Obrigado pelo Cadastro!"});
  };

  saveUser();
});
user.post("/find/player", async (req, res) => {
  const name = req.body.name;
  const users = await User.findAll({
    where: {
      name: name,
    },
  });
  res.json(users);
});

user.post("/update/deck", async (req, res) => {
  const { name, newDeck } = req.body;

  try {

    const existingUser = await User.findOne({
      where: { name: name },
    });

    if (existingUser) {


      if (newDeck) {
        existingUser.userDeck = newDeck;
      }


      await existingUser.save();

      res.json({ message: "Usuário atualizado com sucesso!" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

user.post("/update/cash", async (req, res) => {
  const { name, newCash } = req.body;

  try {

    const existingUser = await User.findOne({
      where: { name: name },
    });

    if (existingUser) {
  

        existingUser.cash = newCash;
        console.log('sucesso!')
      
      await existingUser.save();

      res.json({ message: "Usuário atualizado com sucesso!" });
      console.log('Usuário atualizado com sucesso!')

    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
      console.log('ola')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
    console.log('nois')
  }
});




export default user;
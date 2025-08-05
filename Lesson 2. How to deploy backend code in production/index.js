
const express = require('express')
const app = express()
require('dotenv').config()

const fruits = [{
  id:1,
  name:"Apple",
  color: "Red",
  taste: "Sweet"
},
{
  id:2,
  name:"Banana",
  color: "Yellow",
  taste: "Sweet"
},{
  id:3,   
  name:"Grapes",
  color: "Green",
  taste: "Sweet"
},{
  id:4,
  name:"Orange",
  color: "Orange",
  taste: "Citrus"
}]

const userInfo = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        username: "johndoe",
        age: 25,
        isAdmin: false
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        username: "janesmith",
        age: 28,
        isAdmin: true
    },
    {
        id: 3,
        name: "Bob Lee",
        email: "bob.lee@example.com",
        username: "boblee",
        age: 22,
        isAdmin: false
    }
];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req,res) => {
    res.send('<h1>This is a login route</h1>')
})

app.get("/user", (req, res) => {
    res.json(userInfo);
});

app.get("/fruits", (req,res) => {
  res.json(fruits);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
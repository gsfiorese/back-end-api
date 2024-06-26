import e from 'express';
import express from 'express';

const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'John', email: 'john@email.com'},
    { id: 2, name: 'Doe' , email: 'doe@email.com'}
];

app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(201).json(req.body);
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
} )

app.listen(3000);
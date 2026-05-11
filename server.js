const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}, Time: ${new Date().toISOString()}`);
    next();
});

app.get('/', (req, res) => {
    res.send('My Week 2 Assignment');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    // Process registration logic here
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    // Simulate successful registration
    res.status(201).json({ message: `Hello ${name}, your registration was successful!` });
});

app.get('/user/:id', (req, res) => {
    res.json({ id: req.query.id, name: 'John Doe', email: 'john.doe@example.com' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to User Management API!');
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    // Process registration logic here
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    // Simulate successful registration
    res.status(201).json({ message: 'User registered successfully', user: { name, email } });
});

app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'John Doe', email: 'john.doe@example.com' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
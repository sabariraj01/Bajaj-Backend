const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    if (!data) {
        return res.status(400).json({ "is_success": false, "error": "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1)[0]] : [];

    res.json({
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
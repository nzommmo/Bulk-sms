const express = require('express');
const bodyParser = require('body-parser');
const AfricasTalking = require('africastalking');
const path = require('path');

// Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: 'atsk_1941837088948334b580403b0dd13471c559d8065bc3aa3e6feeeb86967dcfef8209174e', 
    username: 'sandbox'
});

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" directory

const sms = africastalking.SMS;

// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
    const { to, message,from } = req.body;

    if (!to || !message || !from) {
        return res.status(400).json({ success: false, error: 'Invalid parameters' });
    }

    try {
        const result = await sms.send({ to, message,from});
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

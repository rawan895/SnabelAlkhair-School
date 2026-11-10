
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Snabel Alkhair Backend is Running!");
});

// Receive contact messages
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill in all fields."
        });
    }

    console.log("New Contact Message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.status(201).json({
        success: true,
        message: "Your message was received successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

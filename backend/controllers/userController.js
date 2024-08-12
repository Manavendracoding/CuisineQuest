exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request received:", { email, password });

    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log("Invalid credentials: User not found");
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("Invalid credentials: Password mismatch");
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log("Login successful");
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

import express from "express";
import { config } from "./config.js";
import linkedinRoutes from "./routes/linkedinRoutes.js";

const app = express();
app.use(express.json());

// Use LinkedIn routes
app.use("/api/linkedin", linkedinRoutes);

// Use PORT from config file
const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Access Token: ${config.ACCESS_TOKEN}`);
    console.log(`User ID: ${config.USER_ID}`);
});
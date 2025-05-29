import express from "express";
import multer from "multer";
import { config } from "../config.js";
import axios from "axios";

const router = express.Router();
const upload = multer(); // Middleware to handle multipart form data

// Route to fetch LinkedIn user info
router.get("/userinfo", async (req, res) => {
    try {
        const response = await axios.get("https://api.linkedin.com/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${config.ACCESS_TOKEN}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching user info:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch user info from LinkedIn." });
    }
});

// Route to upload media and post to LinkedIn
router.post("/upload", upload.single("media"), async (req, res) => {
    try {
        const { text } = req.body;
        const media = req.file;

        if (!media) {
            return res.status(400).json({ error: "Media file is required." });
        }

        // Step 1: Register the media upload
        const registerResponse = await axios.post(
            "https://api.linkedin.com/v2/assets?action=registerUpload",
            {
                registerUploadRequest: {
                    recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
                    owner: `urn:li:person:${config.USER_ID}`,
                    serviceRelationships: [
                        {
                            relationshipType: "OWNER",
                            identifier: "urn:li:userGeneratedContent",
                        },
                    ],
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const uploadUrl = registerResponse.data.value.uploadMechanism[
            "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
        ].uploadUrl;

        // Step 2: Upload the media
        await axios.put(uploadUrl, media.buffer, {
            headers: {
                "Content-Type": media.mimetype,
            },
        });

        // Step 3: Create the post
        const postResponse = await axios.post(
            "https://api.linkedin.com/v2/ugcPosts",
            {
                author: `urn:li:person:${config.USER_ID}`,
                lifecycleState: "PUBLISHED",
                specificContent: {
                    "com.linkedin.ugc.ShareContent": {
                        shareCommentary: {
                            text,
                        },
                        shareMediaCategory: "IMAGE",
                        media: [
                            {
                                status: "READY",
                                description: {
                                    text: text,
                                },
                                media: registerResponse.data.value.asset,
                                title: {
                                    text: "Uploaded Image",
                                },
                            },
                        ],
                    },
                },
                visibility: {
                    "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.json({ message: "Post published successfully!", data: postResponse.data });
    } catch (error) {
        console.error("Error publishing post:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to publish post to LinkedIn." });
    }
});

export default router;
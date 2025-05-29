import dotenv from "dotenv";
dotenv.config();

class LinkedInController {
    constructor(linkedinService) {
        this.linkedinService = linkedinService;
    }

    async publishPost(req, res) {
        try {
            const { text } = req.body;
            const media = req.file; // Assuming you're using multer for file uploads
            const userId = process.env.USER_ID; // Fetch user_id from .env

            if (!media) {
                return res.status(400).json({ message: "No media file provided." });
            }

            const response = await this.linkedinService.publishPostAction(text, media, userId);
            res.status(200).json({ message: "Post published successfully!", data: response.data });
        } catch (error) {
            console.error("Error publishing post:", error);
            res.status(500).json({ message: "Failed to publish post", error: error.message });
        }
    }
}

export default LinkedInController;
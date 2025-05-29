import axios from "axios";

class LinkedInService {
    async publishPostAction(text, media, userId, accessToken) {
        try {
            // Upload the media to LinkedIn (if required)
            const mediaUploadResponse = await axios.post(
                "https://api.linkedin.com/v2/assets?action=registerUpload",
                {
                    registerUploadRequest: {
                        owner: `urn:li:person:${userId}`,
                        recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
                        serviceRelationships: [
                            {
                                identifier: "urn:li:userGeneratedContent",
                                relationshipType: "OWNER",
                            },
                        ],
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const uploadUrl = mediaUploadResponse.data.value.uploadMechanism["com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"].uploadUrl;

            // Upload the image to the provided URL
            await axios.put(uploadUrl, media.buffer, {
                headers: {
                    "Content-Type": media.mimetype,
                },
            });

            // Publish the post
            const postResponse = await axios.post(
                "https://api.linkedin.com/v2/ugcPosts",
                {
                    author: `urn:li:person:${userId}`,
                    lifecycleState: "PUBLISHED",
                    specificContent: {
                        "com.linkedin.ugc.ShareContent": {
                            shareCommentary: {
                                text: text,
                            },
                            shareMediaCategory: "IMAGE",
                            media: [
                                {
                                    status: "READY",
                                    description: {
                                        text: "Shared via PIXEL App",
                                    },
                                    media: mediaUploadResponse.data.value.asset,
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
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            return postResponse.data;
        } catch (error) {
            console.error("Error in publishPostAction:", error.response?.data || error.message);
            throw new Error("Failed to publish post to LinkedIn.");
        }
    }
}

export default LinkedInService; // Ensure this is a default export
# LinkedIn Posting App - Backend

## Overview
This backend service is designed to facilitate posting content to LinkedIn via its API. It is built using Node.js and Express, providing a simple interface for the frontend application to interact with LinkedIn.

## Project Structure
```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes                # Contains route definitions
│   │   └── linkedinRoutes.js  # Routes for LinkedIn API interactions
│   ├── controllers           # Contains business logic
│   │   └── linkedinController.js # Controller for LinkedIn post logic
│   └── services              # Contains service functions
│       └── linkedinService.js # Service for LinkedIn API calls
├── package.json              # Project dependencies and scripts
├── .env                      # Environment variables
└── README.md                 # Documentation for the backend
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd linkedin-posting-app/backend
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the backend directory and add your LinkedIn API credentials:
   ```
   LINKEDIN_ACCESS_TOKEN=your_access_token
   LINKEDIN_USER_ID=your_user_id
   ```

4. **Run the Application**
   Start the server with:
   ```bash
   npm start
   ```

5. **API Endpoints**
   - `POST /api/linkedin/post`: Endpoint to publish a post on LinkedIn.

## Usage
Once the backend is running, you can use the frontend application to submit posts to LinkedIn. Ensure that the frontend is configured to point to the correct backend URL.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. 

## License
This project is licensed under the MIT License.
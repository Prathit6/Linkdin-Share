# LinkedIn Posting App

This repository contains a **feature module** from our minor project *Vision AI*. This feature—**LinkedIn Posting App**—was not fully integrated into the main project but is planned for future implementation.

---

## Project Overview

The LinkedIn Posting App allows users to publish posts directly to LinkedIn using the LinkedIn API. It consists of:

* **Backend:** Built with Node.js and Express.
* **Frontend:** Built with React.

---

## Project Structure



```
linkedin-posting-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   └── linkedinRoutes.js
│   │   ├── controllers
│   │   │   └── linkedinController.js
│   │   └── services
│   │       └── linkedinService.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── PostForm.js
│   │   └── api
│   │       └── linkedinApi.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your LinkedIn access token and user ID:
   ```
   LINKEDIN_ACCESS_TOKEN=your_access_token
   LINKEDIN_USER_ID=your_user_id
   ```

4. Start the backend server:
   ```
   npm start
   ```

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## Usage

- Use the frontend application to input your post content and submit it.
- The backend will handle the request and publish the post on LinkedIn using the LinkedIn API.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

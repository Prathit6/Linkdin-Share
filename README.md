# LinkedIn Posting App

This project is a simple application that allows users to publish posts on LinkedIn via an API. It consists of a backend built with Node.js and Express, and a frontend built with React.

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
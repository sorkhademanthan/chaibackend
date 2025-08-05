# Lesson 2: How to Deploy Backend Code in Production

## Overview
This lesson covers the essential steps and best practices for deploying backend applications to production environments. The focus is on Node.js/Express apps, but the principles apply broadly.

---

## Key Topics

### 1. Preparing Your Code for Production
- Remove unnecessary files (e.g., `.env`, test files).
- Ensure environment variables are used for sensitive data.
- Set up proper logging and error handling.

### 2. Choosing a Hosting Platform
- Popular options: Heroku, Vercel, AWS, DigitalOcean.
- Demo uses [Heroku](https://heroku.com) for deployment.

### 3. Setting Up Git and Remote Repository
- Initialize git:  
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  ```
- Push code to GitHub.

### 4. Deploying to Heroku
- Install Heroku CLI.
- Login:  
  ```bash
  heroku login
  ```
- Create a new Heroku app:  
  ```bash
  heroku create your-app-name
  ```
- Deploy code:  
  ```bash
  git push heroku main
  ```
- Set environment variables on Heroku dashboard.

### 5. Handling Environment Variables
- Use `.env` locally, but set variables in production via platform dashboard.
- Example:
  ```env
  PORT=3000
  MONGO_URI=your_mongo_connection_string
  ```

### 6. Common Deployment Issues
- Port binding (use `process.env.PORT`).
- Database connection errors.
- CORS issues.

### 7. Post-Deployment Checklist
- Test API endpoints.
- Monitor logs:  
  ```bash
  heroku logs --tail
  ```
- Set up monitoring and alerts.

---

## Example: Express Server Setup for Production

```js
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from production!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## Important Takeaways
- Always use environment variables for sensitive data.
- Test thoroughly before deploying.
- Monitor your app after deployment.
- Use version control and CI/CD for smooth deployments.

---

## Resources
- [Heroku Documentation](https://devcenter.heroku.com/)
- [Node.js Deployment Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
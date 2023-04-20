# Chichaty
Chitchaty can answer almost any questions you have in mind. It is running Chat GPT in the background.

## Project Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   cd chichaty
   ```

4. Install the requirements

   ```bash
   npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   cp .env.example .env
   ```
   On Windows:
   ```powershell
   copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file
   ```bash
   OPENAI_API_KEY=<ADD API KEY>
   ```
7. Add your local MongoDB URI `.env` file
   ```bash
   MONGO_LOCAL_URI=<ADD LOCAL MONGO DB INSTANCE HERE>
   ```
8. Add your production MongoDB URI `.env` file. 
   ```bash
   MONGO_PROD_URI=<ADD PRODUCTION MONGO DB INSTANCE HERE>
   ```
9. You may change the default env settings. 
   ```bash
	NODE_ENV=development - Change this if you want to simulate different node environment during the development of your app
	PORT=5090
   ```


10. Run the app

   ```bash
   npm run dev
   ```

You should now be able to access the app at [http://localhost:5090](http://localhost:5090)! 
You may also check the live demo version of chitchaty: https://chitchaty.herokuapp.com.

## Heroku Deployment
NOTE: The project provides also the necessary setup for your heroku depl.yment.

 1. Install the Heroku CLI
 2. Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).
 3. If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
   ```bash
   heroku login
   ```
 4. Create a new Git repository. Initialize a git repository in a new or existing directory
   ```bash
	cd my-project/
	git init
	heroku git:remote -a <APP_NAME>
   ```
 5. Deploy your application. Commit your code to the repository and deploy it to Heroku using Git.
   ```bash
	git add .
	git commit -am "make it better"
	git push heroku master
   ```
 6. For existing repositories, simply add the heroku remote
   ```bash
	heroku git:remote -a chitchaty
   ```
 7. Add the following environment variables to the heroku dashboard.Got to your app(chitchatty) > settings > Config Vars.
   ```bash
	MONGO_PROD_URI
	OPENAI_API_KEY
   ``` 
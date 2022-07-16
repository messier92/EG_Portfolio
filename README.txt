HOW TO START THE PROJECT:
1. Open the command line, cd to backend_sanity and type "sanity start"
2. Open the command line, cd to frontend_react and type "npm start"

HOW TO LINK SANITY BACKEND WITH FRONTEND:
1. Open the command line, cd to backend_sanity and type "sanity manage"
2. Click on the 'API' tab
3. Add the IP Address to 'CORS origins'

For example, to allow http://localhost:3000 to access data from the Sanity backend, add "http://localhost:3000" to the CORS origins.
Same for "https://gohhanlongeugene.netlify.app". Then, refresh the front page.

HOW TO ADD A NEW PAGE IN SANITY:
a. Backend
1. Create a new schema in the 'schemas' folder (follow the template from an existing one)
2. Add in the schema type in schema.js

For example, create 'education.js' in the schemas folder
Then add 'education' under schema.js (types: schemaTypes.concat([...]) - remember to import it from './education'

b. Frontend
1. In the 'container' folder, create a new subfolder to store the page's .jsx file and .scss file
2. Add the new page into NavigationDots.jsx and Navbar.jsx
3. Add the new page into the index.js as export {default as [CONTAINERNAME]} from './Education/Education';
4. Add the new page into App.js as a container for it to be visualized 

TO BUILD AND DEPLOY:
1. Go to https://app.netlify.com/sites/gohhanlongeugene/deploys?filter, under the 'Deploys' tab
2. In the frontend_react folder, bring up the cmd and execute "npm run build" - this will generate a new "build" folder
3. Drag and drop the "build" folder into the link and deploy
4. Remember to set the CORS origin to allow access into the Sanity backend
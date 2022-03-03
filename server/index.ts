import cors from 'cors';
import express from 'express';
import {errorHandler, middleware} from 'supertokens-node/framework/express';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';

const apiPort = 3001;
const apiDomain = 'http://localhost:' + apiPort;

supertokens.init({
  framework: 'express',
  supertokens: {
    // These are the connection details of the app you created on supertokens.com
    connectionURI: 'https://instance.aws.supertokens.io:3568',
    apiKey: 'someSecret',
  },
  appInfo: {
    appName: 'Demo App',
    apiDomain,
    websiteDomain: 'http://localhost:3000',
  },
  recipeList: [
    EmailPassword.init(), // initializes signin, sign up features
    Session.init(), // initializes session features
  ],
});

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  }),
);

app.use(middleware());
app.use(express.json());

app.use(errorHandler());

app.listen(apiPort, () => {
  console.log('server started');
});

# Serverless Framework - Lambda + Mongo

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Running "serverless" from node_modules
DOTENV: Loading environment variables from .env:
         - DB

Deploying serverless-mongo to stage dev (ap-south-1)

✔ Service deployed to stack serverless-mongo-dev (125s)

endpoints:
  POST - https://xxxxx.execute-api.ap-south-1.amazonaws.com/users
  GET - https://xxxxx.execute-api.ap-south-1.amazonaws.com/users/{email}
  GET - https://xxxxx.execute-api.ap-south-1.amazonaws.com/users
functions:
  createUser: serverless-mongo-dev-createUser (33 MB)
  getUser: serverless-mongo-dev-getUser (33 MB)
  getAll: serverless-mongo-dev-getAll (33 MB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
https://xxxxxx.execute-api.ap-south-1.amazonaws.com/users
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function getAll
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notesuploadtest",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2zf8xngauj.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_fc7GVO2hV",
    APP_CLIENT_ID: "13bmd1t79qiom9qeooln1rua58",
    IDENTITY_POOL_ID: "us-west-2:04de2636-ca7f-45a3-879e-090fdfd02a1a",
  },
};

export default config;

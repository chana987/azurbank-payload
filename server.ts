import express from "express";
import payload from "payload";
import dotenv from "dotenv";

const app = express();

const start = async () => {
  await payload.init({
    secret: dotenv.config().parsed?.PAYLOAD_SECRET || '',
    mongoURL: dotenv.config().parsed?.MONGO_URI || '',
    express: app,
  });

  app.listen(3001, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3001."
    );
  });
};

start();
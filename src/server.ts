import * as express from "express";
import * as Mongoose from "mongoose";
import { connect } from "./database/database";

const app = express();
const port = 5002;

connect();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

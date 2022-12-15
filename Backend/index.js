import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
// const mongo_username = process4
const uri = `mongodb://localhost:27017`;

const port = 8800;

MongoClient.connect(uri)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });

// Connecting MongoDB
async function mongoDbConnection() {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/pickmytours",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      6000,
    );
  }
  mongoDbConnection().then(() => {
    console.log("MongoDB successfully connected.");
  }),
    (err) => {
      console.log("Could not connected to database : " + err);
    };
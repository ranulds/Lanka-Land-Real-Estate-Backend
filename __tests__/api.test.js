const app = require("../start"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const Inquiry = require("../models/Inquiry");

const mongoose = require("mongoose");
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb+srv://root:1234@testdb.pltts.mongodb.net/final?retryWrites=true&w=majority`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

// test inquiry create endpoint
it("Should save inquiry to database", async (done) => {
  const res = await request.post("/api/add").send({
    firstname: "Zell",
    lastname: "Silva",
    email: "testing@gmail.com",
    subject: "Colombo",
    message: "Test",
  });
  done();
});

// test login endpoint
it("Log test user", async (done) => {
  const res = await request.post("/api/users/login").send({
    email: "admin@test.com",
    password: "123456",
  });
  done();
});

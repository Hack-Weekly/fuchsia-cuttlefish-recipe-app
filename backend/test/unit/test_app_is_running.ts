import request from "supertest";
import app from "../../src/app";

describe("Test the root path", () => {
  test("GET method responds with status code 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

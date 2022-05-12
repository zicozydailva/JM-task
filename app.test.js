const supertest = require("supertest");
const app = require("./server");

describe("product", () => {
  describe("given a wrong route", () => {
    it("should return 404", async () => {
      const product = "/product";
      await supertest(app).get(`/api/${product}`).expect(404);
    });
  });
  
});

describe("get product route", () => {
    describe("given the route is correct", () => {
      it("should return a 200", async () => {
        const { statusCode } = await supertest(app).get("/api/products");

        expect(statusCode).toBe(200);
      });
    })
})
import request from "supertest";
import { createExpressApp } from "../utils/server";

// Create Express Application
const app = createExpressApp();

describe('POST /api/gpt/query', () => {

    describe("Given a query", () => {
        test("Respond with 200 status code", async () => {
            const response = await request(app).post("/api/gpt/query").send({query: "hi"});
            
            expect(response.statusCode).toBe(200);
        })

        test("Specify JSON in the content", async () => {
            const response = await request(app).post("/api/gpt/query").send({query: "hi"});

            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });
    });

    describe("Not given a query", () => {
        test("Respond with 400 status code", async () => {
            const response = await request(app).post("/api/gpt/query").send();
            
            expect(response.statusCode).toBe(400);
        });
    });
})
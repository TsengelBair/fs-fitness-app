import request from "supertest";
import app from "./../index";
import mongoose from "mongoose";

let server: any;

beforeAll(async () => {
  server = app.listen(7000);

  await mongoose.connect(
    "mongodb+srv://Martin_Iden:Martin_Iden_715@cluster0.jfbrdk8.mongodb.net/?retryWrites=true&w=majority"
  );
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});

// describe("Авторизация пользователя", () => {
//   it("Должна успешно авторизовать пользователя", async () => {
//     const excitingUser = {
//       email: "newuser@mail.ru",
//       password: "testpassword",
//     };

//     const responce = await request(app)
//       .post("/api/auth/login")
//       .send(excitingUser);

//     expect(responce.status).toBe(200);
//   });
// });

describe("Авторизация незарегистрированного пользователя", () => {
  it("Должна вернуть ошибку 404", async () => {
    const invalidUser = {
      email: "emptyuser@mail.ru",
      password: "passWord",
    };

    const responce = await request(app)
      .post("/api/auth/login")
      .send(invalidUser);

    expect(responce.status).toBe(404);
    expect(responce.body.message).toBe(
      `User with email ${invalidUser.email} doesn't exist`
    );
  });
});

// Тесты на регистрацию

// describe("Регистрация пользователя", () => {
//   it("Должна успешно зарег-ть нового пользователя", async () => {
//     const newUser = {
//       email: "newuser@mail.ru",
//       password: "testpassword",
//     };

//     const responce = await request(app)
//       .post("/api/auth/registration")
//       .send(newUser);

//     expect(responce.status).toBe(200);
//     expect(responce.body.message).toBe("Success registration!");
//   });
// });

// describe("Регистрация при невалидных данных", () => {
//   it("Должно вернуть ошибку 400", async () => {
//     const res = await request(app)
//       .post("/api/auth/registration")
//       .send({ email: "invalid_email", password: "pass" });

//     expect(res.status).toBe(400);
//     expect(res.body.errors).toBeTruthy();
//   });
// });

// describe("Регистрация пользователя", () => {
//   it("Должна выдать ошибку, что такой пользователь уже есть", async () => {
//     const excitingUser = {
//       email: "newuser@mail.ru",
//       password: "testpassword",
//     };

//     const responce = await request(app)
//       .post("/api/auth/registration")
//       .send(excitingUser);

//     expect(responce.status).toBe(400);
//     expect(responce.body.message).toBe(
//       `User with email ${excitingUser.email} already exist`
//     );
//   });
// });

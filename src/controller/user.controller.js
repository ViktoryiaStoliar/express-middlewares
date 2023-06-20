const express = require("express");
const { isValidUserId, isValidUserData } = require("../helper/validation");
const { Service } = require("../service/user.service");
const { buildResponse } = require("../helper/buildResponse");

const service = new Service();

class Contrpoller {
  constructor() {
    this.router = express.Router();
    this.initRouter();
  }

  initRouter() {
    this.router.get("/", (req, res) => {
      try {
        const data = service.getAllUser();
        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.get("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.getUserById(id);
        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.put("/:id", isValidUserId, isValidUserData, (req, res) => {
      try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = service.updataUser(id, name, surname, email, pwd);
        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.post("/", isValidUserId, isValidUserData, (req, res) => {
      try {
        const { name, surname, email, pwd } = req.body;
        const data = service.createUser(name, surname, email, pwd);
        buildResponse(res, 201, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.patch("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const clientObj = req.body;
        const data = service.patchUser(id, clientObj);
        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.delete("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.deleteDataById(id);
        buildResponse(res, 201, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });
  }
}

module.exports = Contrpoller;

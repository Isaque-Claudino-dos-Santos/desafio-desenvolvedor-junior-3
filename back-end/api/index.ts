import "dotenv/config";
import "dotenv-expand/config"
import express from "express";
import AppServer from "./http/AppServer";

const appServer = new AppServer(express());

appServer.listen();


console.log(process.env.DB_URL);

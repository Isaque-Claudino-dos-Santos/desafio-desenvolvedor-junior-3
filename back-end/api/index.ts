import "dotenv/config";
import express from "express";
import AppServer from "./http/AppServer";

const appServer = new AppServer(express());

appServer.listen();

import http from "http";
import app from "./app";

const port = process.env.port || 3029;

const server = http.createServer(app);
server.listen(port);
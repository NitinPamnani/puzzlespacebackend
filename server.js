import http from "http";
import app from "./app";

const port = process.env.port || 3029;

const server = http.createServer(app);
server.listen(port, function(){
    console.log("app running on port"+process.env.port);
});
import { Injector } from "@sailplane/injector";
import Bootstrap from "./bootstrap";

const app = new Bootstrap()

app?.setupIOCContainer()
app?.setupHttpRoutes()
app?.startServer();

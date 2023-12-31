import express from 'express';
import Hello from "./hello.js";
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import AssignmentRoutes from './assignments/routes.js';

const app = express()
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
app.use(express.json());
CourseRoutes(app);
app.use(express.json());
AssignmentRoutes(app)
Hello(app)
Lab5(app);
app.listen(4000)
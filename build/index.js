"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
var app = express_1.default();
mongoose_1.default.connect(process.env.BD_CONECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(process.env.PORT || 3001);

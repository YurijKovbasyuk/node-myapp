const path = require("path");
const app = express();
const myRouter = require("./my-router");

app.use("/my-router", myRouter);

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  console.log(req._eventsCount);
  next();
});

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact user Параметр: ${req.params.id}</h1>`);

  console.log(req.params.id);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

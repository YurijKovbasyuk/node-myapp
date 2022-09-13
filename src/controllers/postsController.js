let posts = [
  { id: "1", topic: "test1", text: "test text1" },
  { id: "2", topic: "test2", text: "test text2" },
  { id: "3", topic: "test3", text: "test text3" },
];

const getPosts = (req, res) => {
  res.json({ posts, status: "success" });
};

const getPostById = (req, res) => {
  // filter возвращает массив и достаем одим элемент через деструктуризацию
  const { id } = req.params;
  const [post] = posts.filter((item) => item.id === id);
  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no posts with id '${id}' found` });
  }
  res.json({ post, status: "success" });
};

const addPost = (req, res) => {
  // параметры ожидаемые в теле запроса (присланные)
  const { topic, text } = req.body;
  //добавляем элемент с id, topic и text
  posts.push({
    id: new Date().getTime().toString(),
    topic,
    text,
  });

  // ответ пользователю
  res.json({ status: "success" });
};

const changePost = (req, res) => {
  // параметры ожидаемые в теле запроса
  const { topic, text } = req.body;

  //найти нужный элемент
  posts.forEach((post) => {
    // если id поста = id  присланого поста
    if (post.id === req.params.id) {
      // топик меняем на присланный
      post.topic = topic;
      // текст меняем на присланный
      post.text = text;
    }
  });
  // ответ пользователю
  res.json({ status: "success" });
};
const changePatchPost = (req, res) => {
  // параметры ожидаемые в теле запроса
  const { topic, text } = req.body;

  //найти нужный элемент
  posts.forEach((post) => {
    // если id поста = id  присланого поста
    if (post.id === req.params.id) {
      // если прислали топик меняем на присланный
      if (topic) {
        post.topic = topic;
      }
      // если прислали текст меняем на присланный
      if (text) {
        post.text = text;
      }
    }
  });
  // ответ пользователю
  res.json({ status: "success" });
};
const changeDeletePost = (req, res) => {
  posts = posts.filter((item) => item.id !== req.params.id);
  // ответ пользователю
  res.json({ status: "success" });
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePost,
  changePatchPost,
  changeDeletePost,
};

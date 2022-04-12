require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const cookieParser = require('cookie-parser'); // скачиваем либу для работы с куки
const session = require('express-session'); // создает сессии на экпрессе
const FileStore = require('session-file-store')(session); // используется для хранения наших сессий

// requiring routes files
const indexRouter = require('./server/routes/index');
const postsRouter = require('./server/routes/posts');
const usersRouter = require('./server/routes/users');

const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
const sessionConfig = {
  store: new FileStore(), // хранилище для куков - папка с файлами
  name: 'userCookie', // имя сессионной куки
  secret: 'lig,jmb', // строка для шифрования сессии
  resave: false, // не пересохраняем сессию если не было изменений
  saveUninitialized: false, // не сохраняем сессию если она пустая
  cookie: { secure: false, httpOnly: true }, // не HTTPS
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userEmail = req.session?.userEmail;
  res.locals.userUsername = req.session?.userUsername;
  next();
});

// routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT ?? 3001, () => {
  console.log('Server started')
});

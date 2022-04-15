require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const cookieParser = require('cookie-parser'); // скачиваем либу для работы с куки
const session = require('express-session'); // создает сессии на экпрессе
const FileStore = require('session-file-store')(session); // используется для хранения наших сессий

// requiring routes files
const indexRouter = require('./routes/index');
const specialityRouter = require('./routes/specialityRouter');
const postsRouter = require('./routes/postsRouter');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const vetRouter = require('./routes/vet');
const servicesRouter = require('./routes/servicesAll');
// const groomingRouter = require('./routes/grooming')
// const otherRouter = require('./routes/other')
// const walkRouter = require('./routes/walking')

const { PORT } = process.env;
const dbcheck = require('./db/dbConnection');

const app = express();
dbcheck();

// middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use((req, res, next) => {
  const accessList = [
    'http://localhost:3000',
    'http://localhost:3001',
  ];
  const origin = req.get('origin');
  if (accessList.includes(origin)) { // если в списке есть адрес того, кто обращается к серверу, то делаем для него заголовок
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header('Access-Control-Allow-Credentials', true);
  }
  next();
});

const sessionConfig = {
  store: new FileStore(), // хранилище для куков - папка с файлами
  name: 'userCookie', // имя сессионной куки
  secret:process.env.SESSION_SECRET ?? 'jw2312001001000owj', // строка для шифрования сессии
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
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/vet', vetRouter)
app.use('/services', servicesRouter)
// app.use('/services/grooming', groomingRouter)
// app.use('/services/other', otherRouter)
// app.use('/services/walking', walkRouter)
app.use('/findServ', specialityRouter)



app.listen(PORT ?? 3003, () => {
  console.log('Server started at http://localhost:%s/', PORT)
})

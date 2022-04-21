require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');


const cookieParser = require('cookie-parser'); // скачиваем либу для работы с куки
const session = require('express-session'); // создает сессии на экпрессе
const FileStore = require('session-file-store')(session); // используется для хранения наших сессий

// requiring routes files
const indexRouter = require('./routes/index');
const auth2Router = require('./routes/auth2');
const specialityRouter = require('./routes/specialityRouter');
const postsRouter = require('./routes/postsRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/auth');
const vetRouter = require('./routes/vet');
const servicesRouter = require('./routes/servicesAll');
// middlewaries
const userMiddleware = require('./middlewares/user');
const notFoundMiddleware = require('./middlewares/notfound404');
const errorMidlleware = require('./middlewares/error')
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
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
  }
  next();
});

// const corsOptions = {
//   origin: '*',
//   methods: 'GET, HEAD, POST, PATCH, UPDATE, PUT, DELETE, OPTIONS',
//   credentials: true,
//   allowedHeaders: 'Content-Type, Authorization, X-Requested-With'
// }
// app.use(cors(corsOptions))

const sessionConfig = {
  store: new FileStore(), // хранилище для куков - папка с файлами
  name: 'myCookiezz', // имя сессионной куки
  secret: process.env.SESSION_SECRET ?? 'jw2312001001000owj', // строка для шифрования сессии
  resave: false, // не пересохраняем сессию если не было изменений
  saveUninitialized: false, // не сохраняем сессию если она пустая
  cookie: { secure: false, httpOnly: true }, // не HTTPS
};
app.use(session(sessionConfig));
app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL
  }
))

app.use((req, res, next) => {
  res.locals.id = req.session?.user?.id;
  res.locals.login = req.session?.user?.login;
  // res.locals.userId = req.session?.userId;
  res.locals.userEmail = req.session?.userEmail;
  res.locals.userUsername = req.session?.userUsername;

  next();
});

app.use(passport.initialize());
app.use(passport.session()); //passport.js записывает сессии в req.user

app.use(userMiddleware);

// routes
app.use('/api', indexRouter)
app.use('/api/auth', auth2Router);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/vet', vetRouter)
app.use('/services', servicesRouter)
app.use('/findServ', specialityRouter)

// в случае, если не сработает ни один роут
app.use(notFoundMiddleware);
/* в случае, если в каком-то роуте 
   вызовется ф-я next('some value') с аргументом */
app.use(errorMidlleware);


app.listen(PORT ?? 3003, () => {
  console.log('Server started at http://localhost:%s/', PORT)
})

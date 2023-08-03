import Express from 'express';
import { foodRouter, categoriesRouter, userRouter } from './routes';
import cors from 'cors';


const app = Express();

// Configuração dos cabeçalhos CORS permitindo a origem http://localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
};

// Habilita o middleware cors com as opções configuradas
app.use(cors(corsOptions));

app.use(Express.json());
app.use('/api/food', foodRouter );
app.use('/api/categories', categoriesRouter );
app.use('/api/user', userRouter );

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
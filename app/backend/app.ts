import Express from 'express';
import { foodRouter, categoriesRouter, userRouter } from './routes';

const app = Express();

app.use(Express.json());
app.use('/api/food', foodRouter );
app.use('/api/categories', categoriesRouter );
app.use('/api/user', userRouter );

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
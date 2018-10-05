import expess from 'express';
import path from 'path';

const app = expess();
const PORT = process.env.PORT || 3010;

app.use(expess.static('client/app'));

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'client', 'app', 'index.html'));
});

app.listen(PORT);

export default app;

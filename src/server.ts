import express from 'express';
import './database';
import routes from './routes';


const app = express()
// definição de express json deve vir antes de routes
app.use(express.json())
app.use(routes);



const PORT = 5001
app.listen(PORT, () => console.log(`Server is running, port ${PORT} 🏍`))


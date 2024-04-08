import express from 'express'
import packageJson from '../package.json' assert { type: 'json'}
import { User } from './models/Users.js';

const host = process.env.HOST ?? 'localhost'
const port = Number(process.env.PORT) || 3000

const app = express();
// Ici on crée une route : 

app.get('/', (req, res) => {
    res.json({
        version: packageJson.version
    })
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = User.getById(id)
    if (user) {
        res.json(user)
    } else {
        res.status(404).send('Error 404: User not found')
    }
})

// Start the server
app.listen(port, host, () => {
    console.log(`Server (v${packageJson.version}) is running on http://${host}:${port}`);
});
import { User } from "../models/User.js"

export function loginController(req, res) {
    console.log('Recieved', req.body)
    const { username, password } = req.body

    // Trouver l'utilisateur avec ce mot de passe et username
    const user = User.findByUsernameAndPassword(username, password)
    if (user) {
        res.json({ id: user.id, username: user.username })
    } else {
        res.status(401).send('Invalid Credentials')
    }
}
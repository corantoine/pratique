const users = []

export class User {
    /**
     * Users's id
     */
    id

    /**
     * User's pseudonyme
     */
    username

    /**
     * User's email adress
     */
    email

    /**
     * User's password
     */
    password

    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    save() {
        const userIndex = users.findIndex(user => user.id == this.id)
        if (userIndex != -1) {
            // Si l'user a été trouvé
            //On prend toutes les données de l'user local
            //Et on les sauvegarde dans la base de données
            //this = l'user actuel
            users[userIndex] = this
        } else {
            // S'il n'existe pas, on ajoute l'user
            this.id = users.length + 1
            users.push(this)
        }
    }
    //Pour trouver le mdp
    static findByUsernameAndPassword(username, password) {
        return users.find(user=>user.username.toLowerCase() == username.toLowerCase() && user.password == password)
    }
}

(new User('admin', 'admin@exmple.com', 'azerty123')).save();
(new User('test', 'test@exmple.com', 'qwerty123')).save();

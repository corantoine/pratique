const users = []



export class User {
    /**
     * Identifiant de l'utilisateur
     */
    id
    /**
     * Prenom de l'utilisateur
    */
    firstname
    /**
     * Nom de l'utilisateur
    */
    lastname
    /**
     * Pseudonyme de l'utilisateur
    */
    username

    /**
     * Créer un nouvel utilisateur
     * @param {String} firstname Prenom de l'utilisateur
     * @param {String} lastname Nom de l'utilisateur
     * @param {String} username Pseudonyme de l'utilisateur
    */

    constructor(firstname, lastname, username) {
        // Ici on rajoute this.id = users.length +1 pour que l'on puisse avoir un id généré à chaque nouvel user
        this.id = users.length + 1
        this.firstname = firstname
        this.lastname = lastname
        this.username = username
    }

    // Revoir static
    static getById(id) {
        return users.find(user => user.id == id)
    }

    save() {
        const userIndex = users.findIndex(u => u.id === this.id)
        if (userIndex != -1) {
            users[userIndex] = this
        } else {
            users.push(this)
        }
    }
}
const user = new User('Coralie', 'ANTOINE', 'Corantoine')
user.save()
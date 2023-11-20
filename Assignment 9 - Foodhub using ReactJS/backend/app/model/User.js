class User {
    constructor( obj ) {
        this.fullName = obj.fullName;
        this.email = obj.email;
        this.password = obj.password;
    }
}

module.exports = User;
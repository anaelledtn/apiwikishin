const getUsers = "SELECT * FROM USERSHIN";
const getUserByEmail = "SELECT * FROM USERSHIN WHERE email = $1";
const checkUserExists = "SELECT u FROM USERSHIN u WHERE u.email = $1";
const addUser = "INSERT INTO USERSHIN (prenom, email, password, admin) VALUES ($1, $2, $3,$4)";
const removeUser = "DELETE FROM USERSHIN WHERE email = $1";
const updateUser = "UPDATE USERSHIN SET prenom = $1, password = $2, admin = $3 WHERE email = $4";

module.exports = {
    getUsers,
    getUserByEmail,
    checkUserExists,
    addUser,
    removeUser,
    updateUser,
};
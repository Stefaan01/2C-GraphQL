const users = [];

const getUsers = () => {
    return users;
};

const addUser = (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
};

const deleteUser = (name) => {
    const index = users.findIndex(user => user.name === name);
    if(index === -1) {
        throw new Error('User not found');
    }
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
};

const filterUsers = (parameter, isName) => {
    const lowerCaseParameter = parameter ? parameter.toLowerCase() : '';

    return users.filter(user => {
        if(isName) {
            const nameMatch = lowerCaseParameter ? user.name.toLowerCase().includes(lowerCaseParameter) : true;
            return nameMatch;
        }
        else {
            const emailMatch = lowerCaseParameter ? user.email.toLowerCase().includes(lowerCaseParameter) : true;
            return emailMatch;
        }
    })
}

module.exports = { getUsers, addUser, deleteUser, filterUsers };

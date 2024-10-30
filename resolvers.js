const db = require('./db');

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const resolvers = {
    Query: {
        getUsers: async () => {
            return db.getUsers();
        },

        filterUsers: async(_, {parameter, isName} ) => {
            return db.filterUsers(parameter, isName);
        },
    },

    Mutation: {
        addUser: async (_, { name, email }) => {
            if (!isValidEmail(email)) {
                throw new Error('Invalid email format');
            }
            return db.addUser(name, email);
        },

        deleteUser: async (_, { name }) => {
            return db.deleteUser(name);
        },
    },
};

module.exports = resolvers;
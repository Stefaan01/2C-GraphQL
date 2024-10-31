# 2C-GraphQL
- Backend tehnologije projekta su: Apollo Server, GraphQL, Node.js
- Baza podataka koristi PostgreSQL Server, dok se za upravljanje istom koristi pgAdmin4
- Konekcija sa bazom podataka se uspostavlja kroz .env fajl

1. Otvorite projekat u Visual Studio Code-u
2. Otvorite terminal u Visual Studio Code-u
3. Unesite: node index.js
4. Idite na adresu: "http://localhost:4000/" (Apollo Server Playground)
5. Istestirajte metode preko Apollo Server Playground-a: 
    - getUsers
    - addUser(name, email)
    - deleteUser(name)
    - filterUsers(parameter, isName)
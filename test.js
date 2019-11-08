const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    dialect: 'mysql'
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// class User extends Sequelize.Model {}
// User.init({
//     username: Sequelize.STRING,
//     birthday: Sequelize.DATE
// }, { sequelize, modelName: 'user' });

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.ENUM,
        value: ['男', '女']
    }
})

sequelize.sync({ force: true })
    .then(() => User.create({
        firstName: 'Mang',
        lastName: 'Huang',
        gender: 0
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });


// User.create({
//     firstName: 'Xue',
//     lastName: 'Yong'
// }).then(user => {
//     console.log(user.id)
// })


// User.update({ firstName: 'Tom' }, {
//     where: {
//         firstName: 'Mang'
//     }
// }).then(() => {
//     console.log('Done')
// })

// User.destroy({
//     where: {
//         firstName: 'Tom'
//     }
// }).then(() => {
//     console.log('Done')
// })
var mongoose = require('mongoose');
mongoose.connect('mongodb://120.24.172.85/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

var kittySchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    },
    age: 'Number'
});

kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

// var Kitten = mongoose.model('Kitten', kittySchema);

// var fluffy = new Kitten({ name: 'Jack', age: 25 });

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

// Kitten.find(function(err, kittens){
//     console.log(kittens)
// })

var Kitten2 = mongoose.model('Kitten', {name:'String'})
// Kitten2.find(function(err, kittens){
//     console.log(kittens)
// })

// Kitten2.remove({'name':'tom'})

// Kitten2.update({'name':'jack'}, {$set:{name:'Tom'}})


// Kitten2.findOne({name:'jack'}, function(err, kittens){
//     kittens.name='Tom'
//     kittens.save()
// })


Kitten2.findOneAndUpdate({name:'Tom'}, {$set:{name: 'Jack'}})
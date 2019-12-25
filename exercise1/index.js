const mongoose = require('mongoose');

let mongo_db_name = "mongo-exercises";

mongoose.connect('mongodb://localhost/'+mongo_db_name)
.then(() => console.log('Connection to mongo db is opened'))
.catch((error) => console.log('Error durring connection to mongo db'));

const collectionSchema = new mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now},
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('courses', collectionSchema);

async function getData() {
    try {
        const courses = await Course
        .find({isPublished: true})
        .sort({name: 1})
        .select({name: 1, author: 1})        
        console.log(courses);

    } catch(error)
    {
        console.log('Error', error);
    }
}

getData();
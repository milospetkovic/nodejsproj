const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch((error) => console.log('Cannot connect to mongodb', err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    try {
        const course = new Course({
            name: "selling course",
            author: "kristina",
            tags: ['test', 'shop'],            
            isPublished: true 
        });
        const result = await course.save();
        console.log(result);
        console.log('successfull saved course to the mongodb');
    } catch(err) {
        console.log('Error creating course', err);
    }
}

createCourse();
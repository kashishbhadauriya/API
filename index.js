require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');

const app=express();
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));//add middleware to parse form data
const User = require('./models/users');
const Note = require('./models/notes');
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.redirect('/signup');
    } 
});



app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})
const notes = [];

/*app.post('/notes', (req, res) => {
    notes.push(req.body);
    console.log(req.body);


    res.status(200).json({
        message: 'Note received'
    });
});
*/

app.post('/notes',async(req,res)=>{
    const { title, name } = req.body;
    try {
        const newNote = new Note({ title, name });
        await newNote.save();
        res.status(200).json({
            message: 'Note created successfully',
            note: newNote
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating note'
        });
    }
});


/*app.get('/notes', (req, res) => {    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes

    });
});
*/

app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            message: 'Notes retrieved successfully',
            notes: notes
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error retrieving notes'
        });
    }
}
);


app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);
    delete notes[index];

    res.status(404).json({ 
        message: 'Note not found',
        notes: notes
    });
});

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const name = req.body.name;
    notes[index].name = name;

    res.status(200).json({
        message: 'Note updated successfully',
        note: notes[index]
    });
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')))

app.use('/styles', express.static(path.join(__dirname, '/public/styles.css')))

app.use(express.static(path.join(__dirname, '/api/moods')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})
// app.get('/', function(req, res) {
//     res.sendFile( path.join(__dirname, '/public/index.html') );
// })

// app.get('/styles', function(req, res) {
//     res.sendFile( path.join(__dirname, './pubic/styles.css') );
// })
// app.get('/js', function(req, res) {
//     res.sendFile( path.join(__dirname, 'index.js') )
// })

app.get('/api/moods', (req, res) => {
    const moods = ['Feeling Great', 'Confused', 'Thirsty', 'Feeling Sick', 'Tired', 'Loving', 'Feeling Cute', 'Flirty', 'Done With Today']

    let randomIndex = Math.floor(Math.random() * moods.length);
    let randomMood = moods[randomIndex];

    res.status(200).send(randomMood)
});

app.get('/api/responses', (req, res) => {
    const responses = ['You have submitted your mood', 'I know I can guess this one right', 'I got you now!', 'Ohhh I know this one you dingus!']

    let randomIndex = Math.floor(Math.random() * responses.length);
    let randomResponse = responses[randomIndex]

    res.status(200).send(randomResponse)
})

app.get('/api/review', (req, res) => {
    const reviews = ['Thanks for the review', 'thanks for letting us know how we did', 'Check It Out!', 'Dr. Brule thanks you!', 'Thanks, ya dingus!']

    let randomIndex = Math.floor(Math.random() * reviews.length);
    let randomReview = reviews[randomIndex]

    res.status(200).send(randomReview)
})

app.get('/api/about', (req, res) => {
    const about = ['Thanks for telling us those things about you!','Thanks for that, ya dingus!']

    let randomIndex = Math.floor(Math.random() * about.length);
    let randomAbout = about[randomIndex]
   

    res.status(200).send(randomAbout)
})
//  function sendMood() {
//     const form = document.getElementById('moodForm');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         sendMood();
//     })
//  }



const port = 5000

app.listen(port, () => console.log('Dr Steve Brule is jamming on server 5000 aka the CHECK IT OUT server!'))
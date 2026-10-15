const express = require('express');
const app = express();
const port = 3000;

// User Story 2: Root path
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// User Story 3: Hobbies path
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// User Story 4: Skills path
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// User Story 5: API profile json path
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
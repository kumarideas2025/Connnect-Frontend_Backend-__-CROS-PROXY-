import express from "express"; // module js....we have to told that in package .so no conflict with common js
const app = express();
app.get("/", (req, res) => {
  res.send("Server is ready");
});


app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'This is another joke'
    },
    {
      id: 3,
      title: 'Programming Joke',
      content: 'Why do programmers prefer dark mode? Because light attracts bugs.'
    },
    {
      id: 4,
      title: 'JavaScript Joke',
      content: 'Why was the JavaScript developer sad? Because he did not know how to null his feelings.'
    },
    {
      id: 5,
      title: 'Backend Joke',
      content: 'I told my server a joke, but it returned a 500 error.'
    }
  ];

  res.json(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

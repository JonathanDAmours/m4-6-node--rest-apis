const { words } = require("../data/words");

// write your handlers here...

const handleWord = (req, res) => {
  const id = req.params.id;
  const word = words.filter((word) => id === word.id);
  if (word) {
    res.status(200).json({ status: 200, word: word });
  } else {
    res.status(400).json({ status: 400, message: "The word is not found" });
  }
};

const randomWord = (req, res) => {
  const randomNum = Math.floor(Math.random() * words.length);
  const word = words[randomNum];
  res.status(200).json({ status: 200, word: [word.id, word.letterCount] });
};

const guess = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter;
  const target = words.filter((word) => id === word.id);
  const word = target[0].word;
  const wordAr = word.split("");
  let result = [];
  if (letter.length !== 1) {
    res.status(403).json({
      status: 403,
      message: "You should only enter one letter",
    });
  }
  wordAr.forEach((ltr) => {
    if (letter === ltr) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  res.status(200).json({ status: 200, result: result });
};

module.exports = { handleWord, randomWord, guess };

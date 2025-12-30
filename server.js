const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

// Serva statiska filer från /public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback för alla icke-API routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server körs: http://localhost:${port}`);
});

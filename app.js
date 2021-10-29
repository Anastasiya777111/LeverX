const express = require('express');
const fs = require('fs');

const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
let result;

users = [
  {
    name: "111",
    password: "777"
  }
]


console.log(__dirname);
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')
);



app.post('/login', (req,res)=>{
let isLogged=login(req.body);
res.status(200).json(isLogged)
});

function login(req){
  let success=false;
  const userName=req;
users.forEach(el=>{
  if(userName.login==el.name && userName.password==el.password){
    success=true;
  }
});
console.log(success);
return success;
}



app.get('/', (req, res) => {
  const filters = req.query;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  console.log(req.query);
  if (Object.keys(req.query).length > 0) {
    console.log('hey');
    search(filters.word);

    res.status(200).json(result);
  } else {
    res.status(200).json({
      status: 'succes',
      data,
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


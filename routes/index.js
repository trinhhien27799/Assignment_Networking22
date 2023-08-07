var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const carModel = require('../public/objects/carObject')

main().catch(err => console.log(err));
async function main() {
  const db = 'mongodb+srv://trinhhienngo306:gSDiH3QfOe0DM1HC@firstdatabase.udwpsqi.mongodb.net/Assignment_Networking';
  await mongoose.connect(db);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData', async function(req, res, next) {
  const data = await carModel.find();
  res.send(data)
});

router.post('/add', async function(req, res, next) {
  const name = req.body.name;
  const price = req.body.price;
  const year = req.body.year;

  const car = await carModel.create({
    name: name,
    price: price,
    year: year,
  })

  await car.save();
  res.json(car);
})

router.post('/edit', async function(req, res, next) {
  const name = req.query.name;
  const price = req.query.price;
  const year = req.query.year;

  await carModel.updateOne({_id: req.query.id}, {
    name: name,
    price: price,
    year: year,
  })
});

router.post('/delete', async (req, res) => {
  const id = req.query.id;
  const data = await carModel.findByIdAndDelete(id);
})

module.exports = router;

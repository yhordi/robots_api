var faker = require('faker');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var manufacturers = []
for(var i = 0; i < 5; i += 1){
  var models = []
  for(var j = 0; j < 5; j += 1){
    models.push({
      modelNo: faker.hacker.abbreviation() + '-' + faker.random.number(),
      height: getRandomInt(1,9),
      weight: getRandomInt(1,9)
    })
  }
  manufacturers.push({
    name: faker.company.companyName(),
    models: models
  })
}
var output = {manufacturers: manufacturers}

console.log(JSON.stringify(output, null, 4))

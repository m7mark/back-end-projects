import { Client, Entity, Repository, Schema } from "redis-om";

const client = new Client()
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
    console.log('DB connected')
  }
}

class Car extends Entity { }
let schema = new Schema(
  Car, {
  make: { type: 'string', textSearch: true },
  model: { type: 'string', textSearch: true },
  image: { type: 'string', textSearch: true },
  description: { type: 'string', textSearch: true },
}, {
  dataStructure: 'JSON'
})

export async function createCar(data) {
  await connect()
  const repository = new Repository(schema, client)
  const car = repository.createEntity(data)
  const id = await repository.save(car)
  console.log(`ID is ${id}`)
  return id
}

export async function createIndex() {
  await connect()
  const repository = new Repository(schema, client)
  await repository.createIndex()
}

export async function searchCars(q) {
  await connect()
  const repository = new Repository(schema, client)
  console.log(q)
  const cars = await repository.search()
    .where('make').eq(q)
    .or('model').eq(q)
    .or('description').matches(q)
    .returnAll()
  return cars
}
import { createIndex } from "../../lib/redis"

export default async function handler(req, res) {
  const id = await createIndex()
  res.status(200).json('OK')
}
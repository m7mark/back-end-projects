import express from 'express';
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server start at port ${PORT}`))
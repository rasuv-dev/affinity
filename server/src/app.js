import express from 'express'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Study Platform API is running',
  })
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Connecting to API...')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch(() => {
        setMessage('API connection failed')
      })
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">
        {message}
      </h1>
    </div>
  )
}

export default App
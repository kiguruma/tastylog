import React, { useState, useEffect } from 'react'
import { Search } from 'components/Search'

type apiData = {
  message: string
}

function App() {
  const [message, setMessage] = useState<string>('')
  const apiRequest = async (): Promise<void> => {
    await fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data: apiData) => setMessage(data.message))
  }
  useEffect(() => {
    // (async ():Promise<void> => {
    //   await fetch('http://localhost:3001/api')
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message))
    //     .catch(() => console.log("ss"))
    // })()
    apiRequest().then(
      () => {
        console.log('aa')
      },
      () => {
        console.log('aa')
      }
    )
  }, [])
  return (
    <div>
      <Search />
    </div>
  )
}

export default App

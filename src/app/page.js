"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import RedButton from './components/RedButton'
import axios from 'axios'


export default function Home() {

  // Scripts , function, etc 

  // useState, useEffect (Hooks)
  // React js Hooks
  // props
  // Conditional render

  const [x, setX] = useState(10)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // life cycle React.js -> Next.js

  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      if (res.data) {
        console.log(res.data);
        setUsers(res.data)
        setLoading(false)
      }
    }).catch(err => {
      console.log(err);
    })
  }, [])

  /// web page 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a>Home Page</a>
      {loading === true ? <a>Loading.....</a> :
        users?.map((user) => (
          <a>{user.name}</a>
        ))
      }
    </main>
  )
}

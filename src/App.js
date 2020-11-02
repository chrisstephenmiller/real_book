import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const login = async () => {
    try {
      const { data: user } = await axios.get('/auth/me')
      setUser(user || {})
    } catch (err) {
      console.log(err)
      setUser({})
    }
  }

  const logout = async () => {
    try {
      axios.post('/auth/logout')
    } catch (err) {
      console.log(err)
    }
    setUser({})
  }

  const [user, setUser] = useState({ load: true })
  if (user.load) login()

  return (
    <div id="app">
      <div className="login">
        <span>{user.name ? `${user.name} - ${user.email}` : '-'}</span>
        {!user.name ? (
          <a href={process.env.REACT_APP_API_URL + '/auth/google'}>login</a>
        ) : (
          <span onClick={logout}>logout</span>
        )}
      </div>
    </div>
  )
}

export default App

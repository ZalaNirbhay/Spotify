import React, { useEffect, useState } from 'react'

const AllMusic = () => {
   
    const [allMusic, setallMusic] = useState([])

    const fetchAllMusic = async () => {
      try {
        const response = await fetch('api/music/getAllMusics')
        const data = await response.json()
        console.log('All Music:', data)
        setallMusic(data)
      } catch (error) {
        console.error('Error fetching all music:', error)
      }
    }

     useEffect(() => {
      fetchAllMusic()
    }, [])
    
  return (
    <div>
      {allMusic.length > 0 ? (
        <ul>
          {allMusic.map((music) => (
            <li key={music.id}>{music.title}</li>
          ))}
        </ul>
      ) : (
        <p>No music found.</p>
      )}
    </div>
  )
}

export default AllMusic

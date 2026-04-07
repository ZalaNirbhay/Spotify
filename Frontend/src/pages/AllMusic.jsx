import React, { useEffect, useState } from 'react'

const AllMusic = () => {
    const [allMusic, setAllMusic] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchAllMusic = async () => {
        try {
          // Adjust headers if your backend requires Auth token (e.g. Authorization: `Bearer ${token}`)
          const response = await fetch('/api/music/getAllMusics')
          const data = await response.json()
          
          if (data && data.musics) {
            setAllMusic(data.musics)
          }
        } catch (error) {
          console.error('Error fetching all music:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchAllMusic()
    }, [])
    
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Discover Music</h1>
      
      {loading ? (
        <p className="text-slate-400">Loading tracks...</p>
      ) : allMusic.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {allMusic.map((music) => (
            <div 
              key={music._id} 
              className="bg-[rgba(12,19,33,0.82)] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_4px_20px_rgba(16,185,129,0.15)] transition duration-300 group flex flex-col"
            >
              {/* Abstract Artwork Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-900/40 relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-emerald-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-slate-100 truncate" title={music.title}>
                    {music.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 truncate">Artist: {music.artist}</p>
                </div>
                
                <div className="mt-4">
                  <audio 
                    controls 
                    src={music.uri} 
                    className="w-full h-9 rounded-lg" 
                    controlsList="nodownload"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 py-20 bg-white/5 rounded-2xl border border-white/10 max-w-2xl mx-auto mt-12">
          <p className="text-xl text-slate-300">No music found.</p>
          <p className="text-sm text-slate-500 mt-2">Check back later for new tracks.</p>
        </div>
      )}
    </div>
  )
}

export default AllMusic

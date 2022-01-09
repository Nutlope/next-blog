import { useEffect, useState } from 'react'
import Tweet from '../components/Tweet'

export default function Tweets({ ids, cols }) {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      const getTweets = async () => {
        const body = { ids }
        const res = await fetch(`/api/getTweets`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        const tweets = await res.json()
        setData(tweets)
      }
      getTweets()
    } catch (error) {
      console.log('error is: ', error)
    }
  }, [ids])

  console.log('data is', data)
  return (
    <div>
      {cols === 1 && (
        <div className="grid grid-cols-1 gap-4">
          {data && data.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </div>
      )}
      {cols === 2 && (
        <div className="grid grid-cols-2 gap-4">
          {data && data.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </div>
      )}
      {cols === 3 && (
        <div className="grid grid-cols-3 gap-4">
          {data && data.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </div>
      )}
    </div>
  )
}

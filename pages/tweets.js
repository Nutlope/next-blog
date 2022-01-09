import Tweets from '../components/Tweets'

export default function anothaTweet() {
  return (
    <div>
      <Tweets
        ids={[
          '1189444653059174401',
          '935857414435495937',
          '1334528781139259400',
          '1334334544598740994',
        ]}
        cols={2}
      />
    </div>
  )
}

import React, { useState } from 'react';
import { TweetItem } from "./TweetItem";
import { SearchForm } from "./SearchForm";
import './twitter-user-timeline.css';

const API_URL = 'http://localhost:8001/api';

export const TwitterUserTimeline = () => {
  const [tweets, setTweets] = useState([]);

  const getUserTweets = async searchValue => {
    try {
      const res = await fetch(`${API_URL}/user-timeline?screen_name=${searchValue}`);
      const data = await res.json();
      setTweets(data)
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <div>
      <h1 className="text-center">Twitter App - User timeline</h1>
      <SearchForm
        onSearch={value => getUserTweets(value)}
      />
      <div className="tweets">
        {tweets.map(tweet => (
            <TweetItem
              key={tweet.id_str}
              tweet={tweet}
            />
          )
        )}
      </div>
    </div>
  )
}

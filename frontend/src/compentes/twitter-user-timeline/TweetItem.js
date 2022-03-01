import React from 'react';
import moment from "moment";

export const TweetItem = props => {
  const { tweet } = props;
  return (
    <div className="tweet">
      <p><a target="_blank" href={`https://twitter.com/${tweet.user.screen_name}`}>{tweet.user.name}</a></p>
      <p className="text">{tweet.text}</p>
      <p className="time">{moment(tweet.created_at, 'ddd MMM D hh:mm:ss ZZ YYYY').format('YYYY-MM-DD hh:mm:ss A')}</p>
    </div>
  )
}

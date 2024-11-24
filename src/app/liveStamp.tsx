'use client'
import TimeAgo from "react-timeago"


type Props={
  time:string
}
function LiveStamp({time}:Props) {
  return <TimeAgo date ={time} />;
}

export default LiveStamp;

import { useState } from "react";
import { Tweet } from "./components/Tweet";

import './App.css';
import { AppRoutes } from "./pages/Router";

function App() {
  // const [tweets, setTweets] = useState<string[]>([]);
  // const [counter, setCounter] = useState(0);

  // function handle_add_tweet() {
  //   setCounter(counter+1);
  //   setTweets([...tweets, `tweeter ${counter}`]);
  // }

  return (
    <AppRoutes />
  );
    // <div id="container">
    //   {tweets.map((tweet) => {
    //     return <Tweet content={tweet} />;
    //   })}

    //   <button onClick={handle_add_tweet}
    //    style={{
    //      backgroundColor: '#8257e6',
    //      border: 0,
    //      padding: '0.8em',
    //      color: '#fff',
    //      borderRadius: '0.6em'
    //    }}
    //   >
    //     Add tweet
    //   </button>
    // </div>
}

export default App;

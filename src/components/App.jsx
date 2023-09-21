import Profile from "./profile";
import user from "../json/user.json";

import Statistics from "./statistics";
import data from "../json/data.json";

import Friendlist from "./friendlist";
import friends from "../json/friends.json";

import TransactionHistory from "./TransactionHistory";
import transactions from "../json/transactions.json";



export const App = () => {
  return (
    <div 

      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: 'black',
        alignContent:'center'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics
title="Upload stats"
stats={data}
/>

<Friendlist
friends={friends}></Friendlist>

<TransactionHistory
type = {transactions.type}
amount = {transactions.amount}
currency = {transactions.currency}
></TransactionHistory>


    </div>
  );
};

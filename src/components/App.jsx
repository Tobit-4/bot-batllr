import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setArmy(army.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    });
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy 
        army={army} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot} 
        onDischarge={dischargeBot} 
      />
    </div>
  );
}

export default App;
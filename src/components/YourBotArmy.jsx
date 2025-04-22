import React from 'react'
import BotCard from './BotCard'

function YourBotArmy({ army,onRelease,onDischarge }) {
  return (
    <div className='your-bot-army'>
      <h2>Your bot army</h2>
      <div className='army-grid'>
        {
            army.map(bot => (
                <BotCard 
                        key={bot.id}
                        bot={bot}
                        onRelease={()=>onRelease(bot.id)}
                        onDischarge={()=>onDischarge(bot.id)}
                        inArmy={true}
                />
            ))
        }
      </div>
    </div>
  )
}

export default YourBotArmy

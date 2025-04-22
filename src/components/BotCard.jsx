import React from 'react'

function BotCard({ bot, onEnlist, onRelease, onDischarge, inArmy = false }) {
  return (
    <div className='bot-card'>
      <img src={bot.avatar_url} alt={bot.name}/>
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>

      {
        inArmy ? (
            <>
                <button onClick={onRelease} className='release-btn'>Release</button>
                <button className='discharge-btn' onClick={onDischarge}><span>X</span></button>
            </>
        ) : (
            <button onClick={onEnlist} className='enlist'>Enlist</button>
        )
      }
    </div>
  )
}

export default BotCard

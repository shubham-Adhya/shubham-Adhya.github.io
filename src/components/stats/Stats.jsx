import React from 'react'
import './Stats.css'
import GitHubCalendar from 'react-github-calendar'

const Stats = () => {
  return (
    <section id='stats'>
      <h5>What I've been doing</h5>
      <h2>My Github Stats</h2>
      <div className='container stats__container'>
        <article className='stat'>
          <div className="stat__head">
            <h3>My Stats</h3>
          </div>
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=shubham-Adhya&count_private=true&include_all_commits=true&show_icons=true&hide_border=true&theme=algolia" alt="shubham-Adhya gitHub stats" id="github-stats-card"/>
        </article>
        
        <article className='stat'>
          <div className="stat__head">
            <h3>Streak Stats</h3>
          </div>
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com?user=shubham-Adhya&theme=algolia&hide_border=true&date_format=j%20M%5B%20Y%5D&background=050F2C&stroke=4DB5FF&ring=0195DD" alt="shubham-Adhya streak" id="github-streak-stats"/>
        </article>

        <article className='stat'>
          <div className="stat__head">
            <h3>Top Languages</h3>
          </div>
          <img alt="Shubham Adhya's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shubham-Adhya&langs_count=10&count_private=true&include_all_commits=true&layout=compact&hide_border=true&theme=algolia&hide_progress=true" id="github-top-langs"/>
        </article>

        <article className='stat git_hub'>
          <div className="stat__head">
            <h3>My GitHub Calender</h3>
          </div>
          <GitHubCalendar username="shubham-Adhya" class="react-activity-calendar"/>
        </article>


      </div>
    </section>
  )
}

export default Stats


// ![Shubham's GitHub stats](https://github-readme-stats.vercel.app/api?username=shubham-Adhya&count_private=true&show_icons=true&theme=radical&hide_border=true) 
// <img alt="Shubham Adhya's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shubham-Adhya&langs_count=8&count_private=true&layout=compact&theme=radical&hide_border=true&bg_color=0D1117" />


// <p align="left"><img align="center" src="https://github-readme-streak-stats.herokuapp.com?user=shubham-Adhya&theme=radical&hide_border=true&date_format=M%20j%5B%2C%20Y%5D" alt="shubham-Adhya" /></p>
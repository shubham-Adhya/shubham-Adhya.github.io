import React from 'react'
import './Skill.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaAws} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiRedis} from 'react-icons/si'
import {SiSocketdotio} from 'react-icons/si'
import {SiNetlify} from 'react-icons/si'
import {SiPassport} from 'react-icons/si'
import {SiRender} from 'react-icons/si'
import {TbBinaryTree} from 'react-icons/tb'
import {TbBrandTypescript} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {RiTeamLine} from 'react-icons/ri'
import {SlPuzzle} from 'react-icons/sl'
import {TbBulb} from 'react-icons/tb'
import {DiNpm} from 'react-icons/di'
import {SiPostman} from 'react-icons/si'


const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className='container skill__container'>

        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <AiFillHtml5 className='skill__details-icons'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skill__details'>
              <IoLogoCss3 className='skill__details-icons'/>
              <div>
                <h4>CSS3</h4>
              </div>
            </article>
            <article className='skill__details'>
              <TbBrandJavascript className='skill__details-icons'/>
              <div>
                <h4>JavaScript</h4>

              </div>
            </article>
            <article className='skill__details'>
              <TbBrandTypescript className='skill__details-icons'/>
              <div>
                <h4>TypeScript</h4>

              </div>
            </article>
            <article className='skill__details'>
              <FaBootstrap className='skill__details-icons'/>
              <div>
              <h4>Bootstrap</h4>

              </div>
            </article>
            <article className='skill__details'>
              <FaReact className='skill__details-icons'/>
              <div>
              <h4>React</h4>

              </div>
            </article>
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
            <div className="skill__content">
              <article className='skill__details'>
                <FaNodeJs className='skill__details-icons'/>
                <div>
                <h4>NodeJS</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiExpress className='skill__details-icons'/>
                <div>
                <h4>Express</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiMongodb className='skill__details-icons'/>
                <div>
                <h4>MongoDB</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiPassport className='skill__details-icons'/>
                <div>
                <h4>OAuth</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiSocketdotio className='skill__details-icons'/>
                <div>
                <h4>Socket.io</h4>

                </div>
              </article>
              <article className='skill__details'>
                <GrMysql className='skill__details-icons'/>
                <div>
                <h4>MySQL</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiRedis className='skill__details-icons'/>
                <div>
                <h4>Redis</h4>

                </div>
              </article>
              
              <article className='skill__details'>
                <TbBinaryTree className='skill__details-icons'/>
                <div>
                <h4>DS-Algo</h4>

                </div>
              </article>
              
              <article className='skill__details'>
                <FaAws className='skill__details-icons'/>
                <div>
                <h4>AWS</h4>

                </div>
              </article>
            </div>
        </div>

        <div className="soft__skill">
          <h3>Other Skills</h3>
            <div className="skill__content">
              
              <article className='skill__details'>
                <RiTeamLine className='skill__details-icons'/>
                <div>
                <h4>Team work</h4>

                </div>
              </article>
              
              <article className='skill__details'>
                <TbBulb className='skill__details-icons'/>
                <div>
                <h4>Self Learn</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SlPuzzle className='skill__details-icons'/>
                <div>
                <h4>Adaptable</h4>

                </div>
              </article>
              <article className='skill__details'>
                <BsGit className='skill__details-icons'/>
                <div>
                <h4>Git</h4>

                </div>
              </article>
              <article className='skill__details'>
                <DiNpm className='skill__details-icons'/>
                <div>
                <h4>npm</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiNetlify className='skill__details-icons'/>
                <div>
                <h4>Netlify</h4>

                </div>
              </article>
              <article className='skill__details'>
                <SiRender className='skill__details-icons'/>
                <div>
                <h4>render</h4>

                </div>
              </article>

              <article className='skill__details'>
                <SiPostman className='skill__details-icons'/>
                <div>
                <h4>Postman</h4>

                </div>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Skill
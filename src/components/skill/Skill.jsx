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
    <section id='skills'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className='container skill__container'>

        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className='skill__details skills-card'>
              <AiFillHtml5 className='skill__details-icons skills-card-img'/>
              <div>
                <h4 className='skills-card-name'>HTML</h4>
              </div>
            </article>
            <article className='skill__details skills-card'>
              <IoLogoCss3 className='skill__details-icons skills-card-img'/>
              <div>
                <h4 className='skills-card-name'>CSS3</h4>
              </div>
            </article>
            <article className='skill__details skills-card'>
              <TbBrandJavascript className='skill__details-icons skills-card-img'/>
              <div>
                <h4 className='skills-card-name'>JavaScript</h4>

              </div>
            </article>
            <article className='skill__details skills-card'>
              <TbBrandTypescript className='skill__details-icons skills-card-img'/>
              <div>
                <h4 className='skills-card-name'>TypeScript</h4>

              </div>
            </article>
            <article className='skill__details skills-card'>
              <FaBootstrap className='skill__details-icons skills-card-img'/>
              <div>
              <h4 className='skills-card-name'>Bootstrap</h4>

              </div>
            </article>
            <article className='skill__details skills-card'>
              <FaReact className='skill__details-icons skills-card-img'/>
              <div>
              <h4 className='skills-card-name'>React</h4>

              </div>
            </article>
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
            <div className="skill__content">
              <article className='skill__details skills-card'>
                <FaNodeJs className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>NodeJS</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiExpress className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Express</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiMongodb className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>MongoDB</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiPassport className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>OAuth</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiSocketdotio className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Socket.io</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <GrMysql className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>MySQL</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiRedis className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Redis</h4>

                </div>
              </article>
              
              <article className='skill__details skills-card'>
                <TbBinaryTree className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>DS-Algo</h4>

                </div>
              </article>
              
              <article className='skill__details skills-card'>
                <FaAws className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>AWS</h4>

                </div>
              </article>
            </div>
        </div>

        <div className="soft__skill">
          <h3>Other Skills</h3>
            <div className="skill__content">
              
              <article className='skill__details skills-card'>
                <RiTeamLine className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Team work</h4>

                </div>
              </article>
              
              <article className='skill__details skills-card'>
                <TbBulb className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Self Learn</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SlPuzzle className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Adaptable</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <BsGit className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Git</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <DiNpm className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>npm</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiNetlify className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Netlify</h4>

                </div>
              </article>
              <article className='skill__details skills-card'>
                <SiRender className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>render</h4>

                </div>
              </article>

              <article className='skill__details skills-card'>
                <SiPostman className='skill__details-icons skills-card-img'/>
                <div>
                <h4 className='skills-card-name'>Postman</h4>

                </div>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Skill
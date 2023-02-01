import { React, useRef, useEffect, useState } from 'react'
import servicePlanet from '../../assets/Asset 5@30 1.png'
import './Animation.css'
import gsap from 'gsap'
import rocket from '../../assets/svg/rocket.svg'

function ServiceSection() {
  const [serviceState, setServiceState] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const myRef2 = useRef()
  useEffect(() => {
    // document.querySelector('.div3').addEventListener('click',()=>{
    //   // document.querySelector('.div3').style.transform='rotateY(180deg)'
    //   setServiceState(!serviceState)
    //   console.log('hey');
    // })

    const motion3 = (rocket, path) => {
      gsap.timeline().fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
      .to('.rocketPath3',{opacity:1,duration:1})
        .fromTo(path, { opacity: 0 }, { opacity: 1 })
        .fromTo(path, { strokeDashoffset: 1200 }, { strokeDashoffset: 0, duration: 60 })
        .to(rocket, {
          motionPath: {
  
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true
          },
          duration: 30,
          repeat: 0,
          ease: 'none'
        }, 3)
        .to(rocket, { opacity: 0, duration: 1 }, 35)
  
    }


    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        document.querySelector('.div1').style.opacity = '1'
        document.querySelector('.div2').style.opacity = '1'
        document.querySelector('.front').style.animation = 'div3 1s ease 1s  forwards, shake 0.82s cubic-bezier(.36,.07,.19,.97) 2s both'
        document.querySelector('.back').style.animation = 'div3 1s ease 1s  forwards'
        document.querySelector('.div3').querySelector('h1').style.transform = 'translateY(0)'
        document.querySelector('.div3').querySelector('h1').style.opacity = '1'

        const rocket = document.querySelector(".rocket3");
        const path = document.querySelector("#pathWhite3");
        motion3(rocket, path);

        observer.unobserve(myRef2.current)
      }
    },
      {
        threshold: 0.5,
      }
    )
    observer.observe(myRef2.current)
  }, [loaded])




  return (
    <section className='servicesSection' onLoad={() => setLoaded(true)} ref={myRef2}>
      <img className='rocket3' src={rocket} alt="" />
      <svg className='rocketPath3' viewBox="0 0 780 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='pathWhite3' d="M779.285 0.999703C560.86 237.303 254.619 282.082 0.0489379 298.705"  strokeWidth='0.4' />
        <path id='pathBlack3' d="M779.285 0.999703C560.86 237.303 254.619 282.082 0.0489379 298.705" stroke="black" strokeWidth='1'  />
      </svg>

      <div className='div1'><div className='circle1'></div></div>
      <div className='div2'><div className='circle2'></div></div>
      <div className='div3' onClick={() => setServiceState(!serviceState)} style={{ transform: serviceState ? 'rotateY(180deg)' : 'rotateY(0)' }}>

        <div className='front' >
          <h1 className='frontH1'><span style={{ color: '#6287e4' }}>COME </span>FULL <br />CIRCLE, <span style={{ color: '#ea1717' }}>GO</span> <br /><span style={{ color: '#93ed21' }}> THE <br /> DISTANCE</span></h1>
        </div>
        <div className='back'>
          <h2 style={{ color: 'white !important' }}>Services</h2>
        </div>
      </div>
      <div className='servicePlanet'>
        <img src={servicePlanet} alt="" />
      </div>



    </section>
  )
}

export default ServiceSection
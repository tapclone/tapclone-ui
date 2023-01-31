import { React, useRef, useEffect, useState } from 'react'
import servicePlanet from '../../assets/Asset 5@30 1.png'
import './Animation.css'

function ServiceSection() {
  const [serviceState, setServiceState] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const myRef = useRef()
  useEffect(() => {
    // document.querySelector('.div3').addEventListener('click',()=>{
    //   // document.querySelector('.div3').style.transform='rotateY(180deg)'
    //   setServiceState(!serviceState)
    //   console.log('hey');
    // })



    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        document.querySelector('.div1').style.opacity = '1'
        document.querySelector('.div2').style.opacity = '1'
        document.querySelector('.front').style.animation = 'div3 1s ease 1s  forwards, shake 0.82s cubic-bezier(.36,.07,.19,.97) 2s both'
        document.querySelector('.back').style.animation = 'div3 1s ease 1s  forwards'
        document.querySelector('.div3').querySelector('h1').style.transform = 'translateY(0)'
        document.querySelector('.div3').querySelector('h1').style.opacity = '1'
        observer.unobserve(myRef.current)
      }
    },
      {
        threshold: 0.5,
      }
    )
    observer.observe(myRef.current)
  }, [loaded])




  return (
    <section className='servicesSection' onLoad={() => setLoaded(true)} ref={myRef}>
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
        <img  src={servicePlanet} alt="" />
      </div>



    </section>
  )
}

export default ServiceSection
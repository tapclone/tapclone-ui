import { React, useEffect,useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import './Home.css'
import ServiceSection from './ServiceSection'
import circle from '../../assets/Asset-2_300x-1X.webp'
import layer from '../../assets/Layer 3.png'
import layer2 from '../../assets/Layer 2.png'
import puzzle from '../../assets/svg/Asset 1 10.svg'
import ufo from '../../assets/Layer 4.png'
import ufoPlanet from '../../assets/Asset 4@3002 28.png'
import NavBar from './NavBar'


function HomeMain() {
 
  const [loaded,setLoaded]=useState(false)
  const myRef=useRef()
  useEffect(()=>{

  
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      document.querySelector('.puzzlePop').style.opacity='1';
      document.querySelector('.Contents').classList.add('contentPop')
      document.querySelector('.shadow').style.top='13px'
      observer.unobserve(myRef.current)
    }
  },
  {
    threshold:0.5,
  }
  )
  observer.observe(myRef.current)
  },[loaded])



  return (
    <div className='homeMain' onLoad={()=>setLoaded(true)}>
      <NavBar></NavBar>
      <div className="header">
        <div className='logoSection'>
          <h1 style={{ color: 'white', margin: "0" }}>LOGO</h1>
        </div>
        <div className='dateSection'>
          <p style={{ margin: '0' }}> Mon 22.07</p>
        </div>
      </div>


      <section className="section1">
        <div className='heroText'>
          <p style={{ margin: '0' }}>A<span style={{ color: '#47ff05' }}> GOOD START </span><br />IS THE BEST <br /><span style={{ color: '#8e64e9' }}> RECIPE FOR </span><br /> SUCCESS.</p>
        </div>
        <div className='quoteBtn'>
          <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class='path1' d="M2 2L25 25L2 48" stroke="white" stroke-width="3" />
            <path class='path2' d="M25 2L48 25L25 48" stroke="white" stroke-width="3" />
            <path class='path3' d="M48 2L71 25L48 48" stroke="white" stroke-width="3" />
            <path class='path4' d="M71 2L94 25L71 48" stroke="white" stroke-width="3" />
            <path class='path5' d="M94 2L117 25L94 48" stroke="white" stroke-width="3" />
          </svg>

        </div>

        <div className='circle'>
          <div className="circleBorder">
            <div className='circleBorderCircle'></div>
          </div>
          <img className='mainCircle' src={circle} alt="" />
        </div><br />
        <img className='layer' src={layer} alt="" />
      </section>
      <section className='section2' ref={myRef}>
        <div className='puzzlePop'>
          <img className='puzzle' src={puzzle} alt="" />
        </div>
        <div className='Contents'>
          <h1 style={{ margin: '0', zIndex: '2' }}>Straight <br /> talk <br /><span style={{ color: '#aeef24' }}> Direct <br /> results.</span></h1>
          <h1 className='shadow' style={{ margin: '0', zIndex: '1' }}>Straight <br /> talk <br /><span > Direct <br /> results.</span></h1>
          <p style={{ textAlign: 'justify' }}>it is tough to make things simple. We aren't different just for the sake of being different. We are here to make a difference to brands.</p>
        </div>
      </section>

      <section className='section3'>
        <div className='ufo'>
          <img src={ufo} alt="" />
        </div>
        <div className='ufoPlanet'>
          <img src={ufoPlanet} alt="" />
        </div>
      </section>


      <ServiceSection></ServiceSection>
      <div style={{ height: '100vh' }}></div>
      <section className='brandSection'>
        <h1>We believe in brands. <br />
          brands <span style={{ color: '#70ff00' }}>believe in us</span>
        </h1>
        <div className='brandSectionUfo'>
          <img src={ufo} alt="" />
        </div>
        <div className='brandSectionLayer'>
          <img src={layer2} alt="" />
        </div>

      </section>
      <Footer></Footer>
    </div>
  )

}

export default HomeMain
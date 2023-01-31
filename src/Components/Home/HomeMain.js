import { React, useEffect, useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import './Home.css'
import './Animation.css'
import ServiceSection from './ServiceSection'
import circle from '../../assets/Asset-2_300x-1X.webp'
import layer from '../../assets/Layer 3.png'
import layer2 from '../../assets/Layer 2.png'
import puzzle from '../../assets/svg/Asset 1 10.svg'
import ufo from '../../assets/svg/ufo.svg'
import ufoPlanet from '../../assets/Asset 4@3002 28.png'
import poster1 from '../../assets/poster1.jpeg'
import poster2 from '../../assets/poster2.jpeg'
import NavBar from './NavBar'
import rocket from '../../assets/svg/rocket.svg'

import poster3 from '../../assets/poster3.jpeg'
import poster4 from '../../assets/poster4.jpeg'
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ufo2 from '../../assets/svg/Layer 4.svg'
import ufoLight from '../../assets/svg/light.svg'
import Slider from 'react-slick'
import brandLogo1 from '../../assets/logo1.png'
import brandLogo2 from '../../assets/logo2.png'
import brandLogo3 from '../../assets/logo3.png'
import ProjectsSlider from './ProjectsSlider'
import ProjectSlider2 from './ProjectSlider2'
import ProjectSlider from './ProjectsSlider'




function HomeMain() {

  const [imageIndex, setImageIndex] = useState(0);

  const images=[brandLogo1,brandLogo2,brandLogo3,brandLogo1,brandLogo2,brandLogo3]
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    centerMode:true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  gsap.registerPlugin(MotionPathPlugin);

  const motion = (rocket, path) => {
    gsap.timeline().fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
      .fromTo(path,{opacity:0},{opacity:1})
      .fromTo(path,{strokeDashoffset:1200},{strokeDashoffset:0,duration:135})
      .to(rocket, {
        motionPath: {

          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 25,
        repeat: 0,
        ease: 'none'
      }, 3)
      .to(rocket, { opacity: 0, duration: 1 },28)

  }

  useEffect(() => {
    const rocket = document.querySelector(".rocket");
    const path = document.querySelector("#pathWhite");

    motion(rocket, path);

    window.addEventListener("resize", () => {
      motion(rocket, path);
    });
  }, []);



  const [loaded, setLoaded] = useState(false)
  const myRef = useRef()
  useEffect(() => {


    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        document.querySelector('.puzzlePop').style.opacity = '1';
        document.querySelector('.Contents').classList.add('contentPop')
        document.querySelector('.shadow').style.top = '13px'
        observer.unobserve(myRef.current)
      }
    },
      {
        threshold: 0.5,
      }
    )
    observer.observe(myRef.current)
  }, [loaded])

  function addStar() {
    var s = document.createElement('div')
    s.className = 'star'
    s.style.setProperty('--size', Math.random() * 2 + 2 + 'vmin')
    s.style.left = Math.floor(Math.random() * 100) + '%'
    s.style.top = Math.floor(Math.random() * 100) + '%'
    s.onanimationend = function () { this.remove()}
    document.body.appendChild(s)
  }
  let timeout= setInterval(addStar,1000)

  window.addEventListener('beforeunload',()=>{
    clearInterval(timeout)
  })


  return (
    <div className='homeMain' onLoad={() => setLoaded(true)}>
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

        <img className='rocket' src={rocket} alt="" />
        <svg className='rocketPath' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <path id='pathWhite' d="M282.426989,15.10574Q27.643505,284.994965,27.643505,284.994965" fill="none" stroke-width="0.4" />
          <path id='pathBlack' d="M282.426989,15.10574Q27.643505,284.994965,27.643505,284.994965" fill="none" stroke="black" stroke-width="1" />


        </svg>







        {/* <svg className='rocketPath'  viewBox="0 0 754 899" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite' d="M898 1L753 1" stroke="white"  />
          
        </svg> */}




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


        {/* <img style={{top:'10%',left:'10%',width:'2rem'}} className='star' src={star} alt="" />
      <img style={{top:'-3%',left:'30%',width:'1.2rem'}} className='star' src={star} alt="" />
      <img style={{top:'2%',left:'46%',width:'1rem'}} className='star' src={star} alt="" />
      <img style={{bottom:'15%',left:'65%',width:'1.3rem'}} className='star' src={star} alt="" /> */}

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
          <img src={ufo2} alt="" />
          <img src={ufoLight} alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className='logoSlider'>

            <Slider {...settings}>
              {images.map((item,idx)=>(
                <div className={ idx === imageIndex ? "brandSliderDiv activeSlide" : "brandSliderDiv"} >
                <img src={item} alt="" />
              </div>
              ))}
              
              

            </Slider>



          </div>
        </div>

        <div className='brandSectionLayer'>
          <img src={layer2} alt="" />
        </div>

      </section>

      <section className='projectSection' style={{marginLeft:'6%'}}>
        <h1>LATEST <br /><span style={{ color: '#ae46de' }}>PROJECTS</span></h1>
        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', marginTop: '10rem',paddingLeft:"10%" }}>
          <div style={{width:'65%',height:'100%',overflowX:'hidden',perspective:'1000px'}}>

           <ProjectSlider></ProjectSlider>      
          </div>

        </div>

        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10rem' }}>
          <div style={{width:'65%',height:'100%',overflowX:'hidden',perspective:'1000px'}}>

           <ProjectSlider2></ProjectSlider2>      
          </div>

        </div>

        <div style={{ aspectRatio: "1/0.3", display: 'flex', justifyContent: "center", marginTop: '10rem', marginLeft: '6%' }}>
          <div style={{ width: '60%', height: '100%', backgroundColor: '#bbbaba', zIndex: '2' }}></div>
        </div>
      </section>

      <section className='packagesSection' style={{ marginLeft: '6%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10rem' }}>
        <h1 style={{ color: 'white', fontSize: '2.5rem', textAlign: 'center' }}><span style={{ color: 'transparent', WebkitTextStroke: ' 1px rgb(255 255 255 / 100%)' }}>OUR</span> <br /> PACKAGES</h1>
        <div style={{ width: '40%', aspectRatio: '1/0.5', background: '#bbbaba' }}>

        </div>
        <div style={{ background: '#96f64a', width: '40%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.3rem' }}><span style={{ color: 'black', fontWeight: '800' }}>BUY NOW</span></div>
      </section>

      <section className='contactSection' style={{ marginTop: '10rem', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ color: '#70ff00', fontWeight: '3.5rem', textAlign: 'center' }}><span style={{ color: 'transparent', WebkitTextStroke: ' 1px rgb(255 255 255 / 100%)' }}>we always seek for <br />new adventures.</span> <br />Lets's Do Business</h1>
        <div className='contactButton'><span>CONTACT</span></div>
      </section>
      <Footer></Footer>
    </div>
  )

}

export default HomeMain
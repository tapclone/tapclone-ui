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
import NavBar from './NavBar'
import rocket from '../../assets/svg/rocket.svg'
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ufo2 from '../../assets/svg/Layer 4.svg'
import ufoLight from '../../assets/svg/light.svg'
import Slider from 'react-slick'
import brandLogo1 from '../../assets/logo1.png'
import brandLogo2 from '../../assets/logo2.png'
import brandLogo3 from '../../assets/logo3.png'
import ProjectSlider2 from './ProjectSlider2'
import ProjectSlider from './ProjectsSlider'
import planet1 from '../../assets/svg/globe 2.svg'
import planet2 from '../../assets/svg/globe 3.svg'
import planet3 from '../../assets/svg/globe 4.svg'
import orangePlanet from '../../assets/svg/globe 7.svg'
import violetCircle from '../../assets/svg/globe 6.svg'
import planet6 from '../../assets/svg/globe 5.svg'
import planet7 from '../../assets/svg/globe.svg'
import planet8 from '../../assets/svg/Ellipse 5.svg'
import planet9 from '../../assets/svg/Ellipse 6.svg'
import button from '../../assets/svg/right arrow.svg'
import button2 from '../../assets/svg/right arrow 2.svg'



function HomeMain() {

  const [imageIndex, setImageIndex] = useState(0);

  const images = [brandLogo1, brandLogo2, brandLogo3, brandLogo1, brandLogo2, brandLogo3]
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    centerMode: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  gsap.registerPlugin(MotionPathPlugin);


// path1
  const motion = (rocket, path) => {
    gsap.timeline().fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
      .fromTo(path, { opacity: 0 }, { opacity: 1 })
      .fromTo(path, { strokeDashoffset: 1200 }, { strokeDashoffset: 0, duration: 135 })
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
      .to(rocket, { opacity: 0, duration: 1 }, 28)

  }



  useEffect(() => {
    const rocket = document.querySelector(".rocket");
    const path = document.querySelector("#pathWhite");

    motion(rocket, path);

    // window.addEventListener("resize", () => {
    //   motion(rocket, path);
    // });
  }, []);



  // path2
  const motion2 = (rocket, path) => {
    gsap.timeline().fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
    .to('.rocketPath2',{opacity:1,duration:1})
      .fromTo(path, { opacity: 0 }, { opacity: 1 },1)
      .fromTo(path, { strokeDashoffset: 1200 }, { strokeDashoffset: 0, duration: 45 })
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
      .to(rocket, { opacity: 0, duration: 1 }, 33)

  }

  
  const [loaded, setLoaded] = useState(false)
  const myRef = useRef()
  useEffect(() => {


    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        document.querySelector('.puzzlePop').style.opacity = '1';
        document.querySelector('.Contents').classList.add('contentPop')
        document.querySelector('.shadow').style.top = '13px'
        const rocket = document.querySelector(".rocket2");
        const path = document.querySelector("#pathWhite2");
        motion2(rocket, path);

        observer.unobserve(myRef.current)
      }
    },
      {
        threshold: 0.5,
      }
    )
    observer.observe(myRef.current)
  }, [loaded])


  // path4
  const motion4 = (rocket, path) => {
    gsap.timeline().fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
    .to('.rocketPath4',{opacity:1,duration:1})
      .fromTo(path, { opacity: 0 }, { opacity: 1 },1)
      .fromTo(path, { strokeDashoffset: 5500 }, { strokeDashoffset: 0, duration: 45 })
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
      .to(rocket, { opacity: 0, duration: 1 }, 33)

  }

  
  
  useEffect(() => {
    const myRefLong=document.querySelector('.projectSection')
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        const rocket = document.querySelector(".rocket4");
        const path = document.querySelector("#pathWhite4");
        motion4(rocket, path);
        observer.unobserve(myRefLong)
      }
    },
      {
        threshold: 0.5,
      }
    )
    observer.observe(myRefLong)
  }, [loaded])


  // useEffect(() => {

  //   window.addEventListener("resize", () => {
  //     motion2(rocket, path);
  //   });
  // }, []);


  

  // starAnimation
  function addStar() {
    var s = document.createElement('div')
    s.className = 'star'
    s.style.setProperty('--size', Math.random() * 2 + 2 + 'vmin')
    s.style.left = Math.floor(Math.random() * 100) + '%'
    s.style.top = Math.floor(Math.random() * 100) + '%'
    s.onanimationend = function () { this.remove() }
    document.body.appendChild(s)
  }
  let timeout = setInterval(addStar, 2000)

  window.addEventListener('beforeunload', () => {
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

      <section className='section3' style={{position:'relative'}} >
      <img className='rocket2' src={rocket} alt="" />
        <svg className='rocketPath2' viewBox="0 0 606 852" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite2' d="M605 850.5C-53.0002 680.5 3.00012 132 3.00012 0" strokeWidth='1'  />
          <path id='pathBlack2' d="M605 850.5C-53.0002 680.5 3.00012 132 3.00012 0" stroke="black" strokeWidth='1'  />
        </svg>

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='logoSlider'>

            <Slider {...settings}>
              {images.map((item, idx) => (
                <div className={idx === imageIndex ? "brandSliderDiv activeSlide" : "brandSliderDiv"} >
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

      <section className='projectSection' style={{ marginLeft: '6%' }} >
        <img className='orangePlanet' src={orangePlanet} alt="" />
        <img className='violetCircle' src={violetCircle} alt="" />
        <div className='violetSmallCircle' style={{ background: '#b291e8' }}></div>
        <svg className='rocketPath4' style={{ position: 'absolute', width: '100%' }} viewBox="0 300 1440 2311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" strokeWidth='0.4'  />
          <path id='pathBlack4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" stroke="black" strokeWidth='1' />
        </svg>
        <img className='rocket4' src={rocket} alt="" />

        <h1>LATEST <br /><span style={{ color: '#ae46de' }}>PROJECTS</span></h1>
        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', marginTop: '20%', paddingLeft: "10%" }}>
          <div style={{ width: '75%', height: '100%', overflowX: 'hidden', perspective: '1000px' }}>

            <ProjectSlider></ProjectSlider>
          </div>

        </div>

        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '30%' }}>
          <div style={{ width: '75%', height: '100%', overflowX: 'hidden', perspective: '1000px', marginRight: "5%" }}>

            <ProjectSlider2></ProjectSlider2>
          </div>

        </div>

        <div style={{ aspectRatio: "1/0.6", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginTop: '30%', position: 'relative' }}>
          <img className='planet7' src={planet7} alt="" />
          <div style={{ width: '60%', height: '50%', backgroundColor: '#bbbaba', zIndex: '2' }}></div>
          <img style={{ width: "3rem", marginTop: '5%' }} src={button2} alt="" />
        </div>
      </section>

      <section className='packagesSection' style={{ marginLeft: '6%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <img className='planet1' src={planet1} alt="" />
        <h1 style={{ color: 'white', fontSize: '2.5rem', textAlign: 'center' }}><span style={{ color: 'transparent', WebkitTextStroke: ' 1px rgb(255 255 255 / 100%)' }}>OUR</span> <br /> PACKAGES</h1>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
          <svg className='warpedGrid' width="1440" height="298" viewBox="0 0 1440 298" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-32 1C172.667 47 1014 107 1442 1" stroke="white" stroke-width="2" />
            <path d="M-32 296.072C172.667 250.072 1014 190.072 1442 296.072" stroke="white" stroke-width="2" />
            <path d="M-4 145H1450" stroke="white" stroke-width="2" />
          </svg>

          <div style={{ width: '40%', aspectRatio: '1/0.6', background: '#bbbaba' }}>

          </div>
          <div style={{ background: '#96f64a', width: '40%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.3rem' }}><span style={{ color: 'black', fontWeight: '800' }}>BUY NOW</span></div>
          <img style={{ width: '3rem', marginTop: '5%' }} src={button} alt="" />
        </div>

      </section>

      <section className='contactSection' style={{ marginTop: '10rem', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ color: '#70ff00', fontWeight: '3.5rem', textAlign: 'center' }}><span style={{ color: 'transparent', WebkitTextStroke: ' 1px rgb(255 255 255 / 100%)' }}>we always seek for <br />new adventures.</span> <br />Lets's Do Business</h1>
        <div className='contactButton'><span>CONTACT</span></div>
      </section>
      <Footer></Footer>
      {/* <section style={{ width: '100%', height: '200vh' }}>
        <img src={planet2} alt="" />
        <img src={planet3} alt="" />
        <img src={planet6} alt="" />
        <img src={planet8} alt="" />
        <img src={planet9} alt="" />
      </section> */}
    </div>
  )

}

export default HomeMain
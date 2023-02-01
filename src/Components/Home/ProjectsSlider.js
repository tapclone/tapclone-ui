import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Slider.css'
import poster3 from '../../assets/poster3.jpeg'
import poster4 from '../../assets/poster4.jpeg'
import poster1 from '../../assets/poster1.jpeg'
import poster2 from '../../assets/poster2.jpeg'
import button from '../../assets/svg/right arrow.svg'
import gsap from 'gsap'

function ProjectSlider() {
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const array = [{ image1: poster1, image2: poster1 }, { image1: poster2, image2: poster2 }, { image1: poster3, image2: poster3 }, { image1: poster4, image2: poster4 }]

  function change2() {
    const img1 = document.querySelector('.Fposter1')
    const img2 = document.querySelector('.Fposter2')
    const posterContainer=document.querySelector('FposterContainer')
    
    gsap.timeline().to(img2,{translateX:'-11%',duration:0.5})
    .to(img1,{rotateY:180,translateX:'-11%',filter:'blur(3px)',duration:1},0)

    // .to(img1,{filter: "blur(3px)",duration:0.2})
    // .to(img2,{filter:'blur(3px)',duration:0.2})

    const timeout = setTimeout(() => {
      const isLastSlide = currentIndex2 === array.length - 1
      isLastSlide ? setCurrentIndex2(0,changeBack2()) : setCurrentIndex2(currentIndex2 + 1,changeBack2())

      clearTimeout(timeout)
    },1000)

    function changeBack2(){
      gsap.timeline().to(img2,{translateX:0,duration:0.5})
      // .to(img1,{filter:'blur(0px)',duration:0.2})
      // .to(img2,{filter:'blur(0px)',duration:0.2},0.5)
      .to(img1,{rotateY:0,translateX:0,filter:'blur(0px)',duration:1},0)
    }
  }

  return (
    <div  style={{ display: 'flex',width:'100%', height: '100%', transformStyle: 'preserve-3d',columnGap:'1rem',alignItems:'center' }}>
      <div className='FposterContainer' style={{height:'100%',width:'100%',display:'flex',columnGap:'1rem'}}>
        <div className='Fposter1' style={{background:`url(${array[currentIndex2].image1})`,aspectRatio:'1',left:'0',transformOrigin:'right center',zIndex:'2'}}></div>
        <div className='Fposter2' style={{background:`url(${array[currentIndex2].image2})`,aspectRatio:"1",zIndex:'0'}}></div>
      </div>
      <img className='slideBtn' onClick={change2} src={button} style={{ width: '5%',cursor:'pointer',position:'absolute',right:'0'}} alt="" />
    </div>

  )
}

export default ProjectSlider
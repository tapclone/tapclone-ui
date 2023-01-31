import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Slider.css'
import poster3 from '../../assets/poster3.jpeg'
import poster4 from '../../assets/poster4.jpeg'
import poster1 from '../../assets/poster1.jpeg'
import poster2 from '../../assets/poster2.jpeg'
import button from '../../assets/svg/left arrow.svg'
import gsap from 'gsap'

function ProjectSlider2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const array = [{ image1: poster1, image2: poster1 }, { image1: poster2, image2: poster2 }, { image1: poster3, image2: poster3 }, { image1: poster4, image2: poster4 }]

  function change1() {
    const img1 = document.querySelector('.poster1')
    const img2 = document.querySelector('.poster2')
    const posterContainer=document.querySelector('.posterContainer')
    
    gsap.timeline().to(img1,{translateX:'10%',duration:0.5})
    .to(img2,{rotateY:-180,translateX:'1%',filter:'blur(3px)',duration:1},0)

    // .to(img1,{filter: "blur(3px)",duration:0.2})
    // .to(img2,{filter:'blur(3px)',duration:0.2})

    const timeout = setTimeout(() => {
      const isLastSlide = currentIndex === array.length - 1
      isLastSlide ? setCurrentIndex(0,changeBack1()) : setCurrentIndex(currentIndex + 1,changeBack1())

      clearTimeout(timeout)
    },1000)

    function changeBack1(){
      gsap.timeline().to(img1,{translateX:0,duration:0.5})
      // .to(img1,{filter:'blur(0px)',duration:0.2})
      // .to(img2,{filter:'blur(0px)',duration:0.2},0.5)
      .to(img2,{rotateY:0,translateX:0,filter:'blur(0px)',duration:1},0)
    }
  }

  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center', transformStyle: 'preserve-3d' }}>
      <img onClick={change1} src={button} style={{ width: '5%',cursor:'pointer' }} alt="" />
      <div className='posterContainer' style={{height:'100%',display:'flex',columnGap:'1rem'}}>
        <img className='poster1' src={array[currentIndex].image1} alt="" />
        <img className='poster2' src={array[currentIndex].image2} alt="" />
      </div>
    </div>

  )
}

export default ProjectSlider2
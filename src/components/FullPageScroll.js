
import  Fullpage,{FullPageSections , FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import React from 'react'
import HeroSlider from '../Slides/HeroSlider'
import AboutSlider from '../Slides/AboutSlider'

const FullPageScroll = () => {
  return (
    <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection  className="slide-1-test">
                <HeroSlider/>
            </FullpageSection>

            <FullpageSection >
                <AboutSlider/>
            </FullpageSection>


            <FullpageSection>
                
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll
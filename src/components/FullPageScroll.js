
import  Fullpage,{FullPageSections , FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import React from 'react'

const FullPageScroll = () => {
  return (
    <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection style={{height:'100vh'}}>
                <h1>
                    Section 1
                </h1>
            </FullpageSection>

            <FullpageSection style={{height:'100vh'}}>
                <h1>
                    Section 2
                </h1>
            </FullpageSection>


            <FullpageSection style={{height:'100vh'}}>
                <h1>
                    Section 3
                </h1>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll
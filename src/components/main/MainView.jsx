import React from 'react'
import { useEffect, useState } from 'react'
import './MainView.css'

import './MainView.css'
import bgMobile from '../../assets/images/image-web-3-mobile.jpg'
import bgDesktop from '../../assets/images/image-web-3-desktop.jpg'
import Info from '../mainInfo/Info'
const MainView = () => {
    const [breakpoint, setBreakpoint] = useState(false);

    useEffect(() => {

    }, [])
    return (
        <div className='grid-container'>
            <main className='grid-container_main'>
                <div className="grid-container_image">
                    {/* <img src={bgDesktop} alt="" className='grid-container_bg' /> */}
                </div>
                <div className="grid-container_info">
                    <div className="grid-container_infoTitle">
                        <h2 className="infoTitle">The brigth Future of Web 3.0</h2>
                    </div>
                    <div className="grid-container_infoContent">
                        <p className="infoParagraph">
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back
                            into the hands of the people. But is it really fulfilling its promise?
                        </p>
                        <a href="#" className='grid-container_linkmore'>Read more</a>

                    </div>
                </div>
            </main>
            <aside className='grid-container_aside'>
                <h2 className='grid-container_asideTitle'>New</h2>
                <Info
                    title="Hydrogen VS Electric Cars"
                    paragraph="Will hydrogen-fueled cars ever catch up to EVs?"
                />
                <hr />
                <Info
                    title="The Downsides of AI Artistry"
                    paragraph="What are the possible adverse effects of on-demand AI image generation?"
                />
                <hr />
                <Info
                    title="Is VC Funding Drying Up?"
                    paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means."
                />
            </aside>

        </div>
    )
}

export default MainView
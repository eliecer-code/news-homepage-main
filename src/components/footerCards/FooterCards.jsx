import React from 'react'
import './FooterCards.css'
import Card from '../cards/Card'
import gaming from '../../assets/images/image-gaming-growth.jpg'
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg'

const FooterCards = () => {
    return (
        <div className='container-cards_footer'>
            <Card
                image={retro}
                number="01"
                title="Reviving Retro PCs"
                paragraph="What happens when old PCs are given modern upgrade?"
            />
            <Card
                image={laptops}
                number="02"
                title="Top 10 Laptops of 2023"
                paragraph="Our best picks for various needs and budgets"
            />
            <Card
                image={gaming}
                number="03"
                title="The Growth of Gaming"
                paragraph="How the pandemic has sparked fresh opportunities"
            />
        </div>
    )
}

export default FooterCards
import React from 'react'
import FlashSaleCard from '../components/FlashSaleCard'
const FlashSaleCardRightSection = ({ items = [] }) => {

    return (
        <section className="__flashsale-section-r">
            <div className='container'>
                <div className="grid">
                    <div className="flascard-background" id="item-0"></div>
                    <div className="flashcard-content" id="item-1">
                        <h2 className='h2-flashsale'>2 FOR USD $49</h2>
                        <button className="btn-card-theme">FLASH SALE</button>
                    </div>
                    <div className="flashcardsrow" id="item-2">
                        {
                            items.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                    <div className="flashcardsrow" id="item-3">
                        {
                            items.map(product => <FlashSaleCard key={product.articleNumber} item={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashSaleCardRightSection
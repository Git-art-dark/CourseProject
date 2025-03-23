import iconCart from '/plus.svg'

export default function GoodsSection() {
    function GoodsNew({ className }) {

        return (
            <div className={className}>
                <h4>Посудомоечная машина CANDY CP 6F51LS-08</h4>
                <img src="product_1.png" alt="product" />
                <h4>23 999 руб.</h4>
                <img src={iconCart} alt="cart" className='cart-buy' />
            </div>
        )
    }
    
    
    return (
        <section className="inline">
            <GoodsNew className={'margin-first-elem product-section'} />
            <GoodsNew className={'product-section'}/>
            <GoodsNew className={'product-section'}/>
            <GoodsNew className={'product-section'}/>
            <GoodsNew className={'margin-last-elem product-section'} />
        </section>
    )

}


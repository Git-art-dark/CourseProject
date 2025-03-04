import { svgProps } from '../../data'
import carousel from '/carousel_1.png'

function ButtonDiscount({className}) {
    return (
        <button className={className}>
                <svg width="80" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgProps[2].d} fill={svgProps[2].fill} stroke={svgProps[2].strokeColor} strokeWidth={svgProps[2].strokeWidth}/>
                </svg>
        </button>
    )
}


export default function Discount() {

    return (
        <>
            <div className="discount-flags"></div>
            <div className="discount-main-screen pt-serif-bold">
                <h1>Акции</h1>

                <div className="carousel-images">
                    <ButtonDiscount className='discount-button left'></ButtonDiscount>
                    <img src={carousel} alt="carousel" />
                    <ButtonDiscount className='discount-button right'></ButtonDiscount>
                </div>
                
            </div>
            <div className="discount-flags bottom"></div>
        </>
    )
}
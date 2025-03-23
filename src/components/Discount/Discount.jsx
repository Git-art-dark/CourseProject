import { useState, useEffect } from 'react'
import { svgProps } from '../../data'
import carousel1 from '/carousel_1.png'
import carousel2 from '/carousel_2.jpg'
import carousel3 from '/carousel_3.jpg'

export default function Discount() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselImage, setCarouselImage] = useState(carousel1)

    const images = [carousel1, carousel2, carousel3]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % images.length
                setCarouselImage(images[nextIndex])
                return nextIndex
            })
        }, 30000)


        return () => clearInterval(interval)
    }, []);

    function ButtonDiscount({className}) {
        return (
            <button className={className}>
                <svg width="80" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgProps[2].d} fill={svgProps[2].fill} stroke={svgProps[2].strokeColor} strokeWidth={svgProps[2].strokeWidth}/>
                </svg>
            </button>
        )
    }

    function ButtonCarousel({index}) {
        const handleClick = () => {
            setActiveIndex(index)
            setCarouselImage(images[index])
        }

        const rectClass = activeIndex === index ? 'active' : ''

        return (
            <button className='carousel-button' onClick={handleClick}>
                <svg width="130" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="128" height="7" rx="3.5" fill="#fff" stroke="#000" strokeWidth="2" className={rectClass}/>
                </svg>
            </button>
        )
    }

    return (
        <>
            <div className="discount-flags"></div>
            <div className="discount-main-screen">
                <h1 className='main-h1 pt-serif-bold'>Акции</h1>

                <div className="carousel-images">
                    {/* <ButtonDiscount className='discount-button left'></ButtonDiscount> */}
                    <img src={carouselImage} alt="carousel" />
                    {/* <ButtonDiscount className='discount-button right'></ButtonDiscount> */}
                </div>
                
                <div className='carousel-button-discount'>
                    <ButtonCarousel index={0}/>
                    <ButtonCarousel index={1}/>
                    <ButtonCarousel index={2}/>
                </div>
            </div>
            <div className="discount-flags bottom"></div>
        </>
    )
}

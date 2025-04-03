import { useState } from 'react'
import GoodsSection from '../GoodsSection/GoodSection'


export default function NewItems() {


    return (
        <>
            <div className="solid-stick"></div>
            <h1 className="new-h1 arsenal-sc-bold">Новинки</h1>
            <GoodsSection />
            <GoodsSection />
        </>
    )
}
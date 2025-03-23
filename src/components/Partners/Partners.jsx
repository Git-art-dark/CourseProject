import partner1 from '/partner_1.svg'
import partner2 from '/partner_2.png'
import partner3 from '/partner_3.png'

export default function Partners() {

    function AddImage({ srcImage, className }) {
        return (
            <img src={srcImage} alt="s" className={"partners-img partners-img" + className}></img>
        )
    }

    function PartnerSection() {
        return(
            <section className="partner-section">
                <AddImage srcImage={partner1} className={"1"}/>
                <AddImage srcImage={partner2} className={"2"}/>
                <AddImage srcImage={partner3} className={"3"} />
                <AddImage srcImage={partner1} className={"1"}/>
                <AddImage srcImage={partner2} className={"2"}/>
                <AddImage srcImage={partner3} className={"3"} />
            </section>
        )
        
    }
        
    return (
        <> <div className='partners-main'>
                <div className="solid-stick"></div>
                <h1 className="new-h1 pt-serif-bold margin-h1-partners">Наши пратнёры</h1>
                <PartnerSection />
                <PartnerSection />
            </div>
        </>
    )
}
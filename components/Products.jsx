'use client'
import Portal from "./Portal"
import { useState } from "react"

export default function Products() {
    const [portalImage, setPortalImage] = useState(null)
    const stickerDescriptions = {
        CSS_HTML_JavaScript: "Core web technologies for structure, styling and interactivity" 
        , Docker: "Platform for containerizing, deploying and scaling applications"
        , Firebase: "Cloud platform for databases, authentication, and app backend"
        , Next: "React-based framework for server-side rendering and static sites"
        , Node: "JavaScript runtime for building"
        , PostgreSQL: "Robust open-source database with advanced querying capabilities"
        , React: "JavaScript library for buildig interactive user interfaces"
    }

    const stickers = Object.keys(stickerDescriptions)
    
    return(
        <>
            {portalImage && (
                <Portal handleClosePortal={() => {setPortalImage(null)}} >
                    <div className="portal-content">
                        <img className="img-display" src={`/med-res/${portalImage}.jpeg`} alt={`${portalImage}-high-res`} />
                    </div>
                </Portal>
            )}
            <div className="section-container">
                <div className="section-header">
                    <h2>Our Top Picks!</h2>
                    <p>from organization to accessorization</p>
                </div>
                <div className="planner-container">
                    <div>
                        <button onClick={() => {
                            setPortalImage('planner')
                        }} 
                        className="img-button">
                            <img src="/low-res/planner.jpeg" alt="high-res-planner" />
                        </button>
                    </div>
                    <div className="planner-info">
                        <p className="text-large planner-header">
                            Medieval Dragon Month Planner
                        </p>
                        <h3><span>$</span>14.99</h3>
                        <p>Step into a realm of fantasy and organization with our  
                            <strong> Medieval Dragon Month Planner! </strong>  
                            This high-resolution PNG asset combines the fierce 
                            elegance of dragons with intricate medieval designs 
                            to create a planner that&apos;s not only functional but 
                            also a work of art. Whether you&apos;re jotting down quests, 
                            planning battles, or just scheduling your weekly grocery run, 
                            this planner is your ultimate companion.
                        </p>
                        <ul>
                            <li><strong>Epic Dragon Artwork:</strong> 
                            Stunning hand-drawn dragon motifs and medieval-inspired borders
                             make every month feel legendary.
                            </li>
                            <li>
                                <strong>Fully Printable:</strong> 
                                Designed at ultra-high resolution, it&apos;s perfect for 
                                printing on any size paper, from A4 to poster-sized displays.
                            </li>
                        </ul>
                        <div className="purchase-btns">
                            <button>Add to cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="section-container">
                <div className="section-header">
                    <h2>Collect Your Favorite Tech</h2>
                    <p>Choose from our custom designed tech loops</p>
                </div>
                <div className="sticker-container">
                    {stickers.map((sticker, index) => (
                    <div key={index} className="sticker-card">
                        <button onClick={() => {
                            setPortalImage(sticker)
                        }}  className="img-button">
                        <img
                            src={`/low-res/${sticker}.jpeg`}
                            alt={`${sticker} sticker`}
                        /> 
                        </button>

                        <div className="sticker-info">
                        <p className="text-medium">
                            {sticker.replaceAll('_', ' ')} Sticker.png
                        </p>

                        <p>{stickerDescriptions[sticker]}</p>

                        <h4><span>$</span>5.99</h4>
                        <button>Add to cart</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="planner-content">

                </div>
            </div>
        </>
    ) 
}
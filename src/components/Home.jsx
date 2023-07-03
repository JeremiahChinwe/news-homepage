import mobileImg from "../../assets/images/image-web-3-mobile.jpg"
import desktopImg from "../../assets/images/image-web-3-desktop.jpg"
import gameImg from "../../assets/images/image-gaming-growth.jpg"
import retroImg from "../../assets/images/image-retro-pcs.jpg"
import laptopImg from "../../assets/images/image-top-laptops.jpg"


export default function Home() {
    return (
        <main className="main_section">
            <section className="container">

                <section className="hero">
                    <img src={mobileImg} alt="web 3" className="web3_image" />
                    <img src={desktopImg} alt="web 3" className="desktop_img" />
                    <div className="details">
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div>
                            <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </section>

                <section className="new">
                    <h1>New</h1>

                    <div className="stat">
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>

                    <div className="stat">
                        <h3>The Downsides of AI Artistry</h3>
                        <p> What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>

                    <div className="stat">
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </section>
            </section>

            <section className="trending">

                <div className="info">
                    <img src={retroImg} alt="retro img" />
                    <div>
                        <h2>01</h2>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>

                <div className="info">
                    <img src={laptopImg} alt="retro img" />
                    <div>
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p> Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="info">
                    <img src={gameImg} alt="retro img" />
                    <div>
                        <h2>03</h2>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

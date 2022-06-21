import "./Footer.css"

function Footer() {
  return (
    <div className="footer_container">
        <ul className="social-media">
             <li>
                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-tradegames.appspot.com/o/linkedin-logo.png?alt=media&token=0cad02a0-e41d-4572-a710-16330dbaafb9"
                     onClick={() => (window.location = "https://www.linkedin.com/in/claudia-gonzalez-fuentes/")}>
                     
                </img>
            </li>
             <li>
                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-tradegames.appspot.com/o/github-logo.png?alt=media&token=2a32efc7-ba40-4ae6-8b05-601a1e24bd88"
                     onClick={() => (window.location = "https://github.com/claunicole")}>
                </img>
            </li>
             <li>
                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-tradegames.appspot.com/o/Twitter-logo.svg.png?alt=media&token=d3f67340-3a9e-4094-b48c-99fef30f954f"
                     onClick={() => (window.location = "https://twitter.com/Claunicole1")}>
                </img>
            </li> 
        </ul>
        <p>2022 Copyright Ⓒ Claudia Gonzalez</p>
    </div>
  )
}

export default Footer
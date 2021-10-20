import styles from '../styles/Home.module.scss'
import SocialIcons from './SocialIcons'

const Footer = () => {
    const date = (new Date()).getFullYear()
    return (<>
        <footer className={`${styles.hero} text-white body-font`}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src="https://telegra.ph/file/384b138abd49e8d13636f.png" width={50} height={50} alt="Logo" />
                    <span className="ml-3 text-xl text-white">DISEASE PREDICTOR</span></a>
                <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {date} AIKTC —
                    <a href="https://twitter.com/aiktcofficial" rel="noopener noreferrer" target="_blank" className="text-gray-400 ml-1">@aiktcofficial</a>
                </p>
                <SocialIcons 
                    gi="https://github.com/AffanTheBest/disease-prediction"
                    fb="https://facebook.com"
                    tw="https://twitter.com/affanthebest"
                    is="https://instagram.com/sid_affan"
                    li="https://www.linkedin.com/in/affanthebest/"
                />
            </div>
        </footer>
    </>)
}

export default Footer
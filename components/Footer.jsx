import styles from '../styles/Home.module.scss'
import Image from 'next/image'

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
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-100" target='_blank' rel="noreferrer" href="https://www.facebook.com/aiktcofficial/">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-100" target='_blank' rel="noreferrer" href="https://twitter.com/aiktcofficial">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-100" target='_blank' rel="noreferrer" href="https://www.instagram.com/aiktcofficial/">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-100" target='_blank' rel="noreferrer" href="https://bit.ly/3vv8O5p">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    </>)
}

export default Footer
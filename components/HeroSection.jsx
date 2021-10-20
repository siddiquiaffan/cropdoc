import styles from '../styles/Home.module.scss'

const HeroSection = () => {
    return (<>
        <section className={`${styles.hero} text-white body-font`}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img alt="hero" src="https://telegra.ph/file/043281968ac9ae73a92e7.png" className="object-cover object-center rounded" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AI based Crop Disease Prediction
                    </h1>
                    <p className="mb-8 leading-relaxed">Get disease information,symptoms, possible ways to control the disease just by providing Cotton plant image.
                    </p>
                    <form className={styles.form} method="get" id="i9282">
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-300">Feedback</label>
                                <input type="text" id="hero-field" name="hero-field" required className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button type="submit" className="inline-flex text-white bg-gray-300	 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                        </div>
                    </form>
                    <p className="text-sm mt-2 text-gray-300 mb-8 w-full">Submit Feedback
                    </p>
                    <div className="flex lg:flex-row md:flex-col">
                        <button type="button" className="bg-gray-100 inline-flex py-3 px-8 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <img src="https://telegra.ph/file/d21d01e9df13a5adf388c.png" width="35" height="35"alt="Try now" />
                        <span className="ml-4 flex items-start flex-col leading-none"><span className="text-xs text-gray-600 mb-1">Give it</span><span className="title-font font-medium text-gray-700">A TRY</span></span></button>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default HeroSection;
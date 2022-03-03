import styles from '../styles/Home.module.scss'
import HeroSection from '../components/HeroSection'
import Link from 'next/link'
import Upload from '../components/Upload'

const Card = ({name, title, description, url}) => {
  return (
    <>
      <section className={`${styles.card} text-gray-600 my-16 w-4/5 mx-auto body-font shadow-2xl`}>
        <div className="container px-5 lg:py-20 py-12 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg py-5 px-8 flex flex-col md:ml-auto w-full mb-8">
              <h1 className="text-gray-900 text-lg font-medium title-font mb-5">{name}</h1>
          </div>
          <div className="lg:w-3/5 lg:ml-10 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-100"> {title} </h1>
            <p className="leading-relaxed mt-4"> {description} </p>
          </div>
        </div>
        <div className="w-full">
          <Link href={url ? url : ''}>
            <a className="flex items-center">
              <button className="btn mx-auto mb-10 inline-flex text-yellow-700 font-bold	 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

const Home = () => {
  return (
    <>
      <HeroSection />
      <Upload />
      <Card 
        name="How does it works?"
        title="Working of the project."
        description="When user uploads a crop image, it is first processed by our AI model and then classified into different categories. The categories are then used to train the model and the model is used to predict the disease of the crop."
        url=""
      />
      <Card 
        name="Who are we?"
        title="We're a group of students!"
        description="We're a group of students persuing B.E at Anjuman-I-Islam's Kalsekar Technical Campus. Estimated passing date is May 2022."
        url="/about"
      />
    </>
  )
}

Home.seo = {title: 'Disease Prediction - Crop plant disease prediction powered by AI.', description: 'Disease Prediction - AI based crop plant disease prediction. Get disease causes, symptoms, cure just by providing the plant image.'}

export default Home
import Image from 'next/image'
import SocialIcons from '../components/SocialIcons'
import styles from '../styles/Home.module.scss'

const UserCard = ({user}) => {
    const {image, name, profession, gi, fb, tw, is, li} = user
    return (<>
        <div className={`p-2 lg:w-1/3 md:w-1/2 w-full`}>
            <div className={`${styles.card} h-full flex items-center p-4 rounded-lg`}>
                <div className="mr-5">
                    <Image src={image ? image : ''} height={65} width={65} alt='' className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-10" />
                </div>
                <div className="flex-grow">
                    <h2 className="text-gray-200 title-font font-medium"> {name} </h2>
                    <p className="text-gray-500"> {profession} </p>
                    <br />
                    <SocialIcons gi={gi} fb={fb} tw={tw} is={is} li={li} />
                </div>
            </div>
        </div>
    </>)
}

const About = () => {
    const users = process.env.MEMBERS;
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">Our Team </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We're a group of students persuing B.E at Anjuman-I-Islam's Kalsekar Technical Campus. Estimated passing date is May 2022. </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {users.map((user) => <UserCard user={user} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
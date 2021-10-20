import Image from 'next/image'

const UserCard = ({image, name, profession}) => {
    return (<>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-5">
                    <Image src={image ? image : ''} height={65} width={65} alt='' className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-10" />
                </div>
                <div className="flex-grow">
                    <h2 className="text-gray-200 title-font font-medium"> {name} </h2>
                    <p className="text-gray-500"> {profession} </p>
                </div>
            </div>
        </div>
    </>)
}

const About = () => {
    const users = [
        {image: 'https://telegra.ph/file/073d7bc6f58d7e28cd707.jpg', name: 'Siddiqui Affan', profession: 'Full Stack Developer'},
        {image: 'https://telegra.ph/file/5c9e3a713d99e2989588b.png', name: 'Siddiqui Sufiyan', profession: 'Front End Developer'},
        {image: 'https://telegra.ph/file/5c9e3a713d99e2989588b.png', name: 'Shaikh Aman', profession: 'Backend Developer'},
        {image: 'https://telegra.ph/file/dd530b98d4077f4d5f913.jpg', name: 'Shaikh Rauf', profession: 'Front End Developer'}
    ]
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">Our Team </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We're a group of students persuing B.E at Anjuman-I-Islam's Kalsekar Technical Campus. Estimated passing date is May 2022. </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {users.map(({image, name, profession}) => <UserCard image={image} name={name} profession={profession} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
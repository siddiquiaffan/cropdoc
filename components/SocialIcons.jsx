import {FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const SocialIcons = ({gi, fb, tw, is, li}) => {
    return(<>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl">
            {
                gi ? <a className="icon text-gray-100 px-3 hover:scale-125 transform" target='_blank' rel="noreferrer" href={gi}>
                        <FaGithub />
                </a> : null
            }
            {
                li ? <a className="icon text-gray-100 px-3 hover:scale-125 transform" target='_blank' rel="noreferrer" href={li}>
                        <FaLinkedinIn />
                </a> : null
            }
            {
                tw ? <a className="icon text-gray-100 px-3 hover:scale-125 transform" target='_blank' rel="noreferrer" href={tw}>
                        <FaTwitter />
                </a> : null
            }
            {
                fb ? <a className="icon text-gray-100 px-3 hover:scale-125 transform" target='_blank' rel="noreferrer" href={fb}>
                        <FaFacebookF />
                </a> : null
            }
            {
                is ? <a className="icon text-gray-100 px-3 hover:scale-125 transform" target='_blank' rel="noreferrer" href={is}>
                        <FaInstagram />
                </a> : null
            }
        </span>
    </>)
}

export default SocialIcons
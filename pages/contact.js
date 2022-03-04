import SocialIcons from '../components/SocialIcons'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !email || !message){
            return toast('Please fill all fields!', {type: 'warning', theme: 'colored'})
        }
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            return toast('Please enter a valid email address! eg: yourname@gmail.com', {type: 'warning', theme: 'colored'})
        }
        const id = toast.loading("Sending...", {type: 'info', theme: 'colored'})
        axios.get(`/api/contact?text=` + `New messaged arrived.%0A%0AName: ${name}.%0AEmail: ${email}%0AMessage: ${message}`).then(res => {
            if(res.data.status == 'success'){
                setName(' ');
                setEmail(' ');
                setMessage(' ')
                toast.update(id, {render: 'Recieved your message. We will get back to you soon!', type: 'success', theme: 'colored', isLoading: false, closeOnClick: true, autoClose: 5000});
            }else{
                toast.update(id, {render: 'Failed to deliver message!', type: 'error', theme: 'colored', isLoading: false, closeOnClick: true, autoClose: 5000});
            }
        })
    }

    return <>
      <ToastContainer position="bottom-right" />
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">Contact Us </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can contact us using the below from or the email address given below.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-p_light rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-p_light rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-p_light rounded border h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-indigo-500">18co57@aiktc.ac.in</a>
                                <p className="leading-normal my-5">Mumbai
                                    <br />India
                                </p>
                                <SocialIcons 
                                    gi="https://github.com/AffanTheBest/disease-prediction"
                                    fb="https://facebook.com"
                                    tw="https://twitter.com/affanthebest"
                                    is="https://instagram.com/sid_affan"
                                    li="https://www.linkedin.com/in/affanthebest/"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}

Contact.seo = {title: 'Contact Us - Disease Prediction', description: 'You Contact Us Through The Provided Form.'}

export default Contact
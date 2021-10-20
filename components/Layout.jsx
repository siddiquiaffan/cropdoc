import { BackTop } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
// import SearchBar from '../SearchBar';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <BackTop /> 
            {/* <SearchBar /> */}
            {children}
            <Footer />
        </>
    )
}

export default Layout;

import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar'
import './index.scss'


const Layout = () => {
    return (
        <div className='App'>
            <SideBar />
            <div className='page'>
                <div className='right-section'>
                    <a href="../../assets/files/rani_cohen_cv.pdf" download className="resume-download">
                        Download Resume
                    </a>
                </div>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet/>

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br/>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>
        </div>
    )
}

export default Layout;
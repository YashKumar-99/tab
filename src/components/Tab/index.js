import React, { useState } from 'react';
import './index.css';
import { TabContent, TabHeader } from './TabContent';
const TabComp = () => {
    const [tabCount, setTabCount] = useState(0);


    const [open, setopen] = useState(false)
    return (
        <div className='TabBox'>
            <div className='TabHeader'>
                {TabHeader.map((item, index) => {
                    return (
                        <>
                            <div className={`TabHeading ${tabCount === index ? 'active' : ''}`} onClick={() => { setTabCount(index); setopen(!open) }}><h2>{item}  </h2> {(open&& index === tabCount)  ? <> <span className='icon'>&#11165; </span> </> :<> <span className='icon'>  &#11167;</span></> }</div>

                            {tabCount === index && (<>

                                {open && (<>


                                    <div className='DisplayMobile'>
                                        <DisplaySection tabCount={tabCount} />


                                    </div>
                                </>)}

                            </>)}


                        </>)
                }
                )}
            </div>
            <hr className='hr' />
            <div className='DispalyDesktop'>
                <DisplaySection tabCount={tabCount} />
            </div>
        </div>
    )
}


const DisplaySection = ({ tabCount }) => {

    return (<>

        <div className='displaySection '>
            <h1>
                {TabContent[tabCount]?.title}
            </h1>
            <p>
                {TabContent[tabCount]?.description}
            </p>

        </div>

    </>)
}
export default TabComp
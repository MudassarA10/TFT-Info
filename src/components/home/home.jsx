import '../home/home.css';
import Header from '../navbar/nav';
import Button from '../buttun/btn';
import CardDisplay from '../card/card';
import { useState } from 'react';
// const Home = () => {
//     const cards_data = localStorage.getItem("data")
//     const [label, setlabel] = useState('All')

//     // const [showCards, setShowcards] = useState(false);
//     const handleClick = (category) => {
//         setlabel(category)
//         // eslint-disable-next-line no-debugger
//         // debugger
//         // console.log(label);
//     }

//     const buttonLabels = ['All', 'TECHNOLOGY', 'FINANCE', 'SCIENCE', 'SOCIETY', 'ENTERTAINMENT', 'HEALTH', 'NEWS', 'HISTORY'];
//     return (
//         <>
//             <div className='main-box'>
//                 <div className='header'>
//                     <Header />
//                 </div>
//                 <div className='hero-sec'>

//                     <div className='sidebar-btn'>
//                         <div className='btn-box'>
//                             {buttonLabels.map((label, index) => (
//                                 <Button onClick={() => { handleClick(label) }} key={index} label={label} />
//                             ))}
//                         </div>


//                     </div>
//                     <div className='card-data'>
//                         <CardDisplay label={label} cards={cards_data} />
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Home;
import React from 'react'

const Home = () => {
    const cards_data = localStorage.getItem("data")
    const [label, setlabel] = useState('All')

    // const [showCards, setShowcards] = useState(false);
    const handleClick = (category) => {
        setlabel(category)
        // eslint-disable-next-line no-debugger
        // debugger
        // console.log(label);
    }

    const buttonLabels = ['All', 'TECHNOLOGY', 'FINANCE', 'SCIENCE', 'SOCIETY', 'ENTERTAINMENT', 'HEALTH', 'NEWS', 'HISTORY'];
    return (
        <div className='main-box'>
            <div className='topHeader'>
                <Header />
            </div>
            <div className='hero'>
                <div className='sidebar'>
                    <div className='btn-box'>
                        {buttonLabels.map((label, index) => (
                            <Button onClick={() => { handleClick(label) }} key={index} label={label} />
                        ))}
                    </div>
                </div>
                <div className='content'>
                    <CardDisplay label={label} cards={cards_data} />
                </div>

            </div>

        </div>
    )
}

export default Home;

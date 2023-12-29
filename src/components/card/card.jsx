import React, { useEffect, useState } from 'react';
import '../card/card.css';

const CardDisplay = (props) => {
    const [cards, setCards] = useState([]);
    const [counts, setCounts] = useState([]);
    const [displayedCards, setDisplayedCards] = useState(6);
    const dependecy = props.cards

    useEffect(() => {
        const myData = localStorage.getItem('data');
        const label = props.label;

        if (myData) {
            const storedData = JSON.parse(myData);
            const filteredData = label && label !== 'All'
                ? storedData.filter((item) => item.category === label)
                : storedData;

            setCards(filteredData);
            setCounts(filteredData.map(() => ({ like: 0, average: 0, dispute: 0 })));
        }
    }, [dependecy, props.label, localStorage.getItem('data')]);

    const handleCount = (index, type, card, stateType) => {
        // debugger
        const name = card.name;
        const comment = localStorage.getItem('data');
        const card_data = JSON.parse(comment);
        const filter_data = card_data.find((item) => item.name === name);

        if (filter_data) {
            filter_data[type]++;
            const newData = card_data;
            localStorage.setItem('data', JSON.stringify(newData));

            // Update state based on the given stateType
            const newCounts = [...counts];
            newCounts[index][stateType]++;
            setCounts(newCounts);
        }
    };

    const handleShowMore = () => {
        setDisplayedCards(cards.length);
    };

    const handleShowLess = () => {
        setDisplayedCards(5);
    };

    return (
        <div className='card-main'>
            {cards.slice(0, displayedCards).map((card, index) => (
                <div key={index} className='card'>
                    <div className='card-box1'>
                        <div className='text'> <p>{card.name}</p></div>
                        <div className='url'> <p>({card.url})</p></div>
                        <div className='catagory'><button className='btn-cata'>{card.category}</button></div>
                    </div>

                    <div className='like-btn'>
                        <button className='button' onClick={() => handleCount(index, 'like', card, 'like')}>
                            👍{card.like}
                        </button>
                        <button className='button' onClick={() => handleCount(index, 'average', card, 'average')}>
                            😒{card.average}
                        </button>
                        <button className='button' onClick={() => handleCount(index, 'dispute', card, 'dispute')}>
                            😡{card.dispute}
                        </button>
                        {counts[index].dispute >= 10 && <p>This info is disputed!</p>}
                    </div>
                </div>
            ))}
            {cards.length > 6 && displayedCards === cards.length && (
                <button className='btn' onClick={handleShowLess}>
                    Show Less
                </button>
            )}
            {cards.length > 6 && displayedCards < cards.length && (
                <button className='btn' onClick={handleShowMore}>
                    Show More
                </button>
            )}
        </div>
    );
};

export default CardDisplay;

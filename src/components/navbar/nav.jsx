import '../navbar/nav.css';
import MessageIcon from '@mui/icons-material/Message';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [searchInput1, setSearchInput1] = useState('');
    const [searchInput2, setSearchInput2] = useState('');
    const [dropdown, setDropdown] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        // Load data from local storage when the component mounts
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, [localStorage.getItem('data')]);

    const handleBtnClick = () => {
        setShowComponent(!showComponent);
        setSearchInput1('');
        setSearchInput2('');
    };

    const handleInputChange1 = (e) => {
        setSearchInput1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setSearchInput2(e.target.value);
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        if (searchInput1 === "" && searchInput2 === "") {
            toast.error("Enter data");
        } else {
            const newData = [
                ...data,
                {
                    name: searchInput1,
                    url: searchInput2,
                    category: dropdown,
                    like: 0,
                    average: 0,
                    dispute: 0,
                }
            ];

            // Update state and local storage with new data
            setData(newData);
            localStorage.setItem("data", JSON.stringify(newData));

            toast.success("Data Saved");
            setSearchInput1("");
            setSearchInput2("");
            setDropdown("");
        }
    };

    return (
        <div className="header">
            <div className="logo">
                <MessageIcon sx={{ fontSize: 30 }} />
                <h1>Today I Learned</h1>
            </div>
            <div className="btn" onClick={handleBtnClick}>
                {showComponent ? 'Cancel' : 'Enter your Review'}
            </div>

            {showComponent && (
                <div className="overlay">
                    <ToastContainer />
                    <div className="component">
                        <input
                            className='input1'
                            type="text"
                            value={searchInput1}
                            onChange={handleInputChange1}
                        />
                        <div className="character-counter">{searchInput1.length}</div>
                        <input
                            className='input2'
                            type="text"
                            value={searchInput2}
                            onChange={handleInputChange2}
                        />
                        <select
                            className='drop-down'
                            value={dropdown}
                            onChange={e => setDropdown(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="TECHNOLOGY">TECHNOLOGY</option>
                            <option value="FINANCE">FINANCE</option>
                            <option value="SCIENCE">SCIENCE</option>
                            <option value="SOCIETY">SOCIETY</option>
                            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                            <option value="HEALTH">HEALTH</option>
                            <option value="NEWS">NEWS</option>

                            <option value="HISTORY">HISTORY</option>
                            {/* Add other options as needed */}
                        </select>

                        <button className='btn1' type='submit' onClick={handleSaveClick}>
                            Post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;

import React, {useState} from 'react';
import './App.css';
import {getRandomMessage} from "./messages";
import LoadingSpinner from "./LoadingSpinner";

const App: React.FC = () => {
    const [message, setMessage] = useState(getRandomMessage());
    const [loading, setLoading] = useState(true);
    const [cache, setCache] = useState(Date.now());

    const loadNewCat = () => {
        setLoading(true);
        setMessage(getRandomMessage());
        setCache(Date.now());
    }

    return (
        <div className="background">
            <div className="image-container">
                <img
                    className="image"
                    src={`https://cataas.com/cat/says/${encodeURIComponent(message)}?size=50&cache=${cache}`}
                    alt={message}
                    onLoad={() => setLoading(false)}
                />
                {loading ? <LoadingSpinner /> : <button className="new-cat-button" onClick={loadNewCat}>New cat</button>}
            </div>
        </div>
    );
}

export default App;

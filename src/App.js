import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";


function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [q, setQ] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${q}`);
            setItems(res.data);
            setLoading(false);
        };
        try {
            fetchItems();
        } catch (e) {
            console.log(e.error);
        }


    }, [q]);


    return (
        <div className="container">
            <Header/>
            <Search getQ={(q) => {
                setQ(q)
            }}/>
            <CharacterGrid loading={loading} items={items}/>
        </div>
    );
}

export default App;

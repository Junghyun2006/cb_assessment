import { useState } from 'react';
import Header from './Header';
import UserSearch from './UserSearch';
import Repos from './Repos';
import * as githubAPI from '../util/githubAPI';

const Home = () => {
    const [userSearch, setUserSearch] = useState('');
    const [userRepos, setUserRepos] = useState([]);

    const handleUserSearch = e => setUserSearch(e.target.value);

    const submitSearch = async () => {
        setUserRepos(await githubAPI.fetchUserRepos(userSearch))
    }


    return (
        <div>
            <Header />
            <UserSearch userSearch={userSearch} handleUserSearch={handleUserSearch}/>
            <button onClick={submitSearch}>github</button>
            <Repos repos={userRepos}/>
        </div>
    )
}

export default Home

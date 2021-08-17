import { useState, useEffect} from 'react';
import propTypes from 'prop-types';
import * as githubAPI from '../util/githubAPI';
 
const Repo = ({repo}) => {

    useEffect(() => {
        const setLanguage = async () => {
            const languages  = await githubAPI.fetchRepoLanguages(repo.languages_url)
            setLanguages(languages);
         }
        setLanguage();
    }, [repo])

    const [languages, setLanguages] = useState([]);

    return (
        <div className='repo-card'>
            {repo.name}
            {repo.stargazers_count}
            {languages.map((language, i) => (<li key={i} >{language}</li>))}
            {repo.description}
        </div>
    )
}

export default Repo

Repo.propTypes = {
    repo: propTypes.object,
}

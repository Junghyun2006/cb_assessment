import { useEffect, useState } from 'react';
import * as githubAPI from "../util/githubAPI";
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom'

const RepoInfo = () => {
    const [readMe, setReadMe] = useState('');
    const [toggleReadMe, setToggleReadMe] = useState(false);

    const location = useLocation();
    const { readMeUrl, name, stargazers_count, owner, html_url, updated_at } = location.state;
    const lastUpdated = updated_at.split('T')[0]
  
    useEffect(() => {
        const fetchRepo = async () => {
            const data = await githubAPI.fetchRepoReadme(readMeUrl);
            setReadMe(data)
        }
        fetchRepo();
    }, [readMeUrl])

    // toggle read me button to display after button is pressed
    const handleToggleReadMe = () => setToggleReadMe(!toggleReadMe);
    
    // decode base64 readme content to string
    const b = new Buffer(readMe, 'base64') 
    const s = b.toString();

    
    return (
      <div className="repo-info-container">
        <div className="repo-info-name">{name}</div>
        <div className="repo-info-border"></div>
        <div className="repo-info-other">Owner: {owner}</div>
        <div className="repo-info-other">Stars: {stargazers_count}</div>
        <div className="repo-info-other">Last Updated: {lastUpdated}</div>
        <a className="repo-info-link" href={html_url}>Link to Repository</a>
        <div className='repo-readme-holder'> 
            <button className="repo-readme-btn" onClick={() => handleToggleReadMe()}>Read Me</button>
            {toggleReadMe && <ReactMarkdown children={s} className="repo-readme"></ReactMarkdown>}
        </div>
      </div>
    );
}

export default RepoInfo

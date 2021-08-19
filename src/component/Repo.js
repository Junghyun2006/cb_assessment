import { useState, useEffect } from "react";
import propTypes from "prop-types";
import * as githubAPI from "../util/githubAPI";
import { Link } from 'react-router-dom';

const Repo = ({ repo }) => {

  const { name, owner, description, languages_url, url, stargazers_count, html_url, updated_at } = repo;

  useEffect(() => {
    const setLanguage = async () => {
      const languages = await githubAPI.fetchRepoLanguages(languages_url);
      setLanguages(languages);
    };
    setLanguage();
  }, [languages_url]);

  const [languages, setLanguages] = useState([]);

  const language_color = {
    PHP: "yellow",
    HTML: "orange",
    JavaScript: "pink",
    TypeScript: "lightgreen",
    CSS: "lightblue",
    Shell: "violet",
    Python: "silver",
    Ruby: "gold",
    SCSS: "purple",
  };

  return (
    <Link className="repo-card" to={{
        pathname: `/repoinfo/${owner.login}/${name}`,
        state: { 
            readMeUrl: `${url}/readme`,
            name,
            stargazers_count,
            owner: owner.login,
            html_url,
            updated_at
        }
    }}>
      <div className="repo-name">{name}</div>
      <div className="repo-divider"></div>
      <div className="repo-description">{description}</div>
      <div className="repo-languages">
        {languages.length > 0 ? (
          languages.map((language, i) => (
            <li
              className="repo-language-item"
              key={i}
              style={{
                background: `${
                  language_color[language] ? language_color[language] : "gray"
                }`,
              }}
            >
              {language}
            </li>
          ))
        ) : (
          <li className="repo-language-not-detected">No Languages Detected</li>
        )}
      </div>
    </Link>
  );
};

export default Repo;

Repo.propTypes = {
  repo: propTypes.object,
};

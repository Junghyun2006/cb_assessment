import Repo from './Repo';
import propTypes from 'prop-types';

const Repos = ({ repos }) => {
    return (
        <div className="repos-container">
            {repos.map((repo) => (< Repo key={repo.id} repo={repo} />))}
        </div>
    )
}

export default Repos

Repos.propTypes = {
    repos: propTypes.array,
}
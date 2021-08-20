import Repo from "./Repo";
import propTypes from "prop-types";

const Repos = ({ repos, err, empty }) => {
  if (!repos) return null;
  // sort repos by descending star count and limit to 6 most starred repos
  const sortedRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div className="repos-container">
      {!empty && !err && (
        <div className="repos-idx-container">
          {sortedRepos.map((repo) =>
            !repo.fork ? <Repo key={repo.id} repo={repo} /> : null
          )}
        </div>
      )}
    </div>
  );
};

export default Repos;

// check proptypes to prevent future bugs

Repos.propTypes = {
  repos: propTypes.array,
  err: propTypes.bool,
  empty: propTypes.bool,
};

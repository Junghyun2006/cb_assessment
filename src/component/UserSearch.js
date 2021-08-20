import React from "react";
import propTypes from "prop-types";

const UserSearch = ({
  handleUserSearch,
  userSearch,
  submitSearch,
  err,
  emptyRepos,
  userRepos,
}) => {
  // if errors exist let the user know why no results were returned
  return (
    <div>
      <form className="search-container ">
        <input
          className={`user-search-input`}
          onChange={handleUserSearch}
          type="text"
          value={userSearch}
          placeholder="Search by user"
        />
        <button type="submit" className="search-btn" onClick={submitSearch}>
          Search
        </button>
      </form>
      {err && (
        <div className="error-message">- User not found please try again</div>
      )}
      {emptyRepos && !err && (
        <div className="error-message">- This User's repository is empty</div>
      )}
    </div>
  );
};

export default UserSearch;

// check proptypes to prevent future bugs

UserSearch.propTypes = {
  handleUserSearch: propTypes.func,
  userSearch: propTypes.string,
  submitSearch: propTypes.func,
  err: propTypes.bool,
  emptyRepos: propTypes.bool,
};

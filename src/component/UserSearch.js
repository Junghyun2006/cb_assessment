import React from "react";
import propTypes from "prop-types";

const UserSearch = ({
  handleUserSearch,
  userSearch,
  submitSearch,
  err,
  emptyRepos,
}) => {
  return (
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
      {err && (
        <div className="error-message">- User not found please try again</div>
      )}
      {(emptyRepos && !err) && (
        <div className="error-message">- This User's repository is empty</div>
      )}
    </form>
  );
};

export default UserSearch;

UserSearch.propTypes = {
  handleUserSearch: propTypes.func,
  userSearch: propTypes.string,
};

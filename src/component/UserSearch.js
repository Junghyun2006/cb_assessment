import React from 'react'
import propTypes from 'prop-types';

const UserSearch = ({handleUserSearch, userSearch}) => {
    return (
        <input
            className="user-search-input"
            onChange={handleUserSearch}
            type="text"
            value={userSearch}
            placeholder="Search by user" />
    )
}

export default UserSearch

UserSearch.propTypes = {
    handleUserSearch: propTypes.func,
    userSearch: propTypes.string,
}

import { useState } from "react";
import UserSearch from "./UserSearch";
import Repos from "./Repos";
import * as githubAPI from "../util/githubAPI";

const Home = () => {
  const [userSearch, setUserSearch] = useState("");
  const [userRepos, setUserRepos] = useState(null);
  const [err, setErr] = useState(false);
  const [emptyRepos, setEmptyRepos] = useState(false);

  //toggle loading to true while fetching data
  const [handleLoading, sethandleLoading] = useState(false);

  // handle onChange Search Input
  const handleUserSearch = (e) => setUserSearch(e.target.value);

  // submit form to fetch and populate repositories while catching errors
  const submitSearch = async (e) => {
    e.preventDefault();
    sethandleLoading(true)
    const data = await githubAPI.fetchUserRepos(userSearch);
    if (data.message === "Not Found") {
      setErr(true);
      setEmptyRepos(false);
    } else if (!data.length) {
      setEmptyRepos(true);
      setErr(false);
    } else {
      setUserRepos(data);
      setErr(false);
      setEmptyRepos(false);
    }
    // set loading to false
    sethandleLoading(false);
  };


  return (
    <div className="home">
      <UserSearch
        userSearch={userSearch}
        handleUserSearch={handleUserSearch}
        submitSearch={submitSearch}
        err={err}
        emptyRepos={emptyRepos}
        repos={userRepos}
      />
      {(handleLoading) && <p className ="loading-text" >Loading...</p>}
      {(userRepos && !handleLoading) && <Repos repos={userRepos} err={err} empty={emptyRepos} />}
    </div>
  );
};

export default Home;

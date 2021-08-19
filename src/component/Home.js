import { useState } from "react";
import UserSearch from "./UserSearch";
import Repos from "./Repos";
import * as githubAPI from "../util/githubAPI";

const Home = () => {
  const [userSearch, setUserSearch] = useState("");
  const [userRepos, setUserRepos] = useState([]);
  const [err, setErr] = useState(false);
  const [emptyRepos, setEmptyRepos] = useState(false);

  const handleUserSearch = (e) => setUserSearch(e.target.value);

  const submitSearch = async (e) => {
    e.preventDefault();
    const data = await githubAPI.fetchUserRepos(userSearch);
    console.log(data)
    if (data.message === "Not Found") {
      setErr(true);
      setEmptyRepos(false);
    } else if (!data.length) {
      setEmptyRepos(true)
      setErr(false);
    } else {
      setUserRepos(data);
      setErr(false);
      setEmptyRepos(false);
    }
  };

  return (
    <div className="home">
      <UserSearch
        userSearch={userSearch}
        handleUserSearch={handleUserSearch}
        submitSearch={submitSearch}
        err={err}
        emptyRepos={emptyRepos}
      />
      <Repos repos={userRepos} err={err} empty={emptyRepos}/>
    </div>
  );
};

export default Home;

export const fetchUserRepos = async (user) => {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await res.json();
  return data;
};

export const fetchRepoLanguages = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return Object.keys(data);
};

export const fetchRepoReadme = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  return data.content;
};



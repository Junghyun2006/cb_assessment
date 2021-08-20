export const fetchUserRepos = async (user) => {
  const res = await fetch(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Authorization: `token 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`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const fetchRepoLanguages = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `token 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`,
    },
  });
  const data = await res.json();
  return Object.keys(data);
};

export const fetchRepoReadme = async (url) => {
  const res = await fetch(url, {
    headers: {
      "Content-type": "application/vnd.github.v3.html+json",
      Authorization: `token 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`,
    },
  });
  const data = await res.json();
  return data.content;
};




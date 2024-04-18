const sortFromNewToOld = (data) => {
  return [...data].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
};

const sortFromOldToNew = (data) => {
  return [...data].sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
};

export { sortFromNewToOld, sortFromOldToNew };
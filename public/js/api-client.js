const fetchMembers = function() {
  return fetch('/members')
    .then(response => response.json());
};

export {
  fetchMembers,
};

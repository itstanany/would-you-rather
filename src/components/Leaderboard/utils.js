const getSortedUsers = (users) => {
  /**
   * Return an array of user object sorted
   * Sorted in descending order according to total score
   * total score is number of own questions + number of answered questions
   */
  // eslint-disable-next-line camelcase
  const immutableUser = {
    ...users,
  };

  const usersData = Object.values(users);
  usersData.forEach((user) => {
    immutableUser[user.id].totalScore = Object.keys(user.answers).length + user.questions.length;
  });

  return Object.values(immutableUser).sort((userA, userB) => userB.totalScore - userA.totalScore);
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getSortedUsers,
};

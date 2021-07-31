const getSortedUsers = (users) => {
  /**
   * Return an array of user object sorted
   */
  const users_data = Object.values(users);
  users_data.map((user) => (user.totalScore = Object.keys(user.answers).length + user.questions.length));

  return users_data.sort((user_a, user_b) => user_b.totalScore - user_a.totalScore);
};

export {
  getSortedUsers,
}

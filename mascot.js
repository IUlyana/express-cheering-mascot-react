module.exports = function Mascot(cheerName) {
  const cheers = {
    'RED HOT': 'H-O-T!',
    'DO IT AGAIN': 'Go, Fight, Win',
    '2 BITS': 'Holler!',
    'STOMP YOUR FEET': 'STOMP!',
  };
  const answer = cheers[cheerName] ? cheers[cheerName] : 'Go Team!';
  return answer;
};

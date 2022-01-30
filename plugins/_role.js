const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Trainee': 0,
  'Challenger': 10,
  'Fighter': 20,
  'Conqueror': 30,
  'Rival': 40,
  'Duelist': 50,
  'Gladiator': 60,
  'Battle Master': 80,
  'Legend': 90,
  'Angel' : 100,
  'Devil' : 150,
  'God' : 200
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}

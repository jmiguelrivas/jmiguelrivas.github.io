class User {
  constructor(name, server, id) {
    this.name = name.join('/')
    this.server = server
    this.id = id
  }
}

class UserTop extends User {
  constructor(name, server, id, death) {
    super(name, server, id)
    this.group = death ? ['honor'] : ['top']
  }
}

class UserElite extends User {
  constructor(name, server, id, death) {
    super(name, server, id)
    this.group = death ? ['honor'] : ['elite']
  }
}

class UserMaster extends User {
  constructor(name, server, id, death) {
    super(name, server, id)
    this.group = death ? ['honor'] : ['master']
  }
}

export { User, UserElite, UserTop, UserMaster }

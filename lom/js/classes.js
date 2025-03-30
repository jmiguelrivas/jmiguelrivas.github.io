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
    this.group = ['top']
    // this.group = death ? ['honor'] : ['top']
  }
}

class UserElite extends User {
  constructor(name, server, id, death) {
    super(name, server, id)
    this.group = ['elite']
    // this.group = death ? ['honor'] : ['elite']
  }
}

class UserMaster extends User {
  constructor(name, server, id, death) {
    super(name, server, id)
    this.group = ['master']
    // this.group = death ? ['honor'] : ['master']
  }
}

export { User, UserElite, UserTop, UserMaster }

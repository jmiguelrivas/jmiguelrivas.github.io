class User {
  constructor(name, server, id) {
    this.name = name.join('/')
    this.server = server
    this.id = id
  }
}

class UserTop extends User {
  constructor(name, server, id) {
    super(name, server, id)
    this.group = ['top']
  }
}

class UserHonorMention extends User {
  constructor(name, server, id) {
    super(name, server, id)
    this.group = ['honor']
  }
}

class UserElite extends User {
  constructor(name, server, id) {
    super(name, server, id)
    this.group = ['elite']
  }
}

export { User, UserHonorMention, UserElite, UserTop }

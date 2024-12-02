export default class Enumerator {
  constructor(...keys) {
    keys.forEach((key, i) => {
      this[key] = i
      this[i] = key
    })
    Object.freeze(this)
  }

  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) yield key
  }
}

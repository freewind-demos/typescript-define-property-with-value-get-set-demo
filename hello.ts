type User = {
  name?: string
}

const user: User = {};

const names: string[] = [];

Object.defineProperty(user, 'name', {
  // Error: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
  // value: '',
  // writable:true,
  get() {
    return names.join(',');
  },
  set(value) {
    names.push(value);
  }
})

user.name = 'aaa'
user.name = 'bbb'

console.log(user.name)

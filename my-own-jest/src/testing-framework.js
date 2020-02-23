const test = async (title, callback) => {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

const expect = actual => ({
  toBe: expected => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`)
    }
  }
})

const fn = impl => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => {
    impl = newImpl
  }
  return mockFn
}

const spyOn = (obj, prop) => {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => {
    obj[prop] = originalValue
  }
}

module.exports = { test, expect, spyOn }

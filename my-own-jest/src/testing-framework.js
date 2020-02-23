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
  return mockFn
}

module.exports = { test, expect, fn }

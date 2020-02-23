const thumbWar = require('./thumb-war')
const utils = require('./utils')

test('returns winner', () => {
  spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('player1', 'player2')
  expect(winner).toBe('player1')

  const call = utils.getWinner.mock.calls[0]
  expect(call[0]).toBe('player1')
  expect(call[1]).toBe('player2')

  utils.getWinner.mockRestore()
})

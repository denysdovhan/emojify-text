import { readFileSync } from 'fs'
import test from 'tape'
import emojifyText from './index'

test('emojifyText', ({ equal, throws, end }) => {
  const fixture = readFileSync('fixtures/column-pure.txt', 'utf8').trim()

  equal(emojifyText({}, 'test'), fixture, 'basic transformation')

  throws(() => { emojifyText({}) }, TypeError, 'empty input')
  throws(() => { emojifyText({}, []) }, TypeError, 'invalid input')

  end()
})

test('characters', ({ equal, end }) => {
  const fixture = readFileSync('fixtures/column.txt', 'utf8').trim()

  equal(emojifyText({
    background: '⭐️',
    foreground: '💙'
  }, 'test'), fixture, 'background with foreground')

  equal(emojifyText({
    bg: '⭐️',
    foreground: '💙'
  }, 'test'), fixture, 'bg with foreground')

  equal(emojifyText({
    background: '⭐️',
    fg: '💙'
  }, 'test'), fixture, 'background with fg')

  equal(emojifyText({
    bg: '⭐️',
    fg: '💙'
  }, 'test'), fixture, 'bg with fg')

  end()
})

test('row', ({ equal, end }) => {
  const fixture = readFileSync('fixtures/row.txt', 'utf8').trim()

  equal(emojifyText({
    background: '⭐️',
    foreground: '💙',
    row: true
  }, 'test'), fixture, 'render in row')

  end()
})

test('dictionary', ({ equal, end }) => {
  const fixture = readFileSync('fixtures/dictionary.txt', 'utf8').trim()

  equal(emojifyText({
    dictionary: {
      A: [
        [ 0, 1, 0 ],
        [ 1, 0, 1 ],
        [ 1, 0, 1 ]
      ],
      C: [
        [ 1, 1, 1 ],
        [ 1, 0, 0 ],
        [ 1, 1, 1 ]
      ],
      Y: [
        [ 1, 0, 1 ],
        [ 1, 0, 1 ],
        [ 0, 1, 0 ]
      ]
    }
  }, 'ACY'), fixture, 'render with custom dictionary')

  end()
})

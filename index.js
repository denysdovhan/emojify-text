import {
  __,
  always,
  defaultTo,
  has,
  ifElse,
  is,
  join,
  map,
  pipe,
  prop,
  replace,
  split,
  toUpper,
  transpose,
  unless
} from 'ramda'

import characters from './characters'

/**
 * Convert boring text to wonderful emojis.
 *
 * @param  {String}  background              Character to print as background
 * @param  {String}  foreground              Character to print as foreground
 * @param  {String}  bg                      Alias for background
 * @param  {String}  fg                      Alias for foreground
 * @param  {JSON}    [dictionary=characters] Custom dictionary for rendering
 * @param  {Boolean} [row=false]             Print in single row or not
 * @param  {String}  text                    Text to process through transformer
 * @return {String}                          The result of processing
 */
export default function emojifyText({
  bg,
  fg,
  background,
  foreground,
  dictionary = characters,
  row = false
} = {}, input) {
  return pipe(
    unless(
      is(String),
      () => { throw new TypeError(`\`input\` should be an \`String\``) }
    ),
    toUpper(),
    split(''),
    map(
      ifElse(
        has(__, dictionary),
        prop(__, dictionary),
        always(defaultTo([], dictionary.nochar))
      )
    ),
    map(
      map(join(''))
    ),
    ifElse(
      always(row),
      pipe(transpose(), map(join(''))),
      map(join('\n'))
    ),
    join('\n'),
    replace(/0/g, defaultTo(defaultTo('0', background), bg)),
    replace(/1/g, defaultTo(defaultTo('1', foreground), fg))
  )(input)
}

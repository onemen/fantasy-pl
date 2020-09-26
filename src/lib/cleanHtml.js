/**
 * @fix
 * invalid DOMNesting: Whitespace text nodes cannot appear as a child o
 *
 * clean html:
 * 1. remove all new line /\n/g -> ''
 * 2. remove all spaces between >< />\s+</g -> '><'
 * 3. remove all space after <em > /<em\s+>/g -> '<em>'
 * 4. remove all space after </em > /<\/em\s+>/g -> '</em>'
 * 5. replace all spaces with one space /\s{2,}/g -> ' '
 *
 */
export const cleanHtml = text => {
  return text
    .replace(/\n/g, '')
    .replace(/>\s+</g, '><')
    .replace(/<em\s+>/g, '<em>')
    .replace(/<\/em\s+>/g, '</em>')
    .replace(/\s{2,}/g, ' ');
};

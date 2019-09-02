import config from '../config';
/**
 * Checks str is a valid url or not
 * @param {String} str input str to be checked
 * @returns {Boolean} true if is valid url
 */
function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}

describe('Config file validation Test', () => {
  it('should url be a valid address', () => {
    expect(config.energy_service_url).not.toBeNull();
    expect(validURL(config.energy_service_url)).toBeTruthy();
  });
});

import debug from 'debug';

// default namespace
const DEFAULT_NAMESPACE = 'KiwiPower';

/**
 * log the data with specified namespace
 * @param  {...any} params data to be logged
 * @example
 * log('test-namespace', testData)
 * will log the testData under test-namespace
 * log(testData)
 * will use DEFAULT_NAMESPACE to log the testData
 */
export default function log(...params) {
  if (params.length < 1) {
    return null;
  }
  let namespace = DEFAULT_NAMESPACE;
  let data = [];
  if (params.length === 1) {
    data = params.slice(0);
  } else {
    [namespace, ...data] = params;
  }
  return debug(namespace)(...data);
}

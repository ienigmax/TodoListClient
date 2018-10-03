import { helper } from '@ember/component/helper';

export function indexPlus(params) {
  return parseInt(params) + 1;
}

export default helper(indexPlus);

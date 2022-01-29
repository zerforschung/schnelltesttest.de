import _ean_map from '../data/ean_map.json';
import _manual_map from '../data/manual_map.json';
import _all from '../data/all.json';

export const all: Record<string, TestData> = _all;
const ean_map: Record<string, string> = _ean_map;
const manual_map: Record<string, string> = _manual_map;
export const id_map: Record<string, string> = { ...ean_map, ...manual_map };

const inverted_id_map = Object.entries(id_map).reduce((ret, entry) => {
  const [key, value] = entry;
  const known_ids = ret[value] || [];
  ret[value] = [...known_ids, key];
  return ret;
}, {} as Record<string, string[]>);
console.log('inverted', inverted_id_map);
Object.keys(all).map((x) => {
  all[x].ids = inverted_id_map[all[x].at_nr] || [];
});
export type TestData = {
  at_nr: string;
  ref_nr: string;
  manufacturer: string;
  test_name: string;
  target_antigen: string;
  'sensitivity_cq<25': number;
  'sensitivity_cq25-30': number;
  'sensitivity_cq>30': number;
  sensitivity_total: number;
  ids?: string[];
  legal_threat?: string;
  notice?: string;
};

export function get_test(identifier: string): TestData | 'NO_DATA' | null {
  if (all.hasOwnProperty(identifier)) {
    return all[identifier];
  }
  if (id_map.hasOwnProperty(identifier)) {
    const at_nr = id_map[identifier];
    if (all.hasOwnProperty(at_nr)) {
      return all[at_nr];
    } else {
      return 'NO_DATA';
    }
  }
  return null;
}

function checkPrefixInObject(prefix: string, obj: Record<string, any>): boolean {
  for (const key of Object.keys(obj)) {
    if (key.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}
export function checkPrefix(prefix: string): boolean {
  return checkPrefixInObject(prefix, all) || checkPrefixInObject(prefix, id_map);
}

export function checkCode(code: string): string | null {
  const cleanedCode = code.replace(/^[-PZN]+/, '');

  // Match first zero and remove it.
  const withoutZeroPrefix = cleanedCode.replace(/^0/, '');
  const withZeroPrefix = '0' + withoutZeroPrefix;

  if (withoutZeroPrefix in all || withoutZeroPrefix in id_map) {
    return withoutZeroPrefix;
  }

  if (withZeroPrefix in all || withZeroPrefix in id_map) {
    return withZeroPrefix;
  }

  return null;
}

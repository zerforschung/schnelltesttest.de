import _ean_map from '../data/ean_map.json';
import _manual_map from '../data/manual_map.json';
import _all from '../data/all.json';

const all: Record<string, TestData> = _all;
const ean_map: Record<string, string> = _ean_map;
const manual_map: Record<string, string> = _manual_map;
const id_map: Record<string, string> = { ...ean_map, ...manual_map };

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
};

export function get_test(identifier: string): TestData | null {
  if (all.hasOwnProperty(identifier)) {
    return all[identifier];
  }
  if (id_map.hasOwnProperty(identifier)) {
    const at_nr = id_map[identifier];
    if (all.hasOwnProperty(at_nr)) {
      return all[at_nr];
    }
  }
  return null;
}

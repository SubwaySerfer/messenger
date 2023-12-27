type Indexed<T = any> = {
  [key in string]: T;
};
import { merge } from './merge';
// function merge(lhs: Indexed, rhs: Indexed): Indexed {
//   for (const p in rhs) {
//     if (!rhs.hasOwnProperty(p)) {
//       continue;
//     }
//     try {
//       if (rhs[p].constructor === Object) {
//         lhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
//       } else {
//         lhs[p] = rhs[p];
//       }
//     } catch (e) {
//       lhs[p] = rhs[p];
//     }
//   }
//   return lhs;
// }

function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  // Код
  if (typeof object !== 'object') {
    return object;
  }
  const res = path
    .split('.')
    .reduceRight((acc, cur) => ({ [cur]: acc }), value);
  return merge(object as Indexed, res as Indexed);
}

export default set;

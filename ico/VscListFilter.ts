import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function VscListFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 12v-1h4v1H6zM4 7h8v1H4V7zm10-4v1H2V3h12z"}}]})(props);
}
export default VscListFilter;

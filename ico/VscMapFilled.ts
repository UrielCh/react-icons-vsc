import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapFilled icon from VS Code Icons
 * @module
 */
export function VscMapFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 5.5V13L5.5 10.8125V3.3125L2 5.5Z"}},{tag:"path",attr:{d:"M9.5 12.6875V5.1875L6.5 3.3125V10.8125L9.5 12.6875Z"},child:[]},{tag:"path",attr:{d:"M10.5 12.6875V5.1875L14 3V10.5L10.5 12.6875Z"},child:[]}]})(props);
}
export default VscMapFilled;

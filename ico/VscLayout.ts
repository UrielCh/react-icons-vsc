import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layout icon from VS Code Icons
 * @module
 */
export function VscLayout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 2L2 3V13L3 14H7L8 13V3L7 2H3ZM3 13V3H7V13H3Z"}},{tag:"path",attr:{d:"M10 3L11 2H14L15 3V6L14 7H11L10 6V3ZM11 3V6H14V3H11Z"},child:[]},{tag:"path",attr:{d:"M10 10L11 9H14L15 10V13L14 14H11L10 13V10ZM11 10V13H14V10H11Z"},child:[]}]})(props);
}
export default VscLayout;

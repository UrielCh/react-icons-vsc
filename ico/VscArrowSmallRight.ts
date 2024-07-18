import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowSmallRight icon from VS Code Icons
 * @module
 */
export function VscArrowSmallRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8.64 5l2.5 2.5v.7l-2.5 2.5-.71-.7 1.64-1.65H4v-1h5.57L7.92 5.7l.72-.7z"}}]})(props);
}
export default VscArrowSmallRight;

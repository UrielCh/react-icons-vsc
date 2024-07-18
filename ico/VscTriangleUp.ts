import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TriangleUp icon from VS Code Icons
 * @module
 */
export function VscTriangleUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z"}}]})(props);
}
export default VscTriangleUp;

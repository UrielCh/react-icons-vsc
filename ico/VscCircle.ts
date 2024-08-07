import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Circle icon from VS Code Icons
 * @module
 */
export function VscCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm2.61-4a2.61 2.61 0 1 1-5.22 0 2.61 2.61 0 0 1 5.22 0zM8 5.246z"}}]})(props);
}
export default VscCircle;

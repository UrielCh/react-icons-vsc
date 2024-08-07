import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleSmallFilled icon from VS Code Icons
 * @module
 */
export function VscCircleSmallFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"}}]})(props);
}
export default VscCircleSmallFilled;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TriangleLeft icon from VS Code Icons
 * @module
 */
export function VscTriangleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.44 2l.56.413v11.194l-.54.393L5 8.373v-.827L10.44 2z"}}]})(props);
}
export default VscTriangleLeft;

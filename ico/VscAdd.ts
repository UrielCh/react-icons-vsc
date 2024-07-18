import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Add icon from VS Code Icons
 * @module
 */
export function VscAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"}}]})(props);
}
export default VscAdd;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu icon from VS Code Icons
 * @module
 */
export function VscMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"}}]})(props);
}
export default VscMenu;

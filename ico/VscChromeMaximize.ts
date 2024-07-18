import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChromeMaximize icon from VS Code Icons
 * @module
 */
export function VscChromeMaximize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"}}]})(props);
}
export default VscChromeMaximize;

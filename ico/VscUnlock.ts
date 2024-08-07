import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Unlock icon from VS Code Icons
 * @module
 */
export function VscUnlock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 7V5a3 3 0 0 1 5.83-1h1.044A4.002 4.002 0 0 0 4 5v2H3L2 8v6l1 1h10l1-1V8l-1-1H5zm6 1h2v6H3V8h8z"}}]})(props);
}
export default VscUnlock;

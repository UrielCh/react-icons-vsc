import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DebugBreakpointConditional icon from VS Code Icons
 * @module
 */
export function VscDebugBreakpointConditional(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm2 5v1H6V9h4zm0-3v1H6V6h4z"}}]})(props);
}
export default VscDebugBreakpointConditional;

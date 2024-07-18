import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DebugBreakpointFunction icon from VS Code Icons
 * @module
 */
export function VscDebugBreakpointFunction(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 4l4 6.905H4L8 4z"}}]})(props);
}
export default VscDebugBreakpointFunction;

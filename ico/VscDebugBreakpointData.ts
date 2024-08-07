import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DebugBreakpointData icon from VS Code Icons
 * @module
 */
export function VscDebugBreakpointData(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.238 8l-2.31 4H5.31L3 8l2.31-4h4.618l2.31 4z"}}]})(props);
}
export default VscDebugBreakpointData;

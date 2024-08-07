import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DebugLineByLine icon from VS Code Icons
 * @module
 */
export function VscDebugLineByLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 10V9h9v1H6zm4-4h5v1h-5V6zm5-3v1H6V3h9zm-9 9v1h9v-1H6z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1 2.795l.783-.419 5.371 3.581v.838l-5.371 3.581L1 9.957V2.795zm1.007.94v5.281l3.96-2.64-3.96-2.64z"},child:[]}]})(props);
}
export default VscDebugLineByLine;

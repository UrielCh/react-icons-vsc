import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ThreeBars icon from VS Code Icons
 * @module
 */
export function VscThreeBars(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"}}]})(props);
}
export default VscThreeBars;

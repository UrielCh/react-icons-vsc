import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutActivitybarLeft icon from VS Code Icons
 * @module
 */
export function VscLayoutActivitybarLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H4V2H14V14Z"}}]})(props);
}
export default VscLayoutActivitybarLeft;

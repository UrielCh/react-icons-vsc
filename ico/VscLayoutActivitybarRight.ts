import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutActivitybarRight icon from VS Code Icons
 * @module
 */
export function VscLayoutActivitybarRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H12V14H2Z"}}]})(props);
}
export default VscLayoutActivitybarRight;

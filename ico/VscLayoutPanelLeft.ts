import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutPanelLeft icon from VS Code Icons
 * @module
 */
export function VscLayoutPanelLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 2L2 1H14L15 2V14L14 15H2L1 14V2ZM2 2V10H10V2H2ZM11 2V14H14V2H11Z"}}]})(props);
}
export default VscLayoutPanelLeft;

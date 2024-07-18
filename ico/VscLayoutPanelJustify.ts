import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutPanelJustify icon from VS Code Icons
 * @module
 */
export function VscLayoutPanelJustify(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 10V2H4V10H2ZM5 10V2H11V10H5ZM12 10V2H14V10H12Z"}}]})(props);
}
export default VscLayoutPanelJustify;

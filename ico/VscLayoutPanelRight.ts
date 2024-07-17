import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function VscLayoutPanelRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 2L2 1H14L15 2V14L14 15H2L1 14V2ZM2 2V14H5V2H2ZM6 2V10H14V2H6Z"}}]})(props);
}
export default VscLayoutPanelRight;

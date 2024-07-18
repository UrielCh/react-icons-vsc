import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Music icon from VS Code Icons
 * @module
 */
export function VscMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14 7H13V9.49982C12.5822 9.18597 12.0628 9 11.5 9C10.1193 9 9 10.1193 9 11.5C9 12.8807 10.1193 14 11.5 14C12.8807 14 14 12.8807 14 11.5V7ZM11.5 10C12.3284 10 13 10.6716 13 11.5C13 12.3284 12.3284 13 11.5 13C10.6716 13 10 12.3284 10 11.5C10 10.6716 10.6716 10 11.5 10Z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M13.4688 2.00098L5.46881 2.50098L5 3V10.4998C4.58217 10.186 4.0628 10 3.5 10C2.11929 10 1 11.1193 1 12.5C1 13.8807 2.11929 15 3.5 15C4.88071 15 6 13.8807 6 12.5V6.46974L13 6.03224V7H14V2.5L13.4688 2.00098ZM13 3.03223V5.03029L6 5.46779V3.46973L13 3.03223ZM3.5 11C4.32843 11 5 11.6716 5 12.5C5 13.3284 4.32843 14 3.5 14C2.67157 14 2 13.3284 2 12.5C2 11.6716 2.67157 11 3.5 11Z"},child:[]}]})(props);
}
export default VscMusic;

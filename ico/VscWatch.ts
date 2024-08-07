import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Watch icon from VS Code Icons
 * @module
 */
export function VscWatch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7.5 9h2V8H8V5.5H7v3l.5.5z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5.5 3.669A4.998 4.998 0 0 0 3 8a4.998 4.998 0 0 0 2.5 4.331V14.5l.5.5h4l.5-.5v-2.169A4.998 4.998 0 0 0 13 8a4.998 4.998 0 0 0-2.5-4.331V1.5L10 1H6l-.5.5v2.169zM12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"},child:[]}]})(props);
}
export default VscWatch;

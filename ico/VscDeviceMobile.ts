import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeviceMobile icon from VS Code Icons
 * @module
 */
export function VscDeviceMobile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4.5 1h8l.5.5v13l-.5.5h-8l-.5-.5v-13l.5-.5zM5 14h7V2H5v12zm2.5-2h2v1h-2v-1z"}}]})(props);
}
export default VscDeviceMobile;

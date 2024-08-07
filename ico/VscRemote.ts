import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Remote icon from VS Code Icons
 * @module
 */
export function VscRemote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M12.904 9.57L8.928 5.596l3.976-3.976-.619-.62L8 5.286v.619l4.285 4.285.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5 3 5.619z"}}]})(props);
}
export default VscRemote;

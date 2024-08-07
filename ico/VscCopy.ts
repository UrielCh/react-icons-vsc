import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Copy icon from VS Code Icons
 * @module
 */
export function VscCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3 1L2 2v10l1 1V2h6.414l-1-1H3z"},child:[]}]})(props);
}
export default VscCopy;

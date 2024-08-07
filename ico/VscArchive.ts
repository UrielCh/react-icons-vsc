import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archive icon from VS Code Icons
 * @module
 */
export function VscArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14.5 1h-13l-.5.5v3l.5.5H2v8.5l.5.5h11l.5-.5V5h.5l.5-.5v-3l-.5-.5zm-1 3H2V2h12v2h-.5zM3 13V5h10v8H3zm8-6H5v1h6V7z"}}]})(props);
}
export default VscArchive;

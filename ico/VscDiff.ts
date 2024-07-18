import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diff icon from VS Code Icons
 * @module
 */
export function VscDiff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 3.5l.5-.5h5l.5.5v9l-.5.5h-5l-.5-.5v-9zM3 12h4V6H3v6zm0-7h4V4H3v1zm6.5-2h5l.5.5v9l-.5.5h-5l-.5-.5v-9l.5-.5zm.5 9h4v-2h-4v2zm0-4h4V4h-4v4z"}}]})(props);
}
export default VscDiff;

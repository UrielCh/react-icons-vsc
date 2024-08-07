import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FoldDown icon from VS Code Icons
 * @module
 */
export function VscFoldDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14.207 1.707L13.5 1l-6 6-6-6-.707.707 6.353 6.354h.708l6.353-6.354zm0 6L13.5 7l-6 6-6-6-.707.707 6.353 6.354h.708l6.353-6.354z"}}]})(props);
}
export default VscFoldDown;

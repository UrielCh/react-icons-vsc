import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FoldUp icon from VS Code Icons
 * @module
 */
export function VscFoldUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 7.4l.7.7 6-6 6 6 .7-.7L8.1 1h-.7L1 7.4zm0 6l.7.7 6-6 6 6 .7-.7L8.1 7h-.7L1 13.4z"}}]})(props);
}
export default VscFoldUp;

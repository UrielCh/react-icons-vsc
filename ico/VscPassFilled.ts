import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PassFilled icon from VS Code Icons
 * @module
 */
export function VscPassFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-1.02-4.13h-.71L4 8.6l.71-.71 1.92 1.92 4.2-4.21.71.71-4.56 4.56z"}}]})(props);
}
export default VscPassFilled;

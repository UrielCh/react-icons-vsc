import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RunAbove icon from VS Code Icons
 * @module
 */
export function VscRunAbove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.77 1.01L1 1.42v12l.78.42 9-6v-.83l-9.01-6zM2 12.49V2.36l7.6 5.07L2 12.49zM12.15 8h.71l2.5 2.5-.71.71L13 9.56V15h-1V9.55l-1.65 1.65-.7-.7 2.5-2.5z"}}]})(props);
}
export default VscRunAbove;

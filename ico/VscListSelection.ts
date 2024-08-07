import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListSelection icon from VS Code Icons
 * @module
 */
export function VscListSelection(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"}}]})(props);
}
export default VscListSelection;

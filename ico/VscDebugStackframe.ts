import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DebugStackframe icon from VS Code Icons
 * @module
 */
export function VscDebugStackframe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.5 7.15l-4.26-4.74L9.31 2H4.25L3 3.25v9.48l1.25 1.25h5.06l.93-.42 4.26-4.74V7.15zm-5.19 5.58H4.25V3.25h5.06l4.26 4.73-4.26 4.75z"}}]})(props);
}
export default VscDebugStackframe;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Reactions icon from VS Code Icons
 * @module
 */
export function VscReactions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M12 7.5c0 .169-.01.336-.027.5h1.005A5.5 5.5 0 1 0 8 12.978v-1.005A4.5 4.5 0 1 1 12 7.5zM5.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 2.5c.712 0 1.355-.298 1.81-.776l.707.708A3.49 3.49 0 0 1 7.5 10.5a3.49 3.49 0 0 1-2.555-1.108l.707-.708A2.494 2.494 0 0 0 7.5 9.5zm2-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2.5 3h1v2h2v1h-2v2h-1v-2h-2v-1h2v-2z"}}]})(props);
}
export default VscReactions;

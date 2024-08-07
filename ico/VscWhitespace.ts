import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Whitespace icon from VS Code Icons
 * @module
 */
export function VscWhitespace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 2V1H6.5a3.5 3.5 0 0 0 0 7H8v5H7v1h5v-1h-1V2h1zM8 7H6.5a2.5 2.5 0 1 1 0-5H8v5zm2 6H9V2h1v11z"}}]})(props);
}
export default VscWhitespace;

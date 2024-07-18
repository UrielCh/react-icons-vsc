import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SplitVertical icon from VS Code Icons
 * @module
 */
export function VscSplitVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z"}}]})(props);
}
export default VscSplitVertical;

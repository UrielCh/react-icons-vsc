import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SymbolArray icon from VS Code Icons
 * @module
 */
export function VscSymbolArray(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1.5 2l-.5.5v11l.5.5H4v-1H2V3h2V2H1.5zm13 12l.5-.5v-11l-.5-.5H12v1h2v10h-2v1h2.5z"}}]})(props);
}
export default VscSymbolArray;

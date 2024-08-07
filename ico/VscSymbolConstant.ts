import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SymbolConstant icon from VS Code Icons
 * @module
 */
export function VscSymbolConstant(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 6h8v1H4V6zm8 3H4v1h8V9z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z"},child:[]}]})(props);
}
export default VscSymbolConstant;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EmptyWindow icon from VS Code Icons
 * @module
 */
export function VscEmptyWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4 4h3v1H4v3H3V5H0V4h3V1h1v3zM1 14.5V9h1v5h12V7H8V6h6V4H8V3h6.5l.5.5v11l-.5.5h-13l-.5-.5z"}}]})(props);
}
export default VscEmptyWindow;

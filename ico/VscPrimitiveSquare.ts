import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PrimitiveSquare icon from VS Code Icons
 * @module
 */
export function VscPrimitiveSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3.5 4l.5-.5h8l.5.5v8l-.5.5H4l-.5-.5V4zm1 .5v7h7v-7h-7z"}}]})(props);
}
export default VscPrimitiveSquare;

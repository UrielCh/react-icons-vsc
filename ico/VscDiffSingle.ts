import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DiffSingle icon from VS Code Icons
 * @module
 */
export function VscDiffSingle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M10.7099 1.28902L13.7099 4.28902L13.9999 4.99902V13.999L12.9999 14.999H3.99994L2.99994 13.999V1.99902L3.99994 0.999023H9.99994L10.7099 1.28902ZM3.99994 13.999H12.9999V4.99902L9.99994 1.99902H3.99994V13.999ZM8 5.99902H6V6.99902H8V8.99902H9V6.99902H11V5.99902H9V3.99902H8V5.99902ZM6 10.999H11V11.999H6V10.999Z"}}]})(props);
}
export default VscDiffSingle;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MultipleWindows icon from VS Code Icons
 * @module
 */
export function VscMultipleWindows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M6 1.5l.5-.5h8l.5.5v7l-.5.5H12V8h2V4H7v1H6V1.5zM7 2v1h7V2H7zM1.5 7l-.5.5v7l.5.5h8l.5-.5v-7L9.5 7h-8zM2 9V8h7v1H2zm0 1h7v4H2v-4z"}}]})(props);
}
export default VscMultipleWindows;

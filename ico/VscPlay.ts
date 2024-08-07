import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Play icon from VS Code Icons
 * @module
 */
export function VscPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z"}}]})(props);
}
export default VscPlay;

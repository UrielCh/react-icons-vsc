import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Briefcase icon from VS Code Icons
 * @module
 */
export function VscBriefcase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.5 4H11V2.5l-.5-.5h-5l-.5.5V4H1.5l-.5.5v8l.5.5h13l.5-.5v-8l-.5-.5zM6 3h4v1H6V3zm8 2v.76L10 8v-.5L9.51 7h-3L6 7.5V8L2 5.71V5h12zM9 8v1H7V8h2zm-7 4V6.86l4 2.29v.35l.5.5h3l.5-.5v-.31l4-2.28V12H2z"}}]})(props);
}
export default VscBriefcase;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Snake icon from VS Code Icons
 * @module
 */
export function VscSnake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5Z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5.5 1C4.11929 1 3 2.11929 3 3.5C3 4.00954 3.15244 4.48348 3.4142 4.8787L2.29289 6H0.5V7H2V8.5H3V6.70711L4.1213 5.5858C4.51652 5.84756 4.99046 6 5.5 6H7V8H6C4.89543 8 4 8.89543 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14H13C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10C13 8.89543 12.1046 8 11 8V4.5C11 2.567 9.433 1 7.5 1H5.5ZM4 3.5C4 2.67157 4.67157 2 5.5 2H7.5C8.88071 2 10 3.11929 10 4.5V8.5L10.5 9H11C11.5523 9 12 9.44772 12 10V11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5V10C5 9.44772 5.44772 9 6 9H7.5L8 8.5V5.5L7.5 5H5.5C4.67157 5 4 4.32843 4 3.5Z"},child:[]}]})(props);
}
export default VscSnake;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ErrorSmall icon from VS Code Icons
 * @module
 */
export function VscErrorSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.17699 10.1051L8.00026 8.92835L6.82348 10.1051L5.89526 9.17693L7.07205 8.00014L5.89526 6.82335L6.82348 5.89514L8.00026 7.07193L9.17699 5.8952L10.1052 6.82342L8.92848 8.00014L10.1052 9.17687L9.17699 10.1051Z"}},{tag:"path",attr:{d:"M12.0002 8C12.0002 10.2091 10.2094 12 8.00024 12C5.79111 12 4.00024 10.2091 4.00024 8C4.00024 5.79086 5.79111 4 8.00024 4C10.2094 4 12.0002 5.79086 12.0002 8ZM11.0002 8C11.0002 6.34315 9.6571 5 8.00024 5C6.34339 5 5.00024 6.34315 5.00024 8C5.00024 9.65685 6.34339 11 8.00024 11C9.6571 11 11.0002 9.65685 11.0002 8Z"},child:[]}]})(props);
}
export default VscErrorSmall;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dashboard icon from VS Code Icons
 * @module
 */
export function VscDashboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M3.889 2.095a6.5 6.5 0 1 1 7.222 10.81A6.5 6.5 0 0 1 3.89 2.094zm.555 9.978A5.5 5.5 0 0 0 7.5 13 5.506 5.506 0 0 0 13 7.5a5.5 5.5 0 1 0-8.556 4.573zM10.294 4l.706.707-2.15 2.15a1.514 1.514 0 1 1-.707-.707L10.293 4zM7.221 7.916a.5.5 0 1 0 .556-.832.5.5 0 0 0-.556.832zm4.286-2.449l-.763.763c.166.403.253.834.255 1.27a3.463 3.463 0 0 1-.5 1.777l.735.735a4.477 4.477 0 0 0 .274-4.545h-.001zM8.733 4.242A3.373 3.373 0 0 0 7.5 4 3.5 3.5 0 0 0 4 7.5a3.46 3.46 0 0 0 .5 1.777l-.734.735A4.5 4.5 0 0 1 9.5 3.473l-.767.769z"}}]})(props);
}
export default VscDashboard;

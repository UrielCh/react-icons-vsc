import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function VscTriangleDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z"}}]})(props);
}
export default VscTriangleDown;

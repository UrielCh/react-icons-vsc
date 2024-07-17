import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function VscListFlat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"rect",attr:{x:"2",y:"9","width":"9","height":"1"}},{tag:"rect",attr:{x:"2",y:"12","width":"8","height":"1"},child:[]},{tag:"rect",attr:{x:"2",y:"6","width":"12","height":"1"},child:[]},{tag:"rect",attr:{x:"2",y:"3","width":"11","height":"1"},child:[]}]})(props);
}
export default VscListFlat;

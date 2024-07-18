import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Exclude icon from VS Code Icons
 * @module
 */
export function VscExclude(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M9.412 1H6.588l-.484 2.423-2.056-1.37-1.996 1.995 1.37 2.056L1 6.588v2.824l2.423.484-1.37 2.056 1.995 1.996 2.056-1.37L6.588 15h2.083a4.526 4.526 0 0 1-.917-1.005h-.342l-.288-1.441a4.473 4.473 0 0 1-.067-.334l-.116-.583-.764-.316-2 1.334-.832-.831L4.68 9.823l-.316-.764-2.358-.471V7.412l2.358-.471.316-.764-1.334-2 .831-.832 2 1.335.764-.316.471-2.358h1.176l.471 2.358.764.316 2-1.334.832.831-1.334 2.001.316.764.582.116c.113.018.225.04.335.067l1.441.288v.342c.38.254.719.563 1.005.917V6.588l-2.422-.484 1.37-2.056-1.996-1.996-2.056 1.37L9.412 1zM8 6a2 2 0 0 1 1.875 1.302 4.46 4.46 0 0 0-.9.473 1 1 0 1 0-1.2 1.2 4.46 4.46 0 0 0-.473.9A2 2 0 0 1 8 6zm1.28 2.795a3.5 3.5 0 1 1 4.44 5.41 3.5 3.5 0 0 1-4.44-5.41zM9 11v1h5v-1H9z"}}]})(props);
}
export default VscExclude;

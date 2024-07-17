# VS Code Icons icons for deno / Preact

**License** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://github.com/microsoft/vscode-codicons](https://github.com/microsoft/vscode-codicons)

[See available icons here](https://react-icons.deno.dev/vsc)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/vsc":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-vsc@1.0.10/mod.ts",
    "react-icons/vsc/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-vsc@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib vsc

```ts
import { VscAccount } from "https://deno.land/x/react_icons_vsc@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { VscAccount } from "react-icons/vsc"
```

## import a single icon, downloading just one icon

```ts
import { VscAccount } from "react-icons/vsc/VscAccount.ts"
```

or using default export

```ts
import VscAccount from "react-icons/vsc/VscAccount.ts"
```


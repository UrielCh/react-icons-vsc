# VS Code Icons icons for deno / Preact

**License** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://github.com/microsoft/vscode-codicons](https://github.com/microsoft/vscode-codicons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=vsc)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/vsc":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-vsc@1.0.1/mod.ts",
    "react-icons/vsc/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-vsc/ico/",
  }
}
```

## Direct import sample

`import { VscAccount } from "https://deno.land/x/react_icons_vsc@1.0.1/mod.ts"`

## import_map import sample

`import { VscAccount } from "react-icons/vsc"`

## minimal import

`import { VscAccount } from "react-icons/vsc/VscAccount.ts"`

## minimal import default

`import VscAccount from "react-icons/vsc/VscAccount.ts"`


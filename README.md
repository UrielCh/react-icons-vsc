# VS Code Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/vsc)](https://jsr.io/@preact-icons/vsc)

**License** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://github.com/microsoft/vscode-codicons](https://github.com/microsoft/vscode-codicons)

[See available icons here](https://react-icons.deno.dev/vsc)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/vsc": "jsr:@preact-icons/vsc@^1.0.11/mod.ts",
    "react-icons/vsc/": "jsr:@preact-icons/vsc@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib vsc

```ts
import { VscAccount } from "jsr:preact-icons/vsc@1.0.11/mod.ts"
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


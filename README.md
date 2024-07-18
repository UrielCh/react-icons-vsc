# VS Code Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/vsc)](https://jsr.io/@preact-icons/vsc)

**License** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

**Project** [https://github.com/microsoft/vscode-codicons](https://github.com/microsoft/vscode-codicons)

[See available icons here](https://react-icons.deno.dev/vsc)

## install the module

```bash
deno add @preact-icons/vsc
dnpx jsr add @preact-icons/vsc
pnpm dlx jsr add @preact-icons/vsc
bunx jsr add @preact-icons/vsc
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { VscAccount } from "@preact-icons/vsc"
```

## import a single icon, downloading just one icon

```ts
import { VscAccount } from "react-icons/vsc/VscAccount"
```

or using default export

```ts
import VscAccount from "react-icons/vsc/VscAccount.ts"
```

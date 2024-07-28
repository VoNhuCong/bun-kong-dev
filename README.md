# be

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

"dev": "bun run --watch index.ts"


pm2 start --name "onlybun" "bun run dev"
## Running this project

To run Brave while bypassing CORS restrictions:
```bash
brave-browser --args --user-data-dir="$HOME/brave-dev-data" --disable-web-security "file:///home/beemo/projects/miguel-rivas.github.io/2025/index.html"
```

## Storybook
```bash
npm run sb
```

## Storybook::Build
```bash
npm run sb-b
```

## Vitest
```bash
npm run test
```

## Generate Github Log
in order to be able to access ituhb you are gonna need a token and an `.env` file

`.env` file
```
GITHUB_TOKEN=ghp_yourActualGitHubTokenHere
```

generating log:
```bash
npm run gitlog
```
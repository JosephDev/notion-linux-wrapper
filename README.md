# Notion.so Linux Desktop application

[Notion.so](https://www.notion.so) doesn't support an official client for linux yet. This project is simply wrapping Notion.so web application with Electron.

## Screenshot
![notion_linux_screenshot](resources/screenshot.png?raw=true "Notion.so Linux App")


## Prebuild version - Debian, Ubuntu, Mint

[Download .deb file](https://github.com/JosephDev/notion-linux-wrapper/tree/master/dist/installers) and install it. DONE! :tada: :confetti_ball:

## Verified Environment
- Ubuntu 16.04
- Ubuntu 18.04
- Linux Mint 19.01


## Build in your local machine

### Prerequisites

1. Git
2. Node: any 8.x version starting with 8.4.0 or greater
3. Yarn: See Yarn website for installation instructions

### Installation

1. Clone project

   ``` bash
   git clone https://github.com/JosephDev/notion-linux-wrapper
   ```

2. Install node packages

   ``` bash
   yarn
   ```

3. Running locally

   ``` bash
   yarn start
   ```

4. Build in your local machine

   ``` bash
   yarn build
   ```

   If build successfully, deb file is avaiable under `dist/installers`.

   
## License

MIT licensed, as found in the [LICENSE.md](./LICENSE.md) file.

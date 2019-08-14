# Notion.so Linux Desktop application

[Notion.so](https://www.notion.so) doesn't have offitial client for linux yet. This project is wrapping Notion.so web application with electron.

![notion_linux_screenshot](resources/screenshot.png?raw=true "Notion.so Linux App")

## How to use

### Prebuild version

[Download deb file](https://github.com/JosephDev/notion-linux-wrapper/tree/master/dist/installers) and install. DONE! :tada: :confetti_ball:

### Build yourself

#### Prerequisites

1. Git
2. Node: any 8.x version starting with 8.4.0 or greater
3. Yarn: See Yarn website for installation instructions

#### Installation

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

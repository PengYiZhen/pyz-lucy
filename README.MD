# Pyz-Lucy Project
## Lottery Program

[点击跳转至中文使用文档](https://github.com/PengYiZhen/pyz-lucy/master/README-ZH_CN.MD)

## Introduction

* **File Mode**: Year-end party lottery program with 3D sphere, supports prize configuration, Excel import of participants, and Excel export of results.
* **Database Mode**: Real-time user data locking and loading via MySQL.

The program automatically switches between Excel and MySQL based on detected database information.

If this program helps you, please give it a star! 😊

## Technology

- Backend: Node + Express + Mysql2 + PyzSecurity
- Frontend: Three.js for 3D effects

## Installation

```shell
npm install
```

## Start

```shell
npm run dev
```

The frontend uses Three.js for the 3D lottery ball, leveraging official Three.js 3D examples.

## Features

1. Real-time Excel download of lottery results.
2. Those already drawn won't participate again; redraw if a winner isn't present.
3. Data persists after server restarts; reset via the interface button.
4. Configurable number of prizes per draw.
5. After all prizes are drawn, special prizes can be drawn one at a time.

## Preview

![lottery.gif](https://raw.githubusercontent.com/moshang-xc/blog/master/share/lottery.gif)
![index.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/index.jpg)
![start.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/start.jpg)
![end.jpg](https://raw.githubusercontent.com/moshang-xc/blog/master/share/end.jpg)

## Installation Steps

```
git clone https://github.com/PengYiZhen/pyz-lucy.git

cd pyz-lucy

# Backend dependencies
cd server
npm install
or
bun install

# Frontend dependencies
cd ../front
npm install
or
bun install

# Build
npm run build

# Run
npm run serve

# Development
npm run dev
```

## Directory Structure

```
pyz-lucy
├── front
│   ├── src
│   │   ├── lottery
│   │   │   └── index.js
│   │   ├── lib
│   │   ├── img
│   │   ├── css
│   │   └── data
│   ├── package.json
│   └── webpack.config.js
├── server
│   ├── config.js
│   ├── server.js
│   └── package.js
```

> 1. `front`: Frontend directory
> 2. `package.json`: Web project configuration
> 3. `webpack.config.js`: Build configuration
> 4. `server`: Server directory
> 5. `config.js`: Prize information configuration

## Database

```
pyz-lucy
├── sql
```

## Configuration

### User Information

Located in `server/data/user.xlsx`. Follow the format without changing the filename or headers. Can also be edited in the database.

### Prize Configuration

Located in `server/config.js`. Do not change the filename.

```js
let prizes = [{
        type: 0,
        count: 1000,
        title: "",
        text: "Special Prize"
    },
    {
        type: 1,
        count: 2,
        text: "Grand Prize",
        title: "Mystery Gift",
        img: "../img/secrit.jpg"
    },
    {
        type: 2,
        count: 5,
        text: "First Prize",
        title: "Mac Pro",
        img: "../img/mbp.jpg"
    }
];
```

### Draw Quantity Configuration

`EACH_COUNT` configures the number of draws per prize.

```js
const EACH_COUNT = [1, 1, 5];
```

### Company Logo

Displayed on the lottery card.

```js
const COMPANY = "PyzLucy";
```

## License

MIT
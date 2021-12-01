### 终极操作
```
# 查看Node版本和NPM版本确认已安装Node环境
node -v
npm -v

# 安装nrm并设置NPM的淘宝镜像
npm i -g nrm
nrm use taobao

# 设置依赖安装过程中内部模块下载Node的淘宝镜像
npm config set disturl https://npm.taobao.org/mirrors/node/

# 设置常用模块的淘宝镜像
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set puppeteer_download_host https://npm.taobao.org/mirrors/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set sentrycli_cdnurl https://npm.taobao.org/mirrors/sentry-cli/
npm config set sqlite3_binary_site https://npm.taobao.org/mirrors/sqlite3/
npm config set python_mirror https://npm.taobao.org/mirrors/python/
```

### 针对node-sass的情况
```
# package.json中加入npm scripts
{
  "scripts": {
    "reinstall": "rimraf node_modules && npm i"
  }
}

# 安装rimraf并设置package.json
npm i -g rimraf

# 安装前请确保当前的Node版本和node-sass版本已兼容

# 安装失败
npm cache clean -f
npm rebuild node-sass 或 npm run reinstall

```





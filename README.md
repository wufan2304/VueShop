# vueshop

> 本来是要做一个商店的web项目，结果做到一半的时候，想到了瀑布流的实现，试了好多种方法，也尝试了好多库，最后自己用js手动实现了一个瀑布流的项目。然后这个项目就这样保留着吧。

## 实现原理

> 通过var img = new Image() 方法来创建imgDOM元素，设置img.src = 'xxx'， 并设置其onload方法，在回调中获取图片的真实大小

> 在父元素中设置列的个数，列的宽度，列的间距，图片的上下间距，并创建一个数组来保存当前图片所加载的位置的最大高度。

> 对每一张图片都进行缩放，计算其应该缩放的比例，缩放后应放在哪一列，然后设置其top，left, width, height。

## 图片来源

> 由于是个人开发的项目，图片是通过解析www.pexels.com的网站得到的，然后截取其中图片的src属性，将其放置在一个数组内部。

> 另外，感谢www.pexels.com的图片源

## 后续计划

> 将这个项目进行封装，接口就是一个数组，用于存储图片的src，然后自动更新到vue的模板中。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <ul>PC产品
          <li>数据统计</li>
          <li>数据预测</li>
          <li>流量分析</li>
          <li>广告发布</li>
        </ul>
      </div>
      <div class="index-left-block">
        <h2>最新产品</h2>
        <ul>应用类
          <li>91助手</li>
          <li>产品助手</li>
          <li>智能地图</li>
          <li>团队语音</li>
        </ul>
      </div>
      <button @click="getPictures">Get Pictures</button>
      <button @click="addImages">Add Images</button>
    </div>
    <div class="index-right">
      <!-- <img v-for="(item, index) in pictures_src" :key="index" :src="item" alt="图片"> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'

const columnWidth = 200
const columnDistance = 10
const rowDistance = 10
export default {
  name: 'indexpage',
  data () {
    return {
      pictures: [],
      pictures_src: [],
      columnHeight: [0, 0, 0, 0],
      page: 0, // 已经加载的页数，即从服务器请求的图片的页数
      picLoadedNum: 0 // 已经加载的图片
    }
  },
  methods: {
    getPictures () {
    // var data = axios.get('/api/?page=2&format=js&seed=2017-08-18%2015:40:58%20+0000')
    // var data = axios.get('/api/new-photos')
      this.page += 1
      console.log('page = ' + this.page)
      // var d = new Date()
      // var timeString = d.getFullYear() + '-' + (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' + d.getDate() + '%20' + d.toTimeString().slice(0, 8) + '%20+0000'
      // var url = '/api/?page=' + this.page + '&format=js&seed=' + timeString
      axios.get('/api/?page=' + this.page).then((res) => {
        var that = this
        res.data.replace(/<img [^>]*src=['"]https:\/\/images\.pexels\.com([^'"]+)[^>]*>/gi, function (match, capture) {
          // var url = 'https' + capture.replace(/350/, '150')
          var url = 'https://images.pexels.com' + capture
          that.pictures.push(url)
          that.pictures_src.push(url)
          // console.log(url)
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    addImage (src) {
      let realHeight, realWidth
      var img = new Image()
      img.onload = () => {
        realHeight = img.height
        realWidth = img.width
        // console.log(realHeight, realWidth)
        let imgPos = this.calPosition(realWidth, realHeight)
        img.style.top = imgPos.top + 'px'
        img.style.left = imgPos.left + 'px'
        img.style.width = imgPos.width + 'px'
        img.style.height = imgPos.height + 'px'
        img.style.position = 'absolute'
        $('.index-right').append(img)
        this.picLoadedNum ++
        // $('.index-right').style.height = Math.max.apply(null, this.columnHeight)
      }
      img.src = src
    },
    calPosition (width, height) {
      var scale = width / columnWidth
      var colmin = this.columnHeight.indexOf(Math.min.apply(null, this.columnHeight))
      // console.log('scale = ', scale)
      // console.log('colmin = ', colmin)
      var pos = {
        top: this.columnHeight[colmin],
        left: colmin * (columnDistance + columnWidth) + columnDistance,
        width: columnWidth,
        height: height / scale
      }
      this.columnHeight[colmin] += (height / scale + rowDistance)
      // console.log(this.columnHeight)
      return pos
    },
    addImages () {
      for (var i = 0; i < this.pictures_src.length; i++) {
        this.addImage(this.pictures_src[i])
      }
    }

  },
  mounted () {
    this.getPictures()
    this.addImages()
  }
}
</script>
<style lang="sass" scoped>
.index-wrap
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  .index-left
    width: 200px;
    display: inline-block;
    vertical-align: top;
    button
      margin-left: 20px;
    .index-left-block
      margin: 20px;
      box-shadow: 0 0 10px 5px #ddd;
      h2
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
      ul
        padding: 10px 15px;
        li
          padding: 5px;
  .index-right
    box-shadow: 0 0 10px 5px #ddd;
    width: calc(100% - 240px);
    // display: inline-block;
    float: right;
    margin: 20px;
    overflow: auto;
    position: relative;
    min-height: 500px;
    img
      position: absolute;


</style>

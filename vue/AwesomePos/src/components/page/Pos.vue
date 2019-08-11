<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs >
          <el-tab-pane label="点餐">
            <!-- 订单详情 -->
            <el-table :data="tableData" style="width: 100%;" max-height="300">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 订单总金额 -->
            <div class="totalDiv"> 
              <small>数量：</small> {{totalCount}}种 &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalPrice}}元
            </div>
            <!-- 操作 -->
            <div class="div-btn">
              <el-button type="primary">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span='17'>
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-lists">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data () {
    return {
      tableData: [], // 订单详情商品列表数据
      oftenGoods: [],// 常用商品列表数据
      type0Goods:[],// 汉堡
      type1Goods:[], // 小食
      type2Goods:[], // 饮料
      type3Goods:[], // 套餐
      totalPrice: 0,
      totalCount:0,
    }
  },
  created () {
    axios.get('https://www.easy-mock.com/mock/5d50257b710c4d0d04d78d1c/awesompos/awesomePos')
    .then(res => {
      this.oftenGoods = res.data.data.oftenGoods;
      this.type0Goods = res.data.data.type0Goods;
      this.type1Goods = res.data.data.type1Goods;
      this.type2Goods = res.data.data.type2Goods;
      this.type3Goods = res.data.data.type3Goods;
      // console.log(res)
    })
    .catch( err => {
      // console.log(err)
      alert('网络错误，不能访问')
    })
  },
  mounted () {
    var orderHight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHight + 'px '
  },
  methods: {
    // 增加
    addOrderList(goods) {
      // 判断商品是否存在订单列表中
      let isHave = false;
      for(let i = 0; i < this.tableData.length; i++) {
        if(this.tableData[i].goodsId == goods.goodsId) {
          isHave = true
        }
      }
      // 根据判断的值编写业务逻辑 有则 + 1 没有就 push 进入数组
      if(isHave) {
        // 改变列表中商品的数量
        let arr = this.tableData.filter(a => a.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
            goodsId: goods.goodsId,
            goodsName: goods.goodsName,
            price: goods.price,
            count: 1
          }
        this.tableData.push(newGoods)
      }
      this.getTotalPrice()
    },
    // 删除单个
    delSingleGoods(goods) {
       this.tableData = this.tableData.filter(a => a.goodsId != goods.goodsId)
       this.getTotalPrice()
    },
    // 删除所有的商品
    delAllGoods() {
      this.tableData = []
      this.totalPrice = 0
      this.totalCount = 0
    },
    // 模拟结账
    checkout() {
      if(this.totalCount != 0) {
        this.tableData = []
        this.totalPrice = 0
        this.totalCount = 0
        this.$message({
          message: '结账成功，恭喜你又让我赚了一笔钱',
          type: 'success'
        })
      } else {
        this.$message.error('不空空结，请老板您先选择商品')
      }
    },
    getTotalPrice() {
      this.totalPrice = 0;
      this.totalCount = 0;
      if(this.tableData) {
        // 计算总金额 和 总数量
      this.tableData.forEach((element) => {
        this.totalCount += element.count
        this.totalPrice = this.totalPrice + (element.price * element.count)
      })
      }
    }
  }
}
</script>

<style>
.pos-order{
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda
}

.totalDiv{
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}

.div-btn{
  margin-top: 15px;
}

.title{
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-lists ul li{
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  cursor: pointer;
}
.o-price{
  color: #5887ff;
}

.goods-type{
  clear: both;
  padding-left: 10px;
}
.cookList li{
  list-style: none;
  width:23%;
  border:1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color:#fff;
  padding: 2px;
  float:left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span{
  display: block;
  float:left;
}
.foodImg{
  width: 40%;
}
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color:brown;

}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top:10px;
}
</style>

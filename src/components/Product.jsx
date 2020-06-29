import React from 'react'
import { Link, withRouter, routerRedux } from 'dva/router'
import * as api from '../services/example'

class Product extends React.Component {

  componentDidMount() {
    // api.getProduct()
    // .then(res => {
    //   console.log(res)
    // })
    api.posts()
    .then(res => {
      console.log(res.data)
    })
  }

  clickProductList = (event) => {

    const currentProduct = {
      name: '玉米1'
    }

    this.props.dispatch({
      type: 'product/updateList',
      payload: currentProduct
    })
  }

  clickProductListAsync = (event) => {
    const currentProduct = {
      name: '玉米2'
    }

    this.props.dispatch({
      type: 'product/updateListAsync',
      payload: currentProduct
    })
  }

  clickGoToHandler = (event) => {
    // console.log(this.props.history)
    this.props.history.push('/')
  }

  clickGoToReduxHandler = (event) => {
    console.log(routerRedux, 'routerRedux')
    this.props.dispatch(routerRedux.push('/'))
  }

  render() {
    const {productList} = this.props.productList
    console.log(this.props.dispatch, 'dispatch')
    return (
      <div>
        Product商品：{ this.props.title }
        <ul>
          {
            productList.map((element, index) => {
              return <li key={index}>{ element.name }</li>
            })
          }
        </ul>
        <button onClick={this.clickProductList}>获取商品列表</button>
        <button onClick={this.clickProductListAsync}>获取商品Async</button>
        <Link to="/">去首页</Link>
        <button onClick={this.clickGoToHandler}>去首页</button>
        <button onClick={this.clickGoToReduxHandler}>去首页</button>
      </div>
    )
  }
}

export default withRouter(Product)

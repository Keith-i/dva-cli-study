import React from 'react'
import { connect } from 'dva'
import Product from '../../components/Product'

class IndexPage extends React.Component {
  render() {
    console.log(this.props)
    const { productList, dispatch } = this.props
    return (
      <div>
        IndexPage
        <Product title="商品类型" dispatch={dispatch} productList={productList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    productList: state.product
  }
}

export default connect(mapStateToProps)(IndexPage)

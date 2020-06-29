export default {
  namespace: 'product',
  state: {
    productList: [
      {
        name: '白菜'
      },
      {
        name: '玉米'
      }
    ]
  },
  reducers: {
    updateList(state, action) {
      let currentProductList = deepClone(state)
      currentProductList.productList.push(action.payload)
      return currentProductList
    }
  },

  effects: {
    *updateListAsync({payload}, {call, put}) {
      yield put({
        type: 'updateList',
        payload
      })
    }
  }
}

function deepClone(arr) {
  let _obj = JSON.stringify(arr),
      objClone = JSON.parse(_obj)
  return objClone
}

const MOCKS = {}
const Mock = require('mockjs')
const Random = Mock.Random
Mock.setup({ timeout: '200-800' })
MOCKS.global = true // 全局mock开关

MOCKS.opts = [
  {
    local: true, // 局部mock开关，下同
    config: {
      rurl: /upload\/12345/,
      rtype: 'post',
      template: {
        'data|1-10': [{
          'id|+1': 1,
          'date': '@date(yyyy-MM-dd)',
          'count': Random.natural(0, 1)
        }]
      }
    }
  },
  {
    local: true,
    config: {
      rurl: /query\/23333/,
      rtype: 'get',
      template: {
        'list|1-10': [{
          'id|+1': 1,
          'email': Random.email(),
          'img': Random.dataImage('300x250', 'React'),
          'count': Random.natural(0, 1)
        }]
      }
    }
  },
  {
    local: true,
    config: {
      rurl: /buy/,
      rtype: 'get',
      template: {
        'data|1-10': [{
          'id|+1': 1
        }]
      }
    }
  }
]

MOCKS.opts.map(item => {
  if (!MOCKS.global) return false
  if (!item.local) return false
  const { rurl, rtype, template } = item.config
  Mock.mock(rurl, rtype, template)
})

export default Mock

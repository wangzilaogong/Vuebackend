// useless
export default [
  {
    name: '1',
    title: '交易所管理',
    icon: 'ios-keypad',
    secondItem: [
      {
        name: '1-1',
        to: '/market',
        txt: '市场管理',
        icon: 'ios-keypad'
      }, {
        name: '1-2',
        txt: '财务管理',
        thirdItem: [
          { name: '1-3',
            to: '/commission',
            txt: '委托记录',
            icon: 'ios-keypad'

          },
          { name: '1-4',
            to: '/transaction',
            txt: '成交记录',
            icon: 'ios-keypad'

          },
          { name: '1-5',
            to: '/fees',
            txt: '手续费记录',
            icon: 'ios-keypad'

          }
        ]
      }
    ]
  },
  {
    name: '2',
    icon: 'ios-keypad',
    title: '项目管理',
    secondItem: [
      { name: '2-1',
        to: '/accesstoproject',
        txt: '接入项目',
        icon: 'ios-keypad'

      },
      { name: '2-2',
        to: '/allproject',
        icon: 'ios-keypad',
        txt: '所有项目'
      },
      { name: '2-3',
        to: '/receiveproject',
        txt: '接受项目申请',
        icon: 'ios-keypad'

      }
    ]
  },
  {
    name: '3',
    title: '资产管理',
    icon: 'ios-keypad',
    secondItem: [
      { name: '3-1',
        to: '/mine',
        txt: '我的资产',
        icon: 'ios-keypad'

      },
      { name: '3-2',
        to: '/details',
        txt: '收支细明',
        icon: 'ios-keypad'

      },
      { name: '3-3',
        to: '/chargecoinrecord',
        txt: '冲币记录',
        icon: 'ios-keypad'

      },
      { name: '3-4',
        to: '/takecoinrecord',
        txt: '提币记录',
        icon: 'ios-keypad'

      }
    ]
  }
]

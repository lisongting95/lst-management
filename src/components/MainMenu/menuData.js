const metaMenu = [
  //顶级目录
  {
    index: 1,
    name: "内容",
    isShow: false,
    icon: "el-icon-menu",
    //次级目录
    children: [
      {
        index: 11,
        name: "内容分级",
        isShow: false,
        //元目录
        children: [
          {
            index: 111,
            name: "首页",
            path: "/",
            isShow: false,
          },
          {
            index: 112,
            name: "关于",
            path: "/about",
            isShow: false,
          },
        ],
      },
      {
        index: 12,
        name: "次级目录12",
        isShow: false,
        children: [
          {
            index: 121,
            name: "121",
            path: "/121",
            isShow: false,
          },
          {
            index: 122,
            name: "122",
            path: "/122",
            isShow: false,
          },
        ],
      },
    ],
  },

  //顶级目录
  {
    index: 2,
    name: "顶级目录2",
    isShow: false,
    icon: "el-icon-s-tools",
    //次级目录
    children: [
      {
        index: 21,
        name: "次级目录21",
        isShow: false,
        //元目录
        children: [
          {
            index: 211,
            name: "211",
            path: "/211",
            isShow: false,
          },
          {
            index: 212,
            name: "212",
            path: "/212",
            isShow: false,
          },
        ],
      },
      {
        index: 22,
        name: "次级目录22",
        isShow: false,
        children: [
          {
            index: 221,
            name: "221",
            path: "/221",
            isShow: false,
          },
          {
            index: 222,
            name: "222",
            path: "/222",
            isShow: false,
          },
        ],
      },
    ],
  },

  //顶级目录
  {
    index: 3,
    name: "顶级目录3",
    isShow: false,
    icon: "el-icon-user-solid",
    //次级目录
    children: [
      {
        index: 31,
        name: "次级目录31",
        path: "/31",
        isShow: false,
      },
    ],
  },
  //顶级目录
  {
    index: 4,
    name: "顶级目录4",
    isShow: false,
    icon: "el-icon-s-platform",
    path: "/4",
  },
];

const roles = {
  all: {
    menuSet: [111, 112, 121, 122, 211, 212, 221, 222, 31, 4],
  },
  superManager: {
    menuSet: [111, 112, 121, 122, 211, 212, 221, 222, 31, 4],
  },
  highLevelManager: {
    menuSet: [111, 112, 121, 122, 211],
  },
  manager: {
    menuSet: [111, 112, 222],
  },
};

export function getMenu(role) {
  let myMenuSet = roles[role].menuSet;
  let myMenu = metaMenu;
  myMenuSet.forEach((data) => {
    let s_data = data.toString();
    if (s_data.length > 0) {
      let topIndex = Number(s_data[0]) - 1;
      myMenu[topIndex].isShow = true;
    }
    if (s_data.length > 1) {
      let topIndex = Number(s_data[0]) - 1;
      let secIndex = Number(s_data[1]) - 1;
      myMenu[topIndex].children[secIndex].isShow = true;
    }
    if (s_data.length > 2) {
      let topIndex = Number(s_data[0]) - 1;
      let secIndex = Number(s_data[1]) - 1;
      let thrIndex = Number(s_data[2]) - 1;
      myMenu[topIndex].children[secIndex].children[thrIndex].isShow = true;
    }
  });
  return myMenu;
}

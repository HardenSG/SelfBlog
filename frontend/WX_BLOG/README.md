# Taro + TS + ReactHook博客系统

## 主技术栈

1. Taro3.5.11
2. TypeScript
3. React18

## 目前所用依赖项"@babel/runtime": "^7.7.7"

1. @rematch/core: ^2.2.0 用于简化状态管理工具redux代码，更方便的进行配置和使用
2. classnames: ^2.3.2 动态切换类名工具
3. immer: ^9.0.15 不可变数据流 用于rematch插件 @rematch/immer
4. lottie-miniprogram: ^1.0.12 lottie动画库
5. react-redux: ^7.2.9 状态管理工具，使用rematch简化代码
6. babel-plugin-import: ^1.13.6 自动导入组件
7. eslint: ^8.12.0 规范代码风格
8. stylelint: ^14.4.0 规范样式风格
9. @taroify/core: 0.1.0-alpha.1 移动端框架Vant的Taro react版本

## 所会拥有的功能点：初定

### TabBar

待定共拥有4大Tab

1. 主界面：展示我的帖子 & 博文
2. 讨论区：功能点居多
3. 个人区：不限于本人，且其他人每个人所对应的每个帖子的留言 || 讨论区所留言的内容
4. 管理区：限于本人 || 可作为授权制（待定）

#### 1. 个人界面

1. 展示帖子列表 && 分页系统
2. 搜索内容
3. 标签系统分类
......

#### 2. 讨论区

1. 搜索内容
2. 未读信息
3. 发布新内容
4. 浏览榜单
5. 讨论留言

#### 3. 个人区

1. 展示个人头像，性别栏
2. 点击修改个人信息
3. 查看所有留言
4. 查看我的所有发言

#### 4. 管理区

1. 管理所有帖子删除或者推送
2. 删除用户
3. 管理他人是否可以管理博客 & 授权
4. 管理我的所有博文 & 删查

### 页面预估

#### 主页

1. pages/index/index 主页显示
2. pages/detail/index 通用帖子和讨论

#### 讨论区

1. pages/group/index 讨论主页显示
2. pages/group/message/index 未读区显示
3. pages/group/editor/index 编辑发布讨论
4. pages/group/hot/index 热榜
5. pages/detail/index 通用帖子和讨论

#### 个人区

1. pages/my/index 我的主页显示
2. pages/my/edit/index 我的修改资料
3. pages/my/message 包含一个tab切换查看所有留言和所有给我留言

#### 管理区

1. pages/manage/index 管理主页显示
2. pages/manage/discuss/index 所有帖子管理
3. pages/manage/user/index 用户管理 & 授权
4. pages/manage/topic/index 我的博文管理

### 各界面所详细screenShot

1. pages/index/index 主页显示
2. pages/detail/index 通用帖子和讨论
3. pages/group/index 讨论主页显示
4. pages/group/message/index 未读区显示
5. pages/group/editor/index 编辑发布讨论
6. pages/group/hot/index 热榜
7. pages/detail/index 通用帖子和讨论
8. pages/my/index 我的主页显示
9. pages/my/edit/index 我的修改资料
10. pages/my/message 包含一个tab切换查看所有留言和所有给我留言
11. pages/manage/index 管理主页显示
12. pages/manage/discuss/index 所有帖子管理
13. pages/manage/user/index 用户管理 & 授权
14. pages/manage/topic/index 我的博文管理

# This is a front-end world :satisfied::satisfied::satisfied:  
###### 状态提升

当某个状态被多个组件依赖或者影响的时候, 就把该状态提升到这些组件最近的公共父组件中去管理, 
用```props```传递数据或者函数来管理这种依赖或者影响的行为


###### 组件挂载

react将组件渲染, 并且构造DOM元素然后塞入页面的过程称为组件的挂载

```javascript
    constructor()
    render()
    // 然后构造 DOM 元素插入页面
```
~~演变~~

```javascript
    constructor()
    componentWillMount()
    render()
    // 然后构造 DOM 元素插入页面
    componentDidMount()
```

###### Higher Order Components

**高阶组件就是一个函数, 传给它一个组件, 它返回一个新的组件**


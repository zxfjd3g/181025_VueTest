/*
vue插件模块
 */
(function (window) {

  // 定义插件对象
  const MyPlugin = {}

  // 插件对象必须要有一个install()
  MyPlugin.install = function (Vue, options) {
    // 1. 给Vue函数对象添加方法
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 定义全局指令
    Vue.directive('my-directive', function (el, binding) {
      el.innerHTML = binding.value + '-----'
    })

    
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()')
    }
  }

  window.MyPlugin = MyPlugin
})(window)

/*
执行函数定义
执行函数
 */


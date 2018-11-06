// component/input_com/input_com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { /* 小程序的组件属性列表是定义在.js文件的properties里的。把需要暴露出去并可以修改的属性都写在这里面 */
    /*  myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal, changedPath) {
      // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
      // 通常 newVal 就是新设置的数据， oldVal 是旧数据 */
      //myProperty2: String // 简化的定义方式
    input_ico: {//data的区别?   
      type: String,
      value: "search.png"
    },
    inputType: {
      type: String,
      value: 'text'
    },
    isPassword: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: "done"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
      input_logo:"image/idel_logo.png",
      search_ico:"image/search_ico.png",
      isClearShow:false,
      clear:"",
    search_bar_class:"search_bar_ico_show"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      var myEventDetail = {}; // detail对象，提供给事件监听函数
      var myEventOption = {} ;// 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption) ;//myevent是自定义对象
    },

    inputListener: function (e) { //监听输入事件
      var value = e.detail.value;
      var cursor = e.detail.cursor;
      if (value === null || value === undefined || value.length === 0) {//检测框中是否有内容
        this.setData({//控制叉号是否出现
          isClearShow: false
        });
      } else {
        this.setData({
          isClearShow: true 
        });
      }
      var detail = {//重新收集细节
        value: value,
        cursor: cursor
      };
      this.triggerEvent('inputListener', detail);//自触发???
    },

    inputConfirm: function (e) {//点击确认事件
      var value = e.detail.value;
      var detail = {
        value: value
      };
      this.triggerEvent('inputConfirm', detail);
    },

    clearTap: function () {
      this.setData({
        isClearShow: false,
        inputValue: ''//清除内容
      });
    },
    search_bar_tap_listener:function(){
        this.setData({
          search_bar_class:"search_ico_unshow",
        });
    },
    search_bar_bulr_listener:function(){
      this.setData({
        search_bar_class: "search_bar_ico_show",
      });
    }



  }
})
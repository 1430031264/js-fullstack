- start 从页面到组件？
  页面是老板，组件是员工，页面是组件组成的，
  start 老板也要知道状态 Page data
  <countdown start="{{start}}" />

- 组件的数据，data(内部数据) + properties(外部的)

- properties 里的 observer  接受到值改变时执行，observer也叫观察者

- 理解组件从外到内，从内向外触发事件
  内: this.triggerEvent({"event-name",data})
  外: (自定义事件)bind:enent-name="真正执行接受消息的函数"

- 页面由组件组成，先去独立的开发组件，然后再拼起来

- 由外传入的properties是我在组件中要涉及的
  由内传出的事件
  Page 和 Component 就成为了不可分割的有机体


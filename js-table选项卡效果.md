# js、table选项卡效果

#### 一、定义一个容器，里面分为菜单部分和内容部分

```
<div class="tab">
	<div class="tab">
        <!-- 菜单 -->
        <div class="menus">
            <section class="item sel">  HTML  </section>
            <section class="item">  CSS  </section>
            <section class="item">  JavaScript  </section>
            <section class="item">  nodeJS  </section>
            <section class="item">  mySql   </section>
        </div>
        <!-- 内容 -->
        <div class="contents">
            <section class="item show">   HTM   L</section>
            <section class="item">   CSS   </section>
            <section class="item">  JavaScript  </section>
            <section class="item">  nodeJS  </section>
            <section class="item">  mySql  </section>
        </div>
</div>
```

#### 二、js部分

1、获取元素

```
var menu_items = Array.from(document.querSelectorAll(".menus .item"));
var ct_items = Array.from(document.querySelectorAll(".contents .item"));
```

2、记录目前选中的下标

```
var pick_index=0;
```

3、当点击menu-items时，显示相应的ct_items，首先就要对所有的menu-items进行遍历，在点击的时候获取当前的下标index，并且移除之前被选中的状态，然后再把状态添加到当前选中的index中，最后再更新下标index。

```
meni_items.forEach(function(menu_item,index){
	menu_item.onclick=function(){
	//获取下标
	var index =menu_items.indexOf(this);
	//移除效果
	menu_items[pick_index].classList.remove("sel");
	ct_items[pick_index].classList.remove("show");
	//添加效果
	this.clssList.add("sel");
	ct_items[index].classList.add("show");
	//更新下标
	pick_index=index;
	}
})
```


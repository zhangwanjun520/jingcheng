//整体封装思路存值:判断是否传了过期时间,如果传入了,就存入当前时间戳;如果没有传过期时间,直接将需要的值存入本地
//取值思路 因为存入是JSON.strifying了,所以取出来之后先JSON.parse.然后判断是否有开始时间startTime,有说明设置了过期,然后,
//判断:获取当前时间戳-开始时候的时间戳>过期时间的时间,为true就是过期了,移除token，false,如果小于或等于就还没过期

var _local = {
  //存储,可设置过期时间
  set(key, value, expires) {
    let params = { key, value, expires };
    // expires过期时间
    if (expires) {
      // 如果过期时间存在,加一个开始时间即当前时间戳
      // 记录何时将值存入缓存，毫秒级
      // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      var data = Object.assign(params, { startTime: new Date().getTime() });
      // console.log(data) { key, value, expires,startTime } 上一步加入了一个startTime
      localStorage.setItem(key, JSON.stringify(data));  //将四个属性存入本地
    } else {
      // Object.prototype.toString方法，判断某个对象之属于哪种内置类型。
      // 分为null、string、boolean、number、undefined、array、function、object、date、math。
      if (Object.prototype.toString.call(value) == '[object Object]') {
        value = JSON.stringify(value);
      }
      if (Object.prototype.toString.call(value) == '[object Array]') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    }
  },
  //取出
  get(key) {
    let item = localStorage.getItem(key);
    // 先将拿到的试着进行json转为对象的形式
    try {
      item = JSON.parse(item);
    } catch (error) {
      // eslint-disable-next-line no-self-assign
      item = item;
    }
    // 如果有startTime的值，说明设置了失效时间
    if (item && item.startTime) {
      let date = new Date().getTime();
      // 如果大于就是过期了，如果小于或等于就还没过期
      if (date - item.startTime > item.expires) {
        localStorage.removeItem(name);
        return false;
      } else {
        return item.value;
      }
    } else {
      return item;
    }
  },
  // 删除
  remove(key) {
    localStorage.removeItem(key);
  },
  // 清除全部
  clear() {
    localStorage.clear();
  }
}

/**
* sessionStorage
*/
var _session = {
  get: function (key) {
    var data = sessionStorage[key];
    if (!data || data === "null") {
      return null;
    }
    return JSON.parse(data).value;
  },
  set: function (key, value) {
    var data = {
      value: value
    }
    sessionStorage[key] = JSON.stringify(data);
  },
  // 删除
  remove(key) {
    sessionStorage.removeItem(key);
  },
  // 清除全部
  clear() {
    sessionStorage.clear();
  }
}
export { _local, _session }





/**
 * Created by shuai on 22/05/09.
 * 对element方法进行二次封装
 */
import { Message, Notification } from "element-ui";
/**
 * 消息提醒手动关闭  type参数info、 success、 warning、 error ；message为提示的内容
 * @param {Obiect} obj
 * @returns {method}
 */
export function msgNoClose(obj) {
  Message({
    showClose: true,
    message: obj.message,
    type: obj.type,
    duration: 0
  })
}
/**
 * 消息提醒自动关闭
 * @param {Obiect} obj
 * @returns {method}
 */
export function msgAutoClose(obj) {
  Message({
    showClose: true,
    message: obj.message,
    type: obj.type
  })
}
/**
 * 消息提醒手动关闭  type参数info、 success、 warning、 error ；message为提示的内容
 * @param {Obiect} obj
 * @returns {method}
 */
export function nfcNoClose(obj) {
  Notification({
    showClose: true,
    message: obj.message,
    type: obj.type,
    duration: 0
  })
}
/**
 * 消息提醒自动关闭
 * @param {Obiect} obj
 * @returns {method}
 */
export function nfcAutoClose(obj) {
  Notification({
    showClose: true,
    message: obj.message,
    type: obj.type
  })
}


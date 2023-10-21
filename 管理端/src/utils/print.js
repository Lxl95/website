import printJS from 'print-js'
export default {
  printContent(id, titleData, nowtime) {
    const html = document.querySelector('#' + id).innerHTML
    // 新建一个 DOM
    const div = document.createElement('div')
    const title = document.createElement('h4')
    title.style.cssText = 'text-align:center;width:100%;margin-top:0px;'
    title.innerHTML = titleData
    const printDOMID = 'printDOMElement'
    div.id = printDOMID
    div.innerHTML = html
    const time = document.createElement('p')
    time.style.cssText = 'text-align:right;padding-right:20px;color: gray;'
    time.innerHTML = '制表时间：' + nowtime
    // 提取第一个表格的内容 即表头
    const ths = div.querySelectorAll('.el-table__header-wrapper th')
    const ThsTextArry = []
    for (let i = 0, len = ths.length; i < len; i++) {
      if (ths[i].innerText !== '') ThsTextArry.push(ths[i].innerText)
    }

    // 删除多余的表头
    div.querySelector('.hidden-columns').remove()
    // 第一个表格的内容提取出来后已经没用了 删掉
    div.querySelector('.el-table__header-wrapper').remove()

    // 将第一个表格的内容插入到第二个表格
    let newHTML = '<tr>'
    for (let i = 0, len = ThsTextArry.length; i < len; i++) {
      newHTML += '<td style="text-align: center; font-weight: bold">' + ThsTextArry[i] + '</td>'
    }

    newHTML += '</tr>'
    div.querySelector('.el-table__body-wrapper table').insertAdjacentHTML('afterbegin', newHTML)
    div.querySelector('.el-table__body-wrapper table').style.cssText = 'width:100%'
    // 将新的 DIV 添加到页面 打印后再删掉
    div.prepend(time)
    div.prepend(title)
    document.querySelector('body').appendChild(div)
    printJS({
      printable: printDOMID,
      type: 'html',
      scanStyles: false,
      style: 'table { border-collapse: collapse ;text-align:center;border:1px solid #333;size:landscape;width:100%;}table td,table th{line-height:20px;font-size:12px;border:1px solid #333;} ' // 表格样式
    })

    div.remove()
    // const iframeDiv = document.querySelector('printJS')
    // iframeDiv.remove()
  }
}

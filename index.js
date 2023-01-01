document.addEventListener("keydown", function (e) {
  console.log(e.code);
  if (e.code === "Enter") {
    e.preventDefault();
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("contenteditable", "true");
    newDiv.setAttribute("class", "text");
    let newUl = document.createElement("ul");
    newLi.appendChild(newDiv);
    newLi.appendChild(newUl);
    // console.log(document.activeElement.parentNode.childNodes);
    document.activeElement.parentNode.parentNode.appendChild(newLi);
    newLi.firstChild.focus();
  }

  if (e.code === "Tab") {
    e.preventDefault();
    if (document.activeElement.innerHTML !== "") {
      //将当前元素移动至上一个兄弟元素的ul中
      let cur = document.activeElement.parentNode;
      console.log(cur.previousSibling.previousSibling);
      cur.previousSibling.previousSibling.childNodes[3].appendChild(cur);
    } else {
      //往外
    }
  }
});

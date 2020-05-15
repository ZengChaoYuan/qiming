window.onload = function() {
    tableInit();
}

function tableInit() {
    var tbody = document.getElementById("adminBody");
    for (var i = 0; i < users.length; i++) {
        var tr1 = document.createElement("tr"); //创建元素
        tr1.style.textAlign = "center";
        //作品
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        img.src = users[i].heading;
        td1.appendChild(img);
        img.style.width = "100%";
        //img.style.header = "50px";
        td1.appendChild(img); //添加元素
        tr1.appendChild(td1);
        tbody.appendChild(tr1);

    }

}
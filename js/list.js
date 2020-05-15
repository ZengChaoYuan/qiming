window.onload = function() {
    tableInit();
}

function tableInit() {
    var tbody = document.getElementById("adminBody");
    for (var i = 0; i < users.length; i++) {
        var tr1 = document.createElement("tr"); //创建元素
        tr1.style.textAlign = "center";



        //头像
        var td4 = document.createElement("td");
        var img = document.createElement("img");
        img.src = users[i].heading;
        td4.appendChild(img);
        img.style.width = "100%";
        //img.style.header = "50px";
        td4.appendChild(img); //添加元素
        tr1.appendChild(td4);
        tbody.appendChild(tr1);

    }

}
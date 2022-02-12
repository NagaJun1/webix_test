const URL_SERVER_PHP = "/webix_test/php/server.php";

function loadMainPage() {
    webix.ui({
        cols: [{
            rows: [{
                view: "template",
                type: "header",
                template: "list title",
                css: { "background-color": "#adcbd9" }
            }, {
                view: "list",
                id: "list_1",
                template: "#title#",
                select: true,
                data: [
                    { id: 1, title: "dummy 1 - 1 " },
                ]
            }, {
                view: "button",
                value: "output message",
                click: function () {
                    webix.message("click_button_a");
                }
            }]
        }, {
            rows: [{
                view: "list",
                template: "#title#",
                select: true,
                data: [
                    { id: 1, title: "dummy 1" },
                    { id: 2, title: "dummy 2" },
                ]
            }, {
                view: "button",
                value: "request get",
                click: function () { reqGet() }
            }, {
                view: "button",
                value: "request post",
                click: function () { reqPost() }
            }]
        }]
    });

    for (let i = 0; i < 100; i++) {
        $$("list_1").add({
            id: "data_" + i,
            title: "dummy_" + i
        })
    }
}

/** ajax() で GET */
function reqGet() {
    webix.ajax().get(URL_SERVER_PHP, { get_param: "param for get" }).then(function (data) {
        console.log(data.text());
    })
}

/** ajax() で POST */
function reqPost() {
    webix.ajax().post(URL_SERVER_PHP, { post_param: "param for post" }).then(function (data) {
        console.log(data.text());
    })
}

const URL_SERVER_PHP = "/webix_test/php/server.php";

const ID_POPUP = "id_popup";

function loadMainPage() {
    webix.ui({
        cols: [{
            rows: [{
                view: "template",
                type: "header",
                template: "テスト title",
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
                value: "show popup",
                popup: ID_POPUP
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

    initView();
}

function initView() {
    for (let i = 0; i < 100; i++) {
        $$("list_1").add({
            id: "data_" + i,
            title: "dummy_" + i
        })
    }

    createPopup();
}

function createPopup() {
    webix.ui({
        view: "popup",
        id: ID_POPUP,
        height: 250,
        width: 300,
        body: {
            view: "form",
            elements: [
                { view: "text", label: "t_1" },
                { view: "text", label: "ラベル" },
                { view: "text", label: "text_3" },
                {
                    view: "button", value: "execute", click: function () {
                        alert("test");
                    }
                }
            ]
        }
    })
}

/** ajax() GET */
function reqGet() {
    webix.ajax().get(URL_SERVER_PHP, { get_param: "param for get" }).then(function (data) {
        console.log(data.text());
    })
}

/** ajax() POST */
function reqPost() {
    webix.ajax().post(URL_SERVER_PHP, { post_param: "param for post" }).then(function (data) {
        console.log(data.text());
    })
}

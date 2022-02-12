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
            view: "list",
            template: "#title#",
            select: true,
            data: [
                { id: 1, title: "dummy 1" },
                { id: 2, title: "dummy 2" },
            ]
        }]
    });

    for (let i = 0; i < 100; i++) {
        $$("list_1").add({
            id: "data_" + i,
            title: "dummy_" + i
        })
    }
}

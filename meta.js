module.exports = {
    prompts: {
        name: {
            type: "input",
            required: true,
            message: "Project name"
        },
        author: {
            type: "input",
            message: Author,
        },
        router: {
            type: "confirm",
            message: "Install vue-router"
        },
        store: {
            type: "confirm",
            message: "Install vuex"
        },
        vant: {
            type: "confirm",
            message: "Install vant"
        }
    },


    filter: {
        "src/router/**/*": "router",
        "src/store/**/*": "store",
        "src/plugins/**/*": "vant"
    }
}
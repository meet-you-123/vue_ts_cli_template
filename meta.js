const prompts = [{
        name: "name",
        type: "input",
        required: true,
        message: "Project name"
    },
    {
        name: "author",
        type: "input",
        message: Author,
    },
    {
        name: "router",
        type: "confirm",
        message: "Install vue-router"
    },
    {
        name: "store",
        type: "confirm",
        message: "Install vuex"
    },
    {
        name: "vant",
        type: "confirm",
        message: "Install vant"
    }
]
const filter = {
    "src/router/**/*": "router",
    "src/store/**/*": "store",
    "src/plugins/**/*": "vant"
}
module.exports = {
    prompts,
    filter
}
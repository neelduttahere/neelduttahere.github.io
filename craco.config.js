const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#e84545',
                            // '@link-color': '#37B1F5',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
const index = {
    path: 'index',
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], (require) => {
                callback(null, require('useModule/System/workIndex/workIndex').default)
            }, 'use/System/workIndex')
        },
    },
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('widModule/headFoot/headFoot').default)
        }, 'widget/headFoot')
    },
    childRoutes: [
        require('./workDemo').default,
        require('./workDemo2').default
    ]
}

export default index;
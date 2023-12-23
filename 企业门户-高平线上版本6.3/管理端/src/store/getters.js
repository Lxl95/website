const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    user: state => state.user.user,
    user_no: state => state.user.user_no,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    errorLogs: state => state.errorLog.logs,
    jsonInfo: state => state.user.jsonInfo,
    thisDN: state => state.user.thisDN,
    exten: state => state.user.exten,
    baseUrl: state => state.app.baseUrl,
    theme: state => state.app.theme
}
export default getters
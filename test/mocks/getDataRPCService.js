module.exports = (service, server, willcore) => {
    service.authenticate.action.get = async (model) => {
        model.user.authenticate({ email: "test@gmail.com" });
        model.message = "You are logged in";
    };
    service.isAuthenticated.action.get = async (model) => {
        model.isAuth = model.user.authenticated;
    };
    service.blocked.action.get = async (model) => {
        model.message = "You are allowed";
    };
    service.blocked.before.authorize;

    service.logout.action.get = async (model) => {
        model.user.remove();
        model.message = "Logged out";
    };
};
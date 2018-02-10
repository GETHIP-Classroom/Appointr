FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('layout1', {content: "index"});
    }
});

FlowRouter.route('/routeToThisPage', {
    action: function(params, queryParams) {
        BlazeLayout.render('layout1', {content: "schedules"});
    }
});
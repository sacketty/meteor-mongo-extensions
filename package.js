Package.describe({
    summary: "Straightforward implementation of mongodb aggregation framework"
});

Npm.depends({'mongodb':"1.2.14"});

Package.on_use(function (api, where) {
    api.add_files('lib.js', 'server');

    api.use('coffeescript', ['client', 'server']);
    api.use('underscore', ['client', 'server']);

    api.add_files('client.coffee', 'client');
    api.add_files('server.coffee', 'server');

});
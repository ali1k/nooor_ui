import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import QuranTopicStore from './stores/QuranTopicStore';
import QuranAyaStore from './stores/QuranAyaStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';
// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(QuranTopicStore);
app.registerStore(QuranAyaStore);
app.plug(fetchrPlugin({
    xhrPath: '/api' // Path for XHR to be served from
}));
module.exports = app;

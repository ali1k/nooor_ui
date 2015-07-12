export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Nooor | Home',
        handler: require('../components/Home'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: 'Nooor | Quranic Knowledge Graph'
            });
            done();
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    },
    topics: {
        path: '/quran/topics',
        method: 'get',
        page: 'topics',
        title: 'Quran Topics',
        handler: require('../components/Topics'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: 'Nooor | Quranic Knowledge Graph | Topics'
            });
            done();
        }
    },
    ayas: {
        path: '/quran/ayas',
        method: 'get',
        page: 'ayas',
        title: 'Quran Ayas',
        handler: require('../components/Ayas'),
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', {
                pageTitle: 'Nooor | Quranic Knowledge Graph | Ayas'
            });
            done();
        }
    },
    topic: {
        path: '/quran/topic/:topic?',
        method: 'get',
        page: 'topic',
        title: 'Quran Topic',
        handler: require('../components/QuranTopic'),
        action: (context, payload, done) => {
            let topic;
            topic = payload.get('params').get('topic');
            if (!topic) {
                topic = 0;
            }
            context.service.read('quran.ayas', {topic: topic}, {timeout: 20 * 1000}, function (err, res) {
                if (err) {
                    context.dispatch('LOAD_TOPIC_FAILURE', err);
                }else{
                    context.dispatch('LOAD_TOPIC_SUCCESS', {topic: topic, ayas: res.ayas});
                }
                context.dispatch('UPDATE_PAGE_TITLE', {
                    pageTitle: ('Quran | Topic | ' + decodeURIComponent(topic)) || ''
                });
                done();
            });
        }
    },
    aya: {
        path: '/quran/aya/:aya?',
        method: 'get',
        page: 'aya',
        title: 'Quran Aya',
        handler: require('../components/QuranAya'),
        action: (context, payload, done) => {
            let aya;
            aya = payload.get('params').get('aya');
            if (!aya) {
                aya = 0;
            }
            context.service.read('quran.topics', {aya: decodeURIComponent(aya)}, {timeout: 20 * 1000}, function (err, res) {
                if (err) {
                    context.dispatch('LOAD_AYA_FAILURE', err);
                }else{
                    context.dispatch('LOAD_AYA_SUCCESS', {aya: aya, topics: res.topics});
                }
                context.dispatch('UPDATE_PAGE_TITLE', {
                    pageTitle: ('Quran | Aya | ' + decodeURIComponent(aya)) || ''
                });
                done();
            });
        }
    }
};

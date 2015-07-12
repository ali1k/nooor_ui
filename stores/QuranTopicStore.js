import BaseStore from 'fluxible/addons/BaseStore';

class QuranTopicStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.topic = 0;
        this.ayas = [];
    }
    handleTopic(payload) {
        this.topic = payload.topic;
        this.ayas = payload.ayas;
        this.emitChange();
    }
    getState() {
        let topic = this.topic;
        return {
            topic: decodeURIComponent(topic),
            ayas: this.ayas
        };
    }
    dehydrate() {
        return {
            topic: this.topic,
            ayas: this.ayas
        };
    }
    rehydrate(state) {
        this.topic = state.topic;
        this.ayas = state.ayas;
    }
}

QuranTopicStore.storeName = 'QuranTopicStore';
QuranTopicStore.handlers = {
    'LOAD_TOPIC_SUCCESS': 'handleTopic'
};

export default QuranTopicStore;

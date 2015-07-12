import BaseStore from 'fluxible/addons/BaseStore';

class QuranAyaStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.aya = 0;
        this.topics = [];
    }
    handleAya(payload) {
        this.aya = decodeURIComponent(payload.aya);
        this.topics = payload.topics;
        this.emitChange();
    }
    getState() {
        let aya = 'http://tanzil.net/#' + this.aya;
        return {
            aya: aya,
            topics: this.topics
        };
    }
    dehydrate() {
        return {
            aya: this.aya,
            topics: this.topics
        };
    }
    rehydrate(state) {
        this.aya = state.aya;
        this.topics = state.topics;
    }
}

QuranAyaStore.storeName = 'QuranAyaStore';
QuranAyaStore.handlers = {
    'LOAD_AYA_SUCCESS': 'handleAya'
};

export default QuranAyaStore;

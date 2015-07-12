'use strict';
import rp from 'request-promise';
import {endpoint} from '../configs/server';
/*-------------config-------------*/
let user;
const outputFormat = 'application/sparql-results+json';

export default {
    name: 'quran',
    // At least one of the CRUD methods is Required
    read: (req, resource, params, config, callback) => {
        if (resource === 'quran.topics') {
            let query = 'SELECT DISTINCT ?topic WHERE {<http://tanzil.net/#' + decodeURIComponent(params.aya) +'> <http://rdfs.org/sioc/ns#topic> ?t . ?t <http://www.w3.org/2000/01/rdf-schema#label> ?topic .}';
            let url = endpoint+'/sparql?query=' + encodeURIComponent(query) + '&format=' + encodeURIComponent(outputFormat);
            rp.get({uri: url}).then(function(response){
                let parsed = JSON.parse(response);
                let topics = [];
                parsed.results.bindings.forEach(function(el) {
                    topics.push({t: el.topic.value});
                });
                callback(null, {
                    topics: topics
                });
            }).catch(function (err) {
                console.log(err);
                callback(null, {
                    topics: []
                });
            });
        }else if(resource === 'quran.ayas'){
            let query = 'SELECT DISTINCT ?s ?aya ?tr WHERE {?s  a <http://tanzil.ld-r.org/vocab/Aya> . ?s <http://rdfs.org/sioc/ns#content> ?aya .?s <http://purl.org/linguistics/gold/translation> ?tr . ?s <http://rdfs.org/sioc/ns#topic> ?t . ?t <http://www.w3.org/2000/01/rdf-schema#label> "'+decodeURIComponent(params.topic)+'" .}';
            let url = endpoint+'/sparql?query=' + encodeURIComponent(query) + '&format=' + encodeURIComponent(outputFormat);
            rp.get({uri: url}).then(function(response){
                let parsed = JSON.parse(response);
                let ayas = [];
                parsed.results.bindings.forEach(function(el) {
                    ayas.push({a: el.s.value, text: el.aya.value, tr: el.tr.value});
                });
                callback(null, {
                    ayas: ayas
                });
            }).catch(function (err) {
                console.log(err);
                callback(null, {
                    ayas: []
                });
            });
        }

    }
    // other methods
    // create: function(req, resource, params, body, config, callback) {},
    // delete: function(req, resource, params, config, callback) {}
};

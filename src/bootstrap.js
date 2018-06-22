window._ = require('lodash');
window.axios = require('axios');
import { loadProgressBar } from 'axios-progress-bar';

window.NProgress = require('nprogress');

import AppLocalStorage from './services/localStorage/localStorage';

window.axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + AppLocalStorage.get('token');
    return config;
});

loadProgressBar();

import Vue from 'vue';

import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import './iview-theme/index.less';
import zhLocal from 'view-design/dist/locale/zh-CN';
import enLocal from 'view-design/dist/locale/en-US';
import twLocal from 'view-design/dist/locale/zh-TW';
import idLocal from 'view-design/dist/locale/id-ID';

const lang = ccutils.getLanguage() || 'zh-CN';
let locale = zhLocal;

if (lang == 'zh-CN') { locale = zhLocal; }
if (lang == 'en-US') { locale = enLocal; }
if (lang == 'zh-TW') { locale = twLocal; }
if (lang == 'id-ID') { locale = idLocal; }

Vue.use(iView, { locale, transfer: true, capture: false });

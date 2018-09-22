import { updateHeader } from 'components/header/header-component';
import { createArticles } from 'components/articles/articles-component';
import 'styles/main.scss';
import '@babel/polyfill';
import 'whatwg-fetch';

updateHeader({ title: 'OnFlyNews' });
createArticles();

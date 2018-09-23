import { updateHeader } from 'components/header/header-component';
import { createArticles } from 'components/articles/articles-component';
import 'styles/main.scss';
import '@babel/polyfill';
import 'whatwg-fetch';
import 'bootstrap';

updateHeader({ title: 'OnFlyNews' });
createArticles();

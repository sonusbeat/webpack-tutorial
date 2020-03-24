import { showAlert } from './messages';
// import $ from 'jquery';

import '../sass/main.scss';

document.querySelector('#btn-alert')
    .addEventListener('click', showAlert);

// $('#btn-alert-jquery').click(() => alert('Hello from Jquery'));
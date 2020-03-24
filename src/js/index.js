// import $ from 'jquery';
import Notification from './Notification';

const msg = 'Webpack 4 is Awesome';

document.querySelector('#btn-alert')
    .addEventListener('click', function () {
        Notification.notify(msg);
        Notification.log(msg);
    });

// $('#btn-alert-jquery').click(() => alert('Hello from Jquery'));
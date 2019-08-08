import DatePicker from '/modules/DatePicker.js';

export default class App {
  init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const datePicker = new DatePicker();      
    });
  }
}

const app = new App();
app.init();

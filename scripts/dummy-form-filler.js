
function fillForm() {
  function setInputValue(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.value = value;
    }
  }

  function setSelectValue(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.value = value;
    }
  }

  function setSelectMultipleValue(id, values) {
    const el = document.getElementById(id);
    if (el) {
      const waSelect = el;
      waSelect.value = values;
    }
  }

  setInputValue('title', 'Dummy Event');
  setSelectValue('dayOfWeek', 'Wednesday');
  setSelectValue('recurrence', 'weekly');
  setInputValue('startTime', '18:00');
  setInputValue('endTime', '21:00');
  setInputValue('venue', 'Dummy Venue');
  setInputValue('locationSlug', 'dummy-location');
  setInputValue('organizer', 'Dummy Organizer');
  setInputValue('link', 'https://dummy-link.com');
  setInputValue('contact', 'dummy-contact@example.com');
  setSelectMultipleValue('tags', ['casual', 'blitz']);
  setInputValue('description', 'This is a dummy event for testing purposes.');

  console.log('Form filled with dummy data.');
}

fillForm();

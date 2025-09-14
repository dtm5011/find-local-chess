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

  setInputValue('title', "O'Side Chess Meet");
  const slugInput = document.querySelector('#slug input');
  if (slugInput) {
    slugInput.value = 'oside-chess-meet';
  }
  setSelectValue('dayOfWeek', 'Saturday');
  setSelectValue('recurrence', 'weekly');
  setInputValue('startTime', '14:00');
  setInputValue('endTime', '18:00');
  setInputValue('venue', 'Oceanside Pier (or Pier View Coffee)');
  setInputValue('location', 'Oceanside, CA');
  setInputValue('organizer', 'OSIDECHESS');
  setInputValue('link', 'https://www.instagram.com/osidechessmeet/');
  setInputValue('contact', 'OSIDECHESSMEET@GMAIL.COM');
  setSelectMultipleValue('tags', ['casual']);
  setInputValue('description', 'Casual chess meet-up in Oceanside.');

  console.log('Form filled with dummy data.');
}

fillForm();
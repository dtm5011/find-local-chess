// Test script to debug form data structure
// Run this in the browser console on the contribute page

function debugFormData() {
    console.log('=== Form Debug Test ===');
    
    // Test getting field values
    const getFieldValue = (id) => {
        const element = document.getElementById(id);
        if (!element) {
            console.log(`❌ Element with id '${id}' not found`);
            return undefined;
        }
        if ((id === 'recurrence' || id === 'link') && element.value === '') {
            console.log(`✅ ${id}: empty value converted to undefined`);
            return undefined;
        }
        console.log(`✅ ${id}: "${element.value}"`);
        return element.value;
    };

    const getSelectValues = (id) => {
        const element = document.getElementById(id);
        if (!element) {
            console.log(`❌ Select element with id '${id}' not found`);
            return [];
        }
        console.log(`✅ ${id} (multi-select): `, element.value);
        return element.value;
    };

    // Test all form fields
    const formData = {
        title: getFieldValue('title'),
        dayOfWeek: getFieldValue('dayOfWeek'),
        recurrence: getFieldValue('recurrence'),
        startTime: getFieldValue('startTime'),
        endTime: getFieldValue('endTime'),
        venue: getFieldValue('venue'),
        description: getFieldValue('description'),
        organizer: getFieldValue('organizer'),
        link: getFieldValue('link'),
        contact: getFieldValue('contact'),
        tags: getSelectValues('tags'),
        location: getFieldValue('location'),
    };

    console.log('=== Complete Form Data ===');
    console.log(formData);
    
    // Test if error message element exists
    const errorMessage = document.getElementById('error-message');
    console.log('Error message element exists:', !!errorMessage);
    
    return formData;
}

// Run the debug function
debugFormData();
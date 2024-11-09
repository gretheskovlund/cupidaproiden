import { reactive } from 'vue';

const eventBus = reactive({});

// Listen for the 'aria-hidden' event
eventBus['aria-hidden'] = (isHidden) => {
    console.log(`aria-hidden set to ${isHidden}`);
};

// Emit the 'aria-hidden' event with the value true
if (eventBus['aria-hidden']) {
    eventBus['aria-hidden'](true);
}

export const subscribe = (eventName, listener) =>{
  window.addEventListener(eventName, listener);
}


export const unsubscribe = (eventName, listener) => {
  window.removeEventListener(eventName, listener);
}


export const publish = (eventName, data) => {
  const event = new CustomEvent(eventName, { detail: data });
  window.dispatchEvent(event);
}
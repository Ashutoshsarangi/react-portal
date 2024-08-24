import { eventObserver } from "./EventObserver";
// Need to add Event listener
window.addEventListener(
  "keydown",
  (event) => {
    console.log(event);
    if (event.metaKey && event.key === "d") {
      eventObserver.broadcast({ sucess: true });
    }
  },
  false
);

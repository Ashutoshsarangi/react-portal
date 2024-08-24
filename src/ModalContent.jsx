import { eventObserver } from "./EventObserver";

export default function ModalContent({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e);
    console.log(formData);
  };
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) =>
            e.target.value !== "na" &&
            eventObserver.broadcast({ route: e.target.value })
          }
        >
          <option value="na">Select Route</option>
          <option value="/">Home</option>
          <option value="blog">Blog</option>
          <option value="about">About</option>
          <option value="contact">Contact</option>
        </select>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

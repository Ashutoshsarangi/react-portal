import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Outlet, useNavigate } from "react-router-dom";
import ModalContent from "./ModalContent";
import { eventObserver } from "./EventObserver";
import "./App.utils";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  console.log("re-render");

  useEffect(() => {
    eventObserver.subscribe(subscribeHandler);

    return () => eventObserver.unSubscribe(subscribeHandler);
  }, [showModal]);
  const subscribeHandler = (data) => {
    console.log(data);
    if (data?.route) {
      navigate(data.route);
    }

    !showModal && setShowModal(data.sucess);
  };
  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
      <Outlet />
    </>
  );
}

export default App;

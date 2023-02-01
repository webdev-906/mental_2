import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function AdminChat() {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const [senderID, setSenderID] = useState(undefined);
  const [myrecipientID] = useState(currentUser.id);
  const [mySenderID] = useState(currentUser.id);
  const [message, setMessage] = useState("");
  const [chatID, setChatID] = useState(undefined);
  const [date] = useState(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.role === "admin" || !currentUser.id === 4 || currentUser === 0) {
      navigate("/");
    }
  }, []);

  const renderChats = async () => {
    await axios
      .post("/admin/obtainChats")
      .then((response) => {
        console.log(response.data);
        setChats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    renderChats();
    setInterval(() => {
      renderChats();
    }, 10000);
  });

  if (currentUser === 0) {
    return navigate('/');
  }
  
  if (currentUser.id !== 4) {
    return navigate('/');
  }

  return (
    <section class="bg-ally7 p-5">
      <div id="Chat" class="grid grid-cols-3 gap-5">
        {chats.map((props) => (
          <section class="border border-ally10 rounded-lg p-5">
            <div>
              <h4 class="font-bold text-ally2">Name: {props.username}</h4>{"  "}
              <h5 class="text-gray-600">Flag: {props.flag}</h5>{"  "}
              <h5 class="text-gray-600">chatId: {props.id}</h5>{"  "}
              <button
                class="bg-ally2 hover:bg-ally1 text-white font-bold py-2 px-4 rounded"
                onClick={() => setModalOpen(true)}
              >
                View Chat
              </button>
            </div>
          </section>
        ))}
      </div>
  
      {modalOpen && (
        <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <div
            class="bg-ally7 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <h3 class="text-lg leading-6 font-medium text-ally10" id="modal-headline">
                Chat details
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  Here you can see all the details of the chat.
                </p>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <span class="flex w-full rounded-md shadow-sm">
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-ally2 text-base leading-6 font-medium text-white shadow-sm hover:bg-ally1 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
  
}

export default AdminChat;

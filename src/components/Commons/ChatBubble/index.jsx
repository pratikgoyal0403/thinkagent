import { RiChatSmileFill } from "react-icons/ri";

const ChatBubble = () => {
  return (
    <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center absolute bottom-4 right-8 cursor-pointer">
      <RiChatSmileFill className="text-white text-4xl" />
    </div>
  );
};

export default ChatBubble;

import React from 'react';
import Button from '../components/Button';

const MessagePage = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
        <div className="h-screen w-1/4 pl-16 flex flex-col items-start overflow-auto border-r-2">
          <h1 className="mt-32 text-2xl font-bold mb-8 text-gray-600">Messages</h1>
          <Button className="mt-8 mb-2 ">Inbox</Button>
          <Button className="mt-8 mb-2 ">Sent</Button>
        </div>
        <div className="flex flex-1 flex-col overflow-auto">
          <div className="px-8 py-4 border-b-2 border-gray-200 flex justify-between items-center">
            <input 
              type="search" 
              placeholder="Search mail" 
              className="px-4 py-2 border rounded w-1/2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded font-semibold">
              New Message
            </button>
          </div>
          <div className="p-8 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Inbox</h2>
            <div className="mb-4">
              <div className="bg-white p-4 rounded shadow mb-2">
                <p className="font-bold">Subject 1</p>
                <p className="text-sm text-gray-500">Sender 1</p>
                <p>Message 1</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold">Subject 2</p>
                <p className="text-sm text-gray-500">Sender 2</p>
                <p>Message 2</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MessagePage;

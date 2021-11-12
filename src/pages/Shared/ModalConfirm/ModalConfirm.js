import React from 'react';

const ModalConfirm = ({ showModal, closeModal, deleteProduct, productId }) => {
  return (
    <div
      className={`${
        !showModal && 'hidden'
      } bg-black bg-opacity-50 absolute inset-0  justify-center items-center`}
      id="overlay"
    >
      <div className="bg-gray-200 max-w-sm py-2 fixed inset-x-1/4 px-3 rounded shadow-xl text-gray-800 mx-auto my-5">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">Confirm Delete?</h4>
          <button onClick={() => closeModal()}>
            <svg
              className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"
              id="close-modal"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-2 text-sm">
          <p>Do you really want to delete this product?</p>
        </div>
        <div className="mt-3 flex justify-end space-x-3">
          <button
            onClick={() => closeModal()}
            className="px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteProduct(productId)}
            className="px-3 py-1 bg-red-800 text-gray-200 hover:bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;

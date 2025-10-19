const CallButton = () => {
  const phoneNumber = "+19179246101";
  const telUrl = `tel:${phoneNumber}`;

  return (
    <a
      href={telUrl}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Call us now"
    >
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
};

export default CallButton;

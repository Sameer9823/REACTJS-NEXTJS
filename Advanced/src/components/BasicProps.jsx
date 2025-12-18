import React, { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out
      ${size === "small" ? "text-sm px-4 py-1" : ""}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
      ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
      ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
      ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-6">Basic Props Example</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        blanditiis, temporibus deleniti facere dolorem totam?
      </p>
      <div className="space-y-4">
        <h3>Different color</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="mt-5">Different Size </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Medium"
            color="secondary"
            size="medium"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Large"
            color="danger"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
        </div>

        <div className="space-y-4">
          <h3 className="mt-5">Disabled Button</h3>
          <Button
            text="Disabled"
            color="primary"
            disabled={true}
            onClick={() => alert("This should not trigger")}
          ></Button>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-gray-700">
          Click Count:{" "}
          <span className="font-bold text-blue-600">{clickCount}</span>
        </p>
      </div>
    </section>
  );
}

export default BasicProps;

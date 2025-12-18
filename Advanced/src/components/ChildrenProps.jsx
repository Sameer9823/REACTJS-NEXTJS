import React from "react";

function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 border border-blue-200",
    red: "bg-red-100 text-red-800 border border-red-200",
    green: "bg-green-100 text-green-800 border border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  };
  return (
    <div
      className={`border-l-4 p-6 ${colorClasses[color]} rounded-lg shadow-md `}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-600">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold mb-6">Children Props</h2>
      <p className="mb-6 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        incidunt fugiat commodi. Fugiat, quidem atque.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 ">Card component with children</h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> Sameer
              </p>
              <p className="mb-2">
                <strong>Email:</strong> Sameer@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Web developer
              </p>
            </Card>
            <Card title="Warning" color="yellow">
              <p className="mb-2">
                This is a warning message. Please proceed with caution!
              </p>
            </Card>
            <Card title="Success" color="green">
              <p className="mb-2">Your operation was completed successfully!</p>
            </Card>
            <Card title="Error" color="red">
              <p className="mb-2">
                An error occurred while processing your request.
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;

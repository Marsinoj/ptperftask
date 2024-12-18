function App() {
  const members = [
    {
      name: "Karina",
      role: "Leader, Main Dancer, Lead Rapper",
      image: "/karina.jpg", // Direct path to the image in the public folder
    },
    {
      name: "Winter",
      role: "Lead Vocalist, Lead Dancer",
      image: "/winter.jpg", // Direct path to the image in the public folder
    },
    {
      name: "Giselle",
      role: "Main Rapper, Sub Vocalist",
      image: "/giselle.jpg", // Direct path to the image in the public folder
    },
    {
      name: "Ningning",
      role: "Main Vocalist, Maknae",
      image: "/ning.jpg", // Direct path to the image in the public folder
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "0",
        padding: "20px",
        backgroundImage: "url('/kwangya.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1>AESPA Information</h1>
      <p>AESPA is a South Korean girl group formed by SM Entertainment.</p>
      <h2>Members</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              color: "#fff",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <footer
        style={{
          marginTop: "30px",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <p>Project by: Mariel Inojales</p>
      </footer>
    </div>
  );
}

export default App;

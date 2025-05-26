// App.js
import React, { useState } from "react";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Asklepios-Logo.svg/2560px-Asklepios-Logo.svg.png"; // Platzhalter für das Asklepios-Logo

const hilfestellungen = [
  {
    title: "Skills zur Selbstberuhigung",
    content:
      "• Atme tief ein und aus\n• Kaltwasser-Anwendung\n• Musik hören\n• Kurz rausgehen",
  },
  {
    title: "Achtsamkeitsübungen",
    content: "• 5-4-3-2-1-Übung\n• Meditation\n• Body-Scan",
  },
];

const plaene = [
  {
    title: "Tagesstruktur Beispiel",
    content:
      "08:00 Aufstehen\n09:00 Frühstück\n10:00 Bewegung\n12:00 Mittagessen\n15:00 Entspannung\n18:00 Abendessen",
  },
  {
    title: "Notfallplan",
    content:
      "1. Was habe ich schon probiert?\n2. Wen kann ich anrufen?\n3. Wo kann ich hingehen (z. B. Klinik, Freunde, Familie)?",
  },
];

const notfallnummern = [
  {
    name: "Kinder- und Jugendtelefon",
    number: "116111",
  },
  {
    name: "Krisentelefon Asklepios",
    number: "12345678",
  },
  {
    name: "Notruf",
    number: "112",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hallo! Wie kann ich dir helfen?" },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simulierter Bot
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      {
        from: "bot",
        text: "Danke für deine Nachricht. Ein echter KI-Bot würde dir jetzt antworten. In der echten App könnte das z. B. ChatGPT oder ein Krisenchat sein.",
      },
    ]);
    setInput("");
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 480,
        margin: "0 auto",
        background: "#f7faf7",
        minHeight: "100vh",
      }}
    >
      {/* Header mit Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: 16,
          background: "#fff",
          borderBottom: "1px solid #e2e8e7",
        }}
      >
        <img
          src={logoUrl}
          alt="Asklepios Logo"
          style={{
            width: 48,
            height: 48,
            objectFit: "contain",
            borderRadius: 8,
            background: "#f2f2f2",
          }}
        />
        <h1 style={{ fontSize: 22, color: "#268f4d", margin: 0 }}>
          Asklepios Jugendhilfe-App
        </h1>
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#eafbe9",
          padding: 10,
        }}
      >
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("hilfen")}>Hilfestellungen</button>
        <button onClick={() => setPage("plaene")}>Pläne</button>
        <button onClick={() => setPage("notfall")}>Notfall</button>
        <button onClick={() => setPage("chatbot")}>Chatbot</button>
      </nav>

      <div style={{ padding: 18 }}>
        {page === "home" && (
          <>
            <h2>Willkommen!</h2>
            <p>
              Diese App unterstützt dich nach deiner Entlassung aus der Klinik.
              <br />
              Du findest hier Skills, Pläne und Hilfe für Notfälle – sowie einen
              Chatbot für deine Fragen.
            </p>
          </>
        )}

        {page === "hilfen" && (
          <>
            <h2>Hilfestellungen & Skills</h2>
            {hilfestellungen.map((h, i) => (
              <div
                key={i}
                style={{
                  background: "#f5fef6",
                  borderRadius: 8,
                  margin: "12px 0",
                  padding: 12,
                }}
              >
                <strong>{h.title}</strong>
                <pre style={{ margin: 0 }}>{h.content}</pre>
              </div>
            ))}
          </>
        )}

        {page === "plaene" && (
          <>
            <h2>Pläne & Struktur</h2>
            {plaene.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#f5fef6",
                  borderRadius: 8,
                  margin: "12px 0",
                  padding: 12,
                }}
              >
                <strong>{p.title}</strong>
                <pre style={{ margin: 0 }}>{p.content}</pre>
              </div>
            ))}
          </>
        )}

        {page === "notfall" && (
          <>
            <h2>Notfall & Krisenhilfe</h2>
            <div style={{ marginBottom: 12 }}>
              <strong>Was tun im Notfall?</strong>
              <ul>
                <li>Atme tief durch</li>
                <li>Nutze deine Skills</li>
                <li>Sprich mit jemandem</li>
                <li>Kontaktiere eine Notfallnummer</li>
              </ul>
            </div>
            <div>
              <strong>Wichtige Nummern:</strong>
              <ul>
                {notfallnummern.map((n, i) => (
                  <li key={i}>
                    {n.name}: <a href={`tel:${n.number}`}>{n.number}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {page === "chatbot" && (
          <>
            <h2>Chatbot</h2>
            <div
              style={{
                background: "#f2f9f2",
                borderRadius: 8,
                height: 250,
                padding: 12,
                marginBottom: 8,
                overflowY: "auto",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: msg.from === "bot" ? "left" : "right",
                    margin: "6px 0",
                  }}
                >
                  <span
                    style={{
                      background: msg.from === "bot" ? "#eafbe9" : "#d7f5eb",
                      borderRadius: 8,
                      padding: "6px 12px",
                      display: "inline-block",
                      maxWidth: "85%",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <form
              style={{ display: "flex", gap: 6 }}
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <input
                style={{
                  flex: 1,
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #bbb",
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Schreib mir deine Frage..."
              />
              <button type="submit">Senden</button>
            </form>
            <p style={{ fontSize: 11, color: "#888", marginTop: 8 }}>
              (In der Demo ist der Chatbot nur simuliert. Echte KI wäre später
              möglich.)
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

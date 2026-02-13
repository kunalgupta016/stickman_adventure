import React from "react";

const StickmanAsset = ({ sceneId }) => {
  const sc = "black";
  const sw = 3;
  const lc = "round";

  // Reusable Stickman
  const Stickman = ({ x, y, pose = "stand", color = "black" }) => (
    <g transform={`translate(${x}, ${y})`}>
      <circle
        cx="0"
        cy="-20"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth={sw}
      />
      <line
        x1="0"
        y1="-10"
        x2="0"
        y2="30"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap={lc}
      />
      {pose === "stand" && (
        <>
          <line
            x1="0"
            y1="0"
            x2="-15"
            y2="15"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="15"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="-10"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="10"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
        </>
      )}
      {pose === "hands_up" && (
        <>
          <line
            x1="0"
            y1="0"
            x2="-20"
            y2="-15"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="-15"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="-10"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="10"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
        </>
      )}
      {pose === "run" && (
        <>
          <line
            x1="0"
            y1="0"
            x2="-20"
            y2="5"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="-5"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="-15"
            y2="55"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="15"
            y2="55"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
        </>
      )}
      {pose === "sit" && (
        <>
          <line
            x1="0"
            y1="0"
            x2="-15"
            y2="10"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="10"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="-15"
            y2="30"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="-15"
            y1="30"
            x2="-15"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="15"
            y2="30"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="15"
            y1="30"
            x2="15"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
        </>
      )}
      {pose === "dead" && (
        <>
          <line x1="-5" y1="-25" x2="5" y2="-15" stroke="red" strokeWidth={2} />
          <line x1="5" y1="-25" x2="-5" y2="-15" stroke="red" strokeWidth={2} />
          <line
            x1="0"
            y1="0"
            x2="-20"
            y2="20"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="15"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="-10"
            y2="60"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
          <line
            x1="0"
            y1="30"
            x2="15"
            y2="55"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap={lc}
          />
        </>
      )}
    </g>
  );

  // Guard stickman (blue)
  const Guard = ({ x, y }) => (
    <Stickman x={x} y={y} pose="stand" color="blue" />
  );

  // Ground line
  const Ground = ({ y = 280 }) => (
    <line x1="0" y1={y} x2="400" y2={y} stroke="black" strokeWidth="3" />
  );

  const renderScene = () => {
    switch (sceneId) {
      /* ============ PHASE 1: ENTRY ============ */

      case "bank_night":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <circle cx="350" cy="40" r="20" fill="#ffffcc" opacity="0.8" />
            {/* Bank Building */}
            <rect
              x="80"
              y="80"
              width="240"
              height="200"
              fill="#333"
              stroke="#555"
              strokeWidth="3"
            />
            <path
              d="M80 80 L200 30 L320 80"
              fill="#444"
              stroke="#555"
              strokeWidth="3"
            />
            <text
              x="200"
              y="120"
              textAnchor="middle"
              fontSize="22"
              fill="gold"
              fontWeight="bold"
            >
              WALL BANK
            </text>
            <rect
              x="165"
              y="180"
              width="70"
              height="100"
              fill="#222"
              stroke="gold"
              strokeWidth="2"
            />
            {/* Windows lit */}
            <rect
              x="100"
              y="130"
              width="30"
              height="25"
              fill="yellow"
              opacity="0.5"
            />
            <rect
              x="270"
              y="130"
              width="30"
              height="25"
              fill="yellow"
              opacity="0.5"
            />
            <Stickman x={55} y={220} pose="stand" color="white" />
            <Ground y={280} />
          </svg>
        );

      case "fail_explosion":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#331111" />
            <path
              d="M200 150 L220 80 L260 130 L320 100 L290 160 L350 200 L280 210 L260 270 L220 220 L170 260 L190 200 L120 170 Z"
              fill="orange"
              stroke="red"
              strokeWidth="3"
            />
            <text
              x="200"
              y="165"
              textAnchor="middle"
              fontSize="48"
              fontWeight="bold"
              fill="white"
            >
              BOOM
            </text>
            <Stickman x={100} y={250} pose="dead" color="gray" />
          </svg>
        );

      /* ============ DELIVERY PATH ============ */

      case "pizza_delivery":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect
              x="200"
              y="100"
              width="180"
              height="180"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <text x="290" y="130" textAnchor="middle" fontSize="14" fill="gold">
              ENTRANCE
            </text>
            {/* Pizza boxes stack */}
            <rect
              x="60"
              y="170"
              width="40"
              height="8"
              fill="#cc8800"
              stroke="black"
              rx="2"
            />
            <rect
              x="60"
              y="162"
              width="40"
              height="8"
              fill="#cc8800"
              stroke="black"
              rx="2"
            />
            <rect
              x="60"
              y="154"
              width="40"
              height="8"
              fill="#cc8800"
              stroke="black"
              rx="2"
            />
            <Stickman x={80} y={220} pose="stand" color="white" />
            <Guard x={250} y={220} />
            <Ground y={280} />
          </svg>
        );

      case "guard_bribed":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d3436" />
            <Guard x={250} y={200} />
            {/* Pizza in guard hand */}
            <rect x="260" y="195" width="25" height="6" fill="#cc8800" />
            <Stickman x={120} y={200} pose="run" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="lime">
              ACCESS GRANTED
            </text>
            <Ground y={270} />
          </svg>
        );

      case "fail_pizza_drop":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#440000" />
            {/* Scattered pizza */}
            <circle cx="100" cy="250" r="12" fill="#cc8800" />
            <circle cx="150" cy="260" r="10" fill="#cc8800" />
            <circle cx="200" cy="240" r="14" fill="#cc8800" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="30"
              fill="red"
              fontWeight="bold"
            >
              🍕 EVERYWHERE 🍕
            </text>
            <Stickman x={200} y={200} pose="dead" color="white" />
          </svg>
        );

      /* ============ LASER PATH ============ */

      case "window_cut":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a3e" />
            <rect
              x="60"
              y="30"
              width="280"
              height="250"
              fill="#87ceeb"
              opacity="0.3"
              stroke="#555"
              strokeWidth="5"
            />
            <circle
              cx="200"
              cy="150"
              r="50"
              fill="none"
              stroke="lime"
              strokeWidth="3"
              strokeDasharray="8,4"
            />
            <line
              x1="200"
              y1="20"
              x2="200"
              y2="100"
              stroke="gray"
              strokeWidth="2"
            />
            <Stickman x={200} y={130} pose="stand" color="white" />
          </svg>
        );

      case "fail_rope_snap":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#222" />
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="80"
              stroke="gray"
              strokeWidth="2"
            />
            <line
              x1="195"
              y1="78"
              x2="205"
              y2="82"
              stroke="red"
              strokeWidth="3"
            />
            <Stickman x={200} y={200} pose="hands_up" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="24" fill="red">
              ↓↓↓ 40 FLOORS ↓↓↓
            </text>
          </svg>
        );

      case "upper_floor":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d2d44" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            {/* Carpet */}
            <rect x="50" y="255" width="300" height="8" fill="#8B0000" />
            {/* Doors */}
            <rect
              x="60"
              y="120"
              width="60"
              height="130"
              fill="#654321"
              stroke="gold"
              strokeWidth="2"
              rx="3"
            />
            <text x="90" y="185" textAnchor="middle" fontSize="8" fill="gold">
              MANAGER
            </text>
            <rect
              x="280"
              y="120"
              width="60"
              height="130"
              fill="#555"
              stroke="gray"
              strokeWidth="2"
              rx="3"
            />
            <text x="310" y="185" textAnchor="middle" fontSize="8" fill="white">
              ELEVATOR
            </text>
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_elevator_camera":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <rect x="150" y="50" width="100" height="15" fill="#333" rx="3" />
            <circle cx="200" cy="57" r="6" fill="red" />
            <text x="200" y="120" textAnchor="middle" fontSize="20" fill="red">
              📹 SPOTTED!
            </text>
            <Stickman x={200} y={200} pose="hands_up" color="white" />
          </svg>
        );

      /* ============ TUNNEL PATH ============ */

      case "tunnel_dig":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3d2b1f" />
            {/* Tunnel */}
            <ellipse cx="200" cy="150" rx="80" ry="100" fill="#1a1008" />
            <Stickman x={200} y={200} pose="stand" color="white" />
            {/* Dirt particles */}
            <circle cx="120" cy="100" r="3" fill="#5c3d1a" />
            <circle cx="280" cy="120" r="4" fill="#5c3d1a" />
            <circle cx="150" cy="220" r="3" fill="#5c3d1a" />
            <text
              x="200"
              y="40"
              textAnchor="middle"
              fontSize="16"
              fill="#aa8844"
            >
              UNDERGROUND...
            </text>
          </svg>
        );

      case "fail_sewer":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            <rect x="0" y="200" width="400" height="100" fill="#2d5a2d" />
            <text x="200" y="150" textAnchor="middle" fontSize="40">
              🤢
            </text>
            <text x="200" y="260" textAnchor="middle" fontSize="20" fill="lime">
              SEWER.
            </text>
            <Stickman x={200} y={170} pose="hands_up" color="white" />
          </svg>
        );

      case "break_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a3a4a" />
            <rect x="0" y="250" width="400" height="50" fill="#555" />
            {/* Table */}
            <rect x="150" y="180" width="100" height="10" fill="#8B4513" />
            <rect x="160" y="190" width="5" height="60" fill="#654321" />
            <rect x="235" y="190" width="5" height="60" fill="#654321" />
            {/* Coffee cup */}
            <rect x="185" y="165" width="15" height="15" fill="#a0522d" />
            <Guard x={300} y={200} />
            <Stickman x={80} y={200} pose="stand" color="white" />
            <text
              x="80"
              y="130"
              textAnchor="middle"
              fontSize="12"
              fill="yellow"
            >
              !!!
            </text>
          </svg>
        );

      case "fail_guard_spotted":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#330000" />
            <Guard x={250} y={200} />
            <text x="250" y="140" textAnchor="middle" fontSize="30">
              ❗
            </text>
            <Stickman x={150} y={200} pose="run" color="white" />
          </svg>
        );

      /* ============ PHASE 2: INTERIOR ============ */

      case "staff_hall":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            {/* Camera */}
            <rect
              x="80"
              y="40"
              width="20"
              height="15"
              fill="#333"
              stroke="red"
              strokeWidth="2"
            />
            <rect
              x="200"
              y="40"
              width="20"
              height="15"
              fill="#333"
              stroke="red"
              strokeWidth="2"
            />
            <rect
              x="320"
              y="40"
              width="20"
              height="15"
              fill="#333"
              stroke="red"
              strokeWidth="2"
            />
            {/* Red beams */}
            <line
              x1="90"
              y1="55"
              x2="60"
              y2="250"
              stroke="red"
              opacity="0.3"
              strokeWidth="1"
            />
            <line
              x1="210"
              y1="55"
              x2="180"
              y2="250"
              stroke="red"
              opacity="0.3"
              strokeWidth="1"
            />
            <line
              x1="330"
              y1="55"
              x2="300"
              y2="250"
              stroke="red"
              opacity="0.3"
              strokeWidth="1"
            />
            <Stickman x={40} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_taser":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#222" />
            <path
              d="M180 130 L190 160 L170 170 L200 200"
              stroke="yellow"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M220 130 L210 160 L230 170 L200 200"
              stroke="yellow"
              strokeWidth="4"
              fill="none"
            />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="28"
              fill="yellow"
            >
              ⚡ ZAP ⚡
            </text>
            <Stickman x={200} y={210} pose="dead" color="white" />
          </svg>
        );

      case "power_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Control Panel */}
            <rect
              x="100"
              y="80"
              width="200"
              height="150"
              fill="#333"
              stroke="#666"
              strokeWidth="3"
              rx="5"
            />
            <circle cx="150" cy="120" r="8" fill="green" />
            <circle cx="200" cy="120" r="8" fill="green" />
            <circle cx="250" cy="120" r="8" fill="red" />
            <rect x="140" y="150" width="40" height="20" fill="#555" rx="3" />
            <rect x="220" y="150" width="40" height="20" fill="#555" rx="3" />
            <text x="200" y="210" textAnchor="middle" fontSize="12" fill="lime">
              POWER GRID
            </text>
            <Stickman x={200} y={260} pose="stand" color="white" />
          </svg>
        );

      case "fail_swat_arrival":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <text x="200" y="80" textAnchor="middle" fontSize="20" fill="red">
              ⚠️ EMERGENCY PROTOCOL ⚠️
            </text>
            <Stickman x={100} y={220} pose="stand" color="blue" />
            <Stickman x={150} y={220} pose="stand" color="blue" />
            <Stickman x={250} y={220} pose="stand" color="blue" />
            <Stickman x={300} y={220} pose="stand" color="blue" />
            <text
              x="200"
              y="180"
              textAnchor="middle"
              fontSize="18"
              fill="white"
            >
              S.W.A.T
            </text>
            <Stickman x={200} y={220} pose="hands_up" color="white" />
          </svg>
        );

      case "blackout":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050505" />
            <Stickman x={200} y={200} pose="stand" color="#555" />
            <text x="200" y="100" textAnchor="middle" fontSize="24" fill="#333">
              DARKNESS
            </text>
            <circle
              cx="200"
              cy="175"
              r="30"
              fill="none"
              stroke="#222"
              strokeWidth="1"
            />
          </svg>
        );

      case "fail_minor_loot":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#332200" />
            <text
              x="200"
              y="120"
              textAnchor="middle"
              fontSize="40"
              fill="green"
            >
              $200
            </text>
            <text x="200" y="160" textAnchor="middle" fontSize="16" fill="red">
              ...seriously?
            </text>
            <Stickman x={200} y={220} pose="hands_up" color="white" />
          </svg>
        );

      case "emp_success":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a3e" />
            <circle
              cx="200"
              cy="150"
              r="80"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="200"
              cy="150"
              r="50"
              fill="none"
              stroke="cyan"
              strokeWidth="3"
              opacity="0.7"
            />
            <circle cx="200" cy="150" r="20" fill="cyan" opacity="0.3" />
            <text x="200" y="260" textAnchor="middle" fontSize="18" fill="cyan">
              EMP ACTIVATED
            </text>
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );

      case "security_room":
      case "manager_office":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            {/* Desk */}
            <rect x="120" y="170" width="160" height="15" fill="#654321" />
            <rect x="130" y="185" width="5" height="65" fill="#543210" />
            <rect x="265" y="185" width="5" height="65" fill="#543210" />
            {/* Monitor */}
            <rect
              x="170"
              y="120"
              width="60"
              height="50"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="175" y="125" width="50" height="40" fill="#1a3a1a" />
            <text x="200" y="150" textAnchor="middle" fontSize="8" fill="lime">
              ACCESS?
            </text>
            <Stickman x={80} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_wrong_password":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a0000" />
            <rect
              x="120"
              y="100"
              width="160"
              height="100"
              fill="#333"
              stroke="red"
              strokeWidth="3"
              rx="5"
            />
            <text x="200" y="140" textAnchor="middle" fontSize="14" fill="red">
              ❌ ACCESS DENIED ❌
            </text>
            <text x="200" y="170" textAnchor="middle" fontSize="10" fill="gray">
              Password123...
            </text>
            <Stickman x={200} y={250} pose="hands_up" color="white" />
          </svg>
        );

      case "lobby_patrol":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d3436" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            <Guard x={100} y={200} />
            <Guard x={300} y={200} />
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_shootout":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#330000" />
            <text x="200" y="100" textAnchor="middle" fontSize="22" fill="red">
              NOT AN ACTION MOVIE
            </text>
            <circle cx="120" cy="200" r="4" fill="red" />
            <circle cx="280" cy="180" r="4" fill="red" />
            <circle cx="300" cy="220" r="4" fill="red" />
            <Stickman x={200} y={200} pose="dead" color="white" />
          </svg>
        );

      /* ============ PHASE 3: VAULT ============ */

      case "vault_door":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Massive vault door */}
            <circle
              cx="200"
              cy="160"
              r="100"
              fill="#555"
              stroke="#888"
              strokeWidth="6"
            />
            <circle
              cx="200"
              cy="160"
              r="80"
              fill="#444"
              stroke="#666"
              strokeWidth="3"
            />
            {/* Handle */}
            <line
              x1="160"
              y1="160"
              x2="240"
              y2="160"
              stroke="#999"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              x1="200"
              y1="120"
              x2="200"
              y2="200"
              stroke="#999"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              cx="200"
              cy="160"
              r="15"
              fill="#333"
              stroke="#777"
              strokeWidth="2"
            />
            <Stickman x={60} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_drill_break":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#331100" />
            <path
              d="M180 130 L200 100 L220 130 L240 110 L230 150 L200 140 Z"
              fill="orange"
              stroke="red"
              strokeWidth="2"
            />
            <text
              x="200"
              y="200"
              textAnchor="middle"
              fontSize="20"
              fill="orange"
            >
              DRILL EXPLODED
            </text>
            <Stickman x={200} y={240} pose="dead" color="white" />
          </svg>
        );

      case "vault_hack":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Terminal */}
            <rect
              x="100"
              y="60"
              width="200"
              height="150"
              fill="#111"
              stroke="lime"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="120"
              y="100"
              fontSize="10"
              fill="lime"
              fontFamily="monospace"
            >
              $ BYPASS_VAULT.exe
            </text>
            <text
              x="120"
              y="120"
              fontSize="10"
              fill="lime"
              fontFamily="monospace"
            >
              Cracking... 47%
            </text>
            <text
              x="120"
              y="140"
              fontSize="10"
              fill="lime"
              fontFamily="monospace"
            >
              ███████░░░░░░░
            </text>
            <text
              x="120"
              y="170"
              fontSize="10"
              fill="yellow"
              fontFamily="monospace"
            >
              ENTER CODE: _
            </text>
            <Stickman x={200} y={250} pose="sit" color="white" />
          </svg>
        );

      case "fail_lockdown":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <circle
              cx="200"
              cy="150"
              r="80"
              fill="#333"
              stroke="red"
              strokeWidth="5"
            />
            <line
              x1="140"
              y1="90"
              x2="260"
              y2="210"
              stroke="red"
              strokeWidth="5"
            />
            <text x="200" y="270" textAnchor="middle" fontSize="18" fill="red">
              PERMANENT LOCKDOWN
            </text>
          </svg>
        );

      case "vault_treasure":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <circle
              cx="200"
              cy="150"
              r="100"
              fill="#333"
              stroke="gold"
              strokeWidth="4"
            />
            {/* Diamonds */}
            <path
              d="M160 140 L180 110 L200 140 L180 170 Z"
              fill="cyan"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M210 120 L230 90 L250 120 L230 150 Z"
              fill="cyan"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M180 180 L200 150 L220 180 L200 210 Z"
              fill="cyan"
              stroke="white"
              strokeWidth="1"
            />
            {/* Gold bars */}
            <rect
              x="140"
              y="200"
              width="30"
              height="15"
              fill="gold"
              stroke="#aa8800"
              strokeWidth="1"
              rx="2"
            />
            <rect
              x="230"
              y="200"
              width="30"
              height="15"
              fill="gold"
              stroke="#aa8800"
              strokeWidth="1"
              rx="2"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="20"
              fill="gold"
              fontWeight="bold"
            >
              💎 JACKPOT 💎
            </text>
          </svg>
        );

      /* ============ PHASE 4: ESCAPE ============ */

      case "escape_heavy":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Bags of money */}
            <rect
              x="170"
              y="200"
              width="60"
              height="40"
              fill="#556b2f"
              rx="5"
            />
            <text
              x="200"
              y="225"
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              $$$
            </text>
            {/* SWAT flashlights */}
            <line
              x1="20"
              y1="50"
              x2="180"
              y2="220"
              stroke="yellow"
              strokeWidth="8"
              opacity="0.15"
            />
            <line
              x1="380"
              y1="50"
              x2="220"
              y2="220"
              stroke="yellow"
              strokeWidth="8"
              opacity="0.15"
            />
            <Stickman x={200} y={200} pose="hands_up" color="white" />
            <text x="200" y="40" textAnchor="middle" fontSize="16" fill="red">
              SURROUNDED!
            </text>
          </svg>
        );

      case "escape_clean":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Rooftop */}
            <rect x="50" y="200" width="300" height="100" fill="#444" />
            <rect x="60" y="210" width="280" height="5" fill="#555" />
            <Stickman x={200} y={170} pose="run" color="white" />
            <text x="200" y="60" textAnchor="middle" fontSize="18" fill="white">
              ROOFTOP
            </text>
            {/* Stars */}
            <circle cx="50" cy="30" r="2" fill="white" />
            <circle cx="150" cy="20" r="1" fill="white" />
            <circle cx="300" cy="40" r="2" fill="white" />
          </svg>
        );

      case "secret_alien":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            {/* UFO beam */}
            <path
              d="M150 0 L100 300 L300 300 L250 0"
              fill="lime"
              opacity="0.15"
            />
            <ellipse
              cx="200"
              cy="30"
              rx="60"
              ry="15"
              fill="#555"
              stroke="lime"
              strokeWidth="2"
            />
            <circle cx="200" cy="25" r="10" fill="lime" opacity="0.5" />
            <Stickman x={200} y={200} pose="hands_up" color="lime" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="lime">
              ???
            </text>
          </svg>
        );

      /* ============ ENDINGS ============ */

      case "helicopter_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Helicopter */}
            <rect
              x="140"
              y="80"
              width="120"
              height="40"
              fill="#333"
              stroke="#666"
              strokeWidth="2"
              rx="10"
            />
            <rect x="250" y="90" width="60" height="10" fill="#444" rx="3" />
            <line
              x1="120"
              y1="78"
              x2="280"
              y2="78"
              stroke="#666"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="70"
              x2="200"
              y2="80"
              stroke="#666"
              strokeWidth="3"
            />
            {/* Skids */}
            <line
              x1="160"
              y1="120"
              x2="155"
              y2="140"
              stroke="#666"
              strokeWidth="2"
            />
            <line
              x1="240"
              y1="120"
              x2="245"
              y2="140"
              stroke="#666"
              strokeWidth="2"
            />
            <line
              x1="145"
              y1="140"
              x2="255"
              y2="140"
              stroke="#666"
              strokeWidth="2"
            />
            <Stickman x={200} y={100} pose="sit" color="white" />
            <text
              x="200"
              y="250"
              textAnchor="middle"
              fontSize="18"
              fill="gold"
              fontWeight="bold"
            >
              MASTERMIND!
            </text>
          </svg>
        );

      case "night_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#05051e" />
            <circle cx="350" cy="40" r="25" fill="#ffffcc" opacity="0.6" />
            <rect x="0" y="260" width="400" height="40" fill="#1a3a1a" />
            <Stickman x={200} y={220} pose="run" color="white" />
            {/* Money trail */}
            <text x="170" y="250" fontSize="12" fill="green">
              $
            </text>
            <text x="140" y="240" fontSize="10" fill="green">
              $
            </text>
            <text x="120" y="255" fontSize="8" fill="green">
              $
            </text>
            <text
              x="200"
              y="50"
              textAnchor="middle"
              fontSize="20"
              fill="gold"
              fontWeight="bold"
            >
              PERFECT CRIME
            </text>
          </svg>
        );

      case "arrested":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Prison bars */}
            <line
              x1="80"
              y1="50"
              x2="80"
              y2="250"
              stroke="#666"
              strokeWidth="5"
            />
            <line
              x1="140"
              y1="50"
              x2="140"
              y2="250"
              stroke="#666"
              strokeWidth="5"
            />
            <line
              x1="200"
              y1="50"
              x2="200"
              y2="250"
              stroke="#666"
              strokeWidth="5"
            />
            <line
              x1="260"
              y1="50"
              x2="260"
              y2="250"
              stroke="#666"
              strokeWidth="5"
            />
            <line
              x1="320"
              y1="50"
              x2="320"
              y2="250"
              stroke="#666"
              strokeWidth="5"
            />
            <Stickman x={200} y={200} pose="sit" color="gray" />
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="gray">
              40 YEARS...
            </text>
          </svg>
        );

      case "alien_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Stars */}
            <circle cx="50" cy="30" r="2" fill="white" />
            <circle cx="120" cy="80" r="1" fill="white" />
            <circle cx="300" cy="50" r="2" fill="white" />
            <circle cx="350" cy="120" r="1" fill="white" />
            <circle cx="80" cy="200" r="1" fill="white" />
            {/* UFO */}
            <ellipse
              cx="200"
              cy="120"
              rx="80"
              ry="20"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
            />
            <ellipse
              cx="200"
              cy="110"
              rx="40"
              ry="30"
              fill="#444"
              stroke="lime"
              strokeWidth="2"
            />
            <circle cx="200" cy="100" r="8" fill="lime" opacity="0.5" />
            <Stickman x={200} y={120} pose="hands_up" color="lime" />
            <text
              x="200"
              y="250"
              textAnchor="middle"
              fontSize="16"
              fill="lime"
              fontWeight="bold"
            >
              GALACTIC THIEF!
            </text>
          </svg>
        );

      case "fail_arrested":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <Stickman x={100} y={200} pose="stand" color="blue" />
            <Stickman x={150} y={200} pose="stand" color="blue" />
            <Stickman x={250} y={200} pose="stand" color="blue" />
            <Stickman x={300} y={200} pose="stand" color="blue" />
            <Stickman x={200} y={200} pose="dead" color="white" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="22"
              fill="red"
              fontWeight="bold"
            >
              NOT RAMBO.
            </text>
          </svg>
        );

      /* ============ PRISON STORY ============ */

      case "prison_cell":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3a" />
            <rect x="0" y="260" width="400" height="40" fill="#444" />
            {/* Bars */}
            <line
              x1="60"
              y1="0"
              x2="60"
              y2="300"
              stroke="#666"
              strokeWidth="6"
            />
            <line
              x1="120"
              y1="0"
              x2="120"
              y2="300"
              stroke="#666"
              strokeWidth="6"
            />
            <line
              x1="180"
              y1="0"
              x2="180"
              y2="300"
              stroke="#666"
              strokeWidth="6"
            />
            <line
              x1="240"
              y1="0"
              x2="240"
              y2="300"
              stroke="#666"
              strokeWidth="6"
            />
            {/* Bed */}
            <rect x="270" y="220" width="100" height="40" fill="#555" rx="3" />
            {/* TV glow */}
            <rect
              x="310"
              y="50"
              width="50"
              height="35"
              fill="#336"
              stroke="#555"
              strokeWidth="2"
            />
            <Guard x={340} y={130} />
            <Stickman x={150} y={210} pose="sit" color="white" />
          </svg>
        );

      case "file_bars":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Window */}
            <rect
              x="100"
              y="50"
              width="200"
              height="180"
              fill="#0a0a3e"
              stroke="#555"
              strokeWidth="4"
            />
            {/* Bars being filed */}
            <line
              x1="150"
              y1="50"
              x2="150"
              y2="230"
              stroke="#666"
              strokeWidth="5"
            />
            <line
              x1="200"
              y1="50"
              x2="200"
              y2="150"
              stroke="#666"
              strokeWidth="5"
              strokeDasharray="8,8"
            />
            <line
              x1="250"
              y1="50"
              x2="250"
              y2="230"
              stroke="#666"
              strokeWidth="5"
            />
            {/* File tool */}
            <line
              x1="190"
              y1="145"
              x2="210"
              y2="155"
              stroke="silver"
              strokeWidth="3"
            />
            <Stickman x={200} y={200} pose="stand" color="white" />
            <text x="200" y="270" textAnchor="middle" fontSize="12" fill="gray">
              *scraping noises*
            </text>
          </svg>
        );

      case "fail_splat":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="270" width="400" height="30" fill="#333" />
            <Stickman x={200} y={230} pose="dead" color="white" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="30"
              fill="red"
              fontWeight="bold"
            >
              SPLAT
            </text>
            <text x="200" y="290" textAnchor="middle" fontSize="10" fill="gray">
              ground floor
            </text>
          </svg>
        );

      case "fake_illness":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a3a2a" />
            {/* Infirmary bed */}
            <rect
              x="100"
              y="180"
              width="200"
              height="60"
              fill="white"
              stroke="#aaa"
              strokeWidth="2"
              rx="3"
            />
            <rect x="90" y="170" width="220" height="15" fill="#ddd" rx="2" />
            {/* Cross */}
            <rect x="280" y="40" width="30" height="8" fill="red" rx="2" />
            <rect x="291" y="29" width="8" height="30" fill="red" rx="2" />
            <Stickman x={200} y={170} pose="dead" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="lime">
              *fake groaning*
            </text>
          </svg>
        );

      case "fail_real_doctor":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a0000" />
            <text x="200" y="100" textAnchor="middle" fontSize="20" fill="red">
              BUSTED!
            </text>
            <text x="200" y="140" textAnchor="middle" fontSize="14" fill="gray">
              Doctor: "You're perfectly fine."
            </text>
            <Stickman x={200} y={220} pose="hands_up" color="white" />
          </svg>
        );

      case "dig_tunnel":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3d2b1f" />
            <ellipse cx="200" cy="160" rx="70" ry="90" fill="#1a1008" />
            <Stickman x={200} y={210} pose="stand" color="white" />
            <circle cx="130" cy="110" r="3" fill="#5c3d1a" />
            <circle cx="270" cy="130" r="4" fill="#5c3d1a" />
            <text
              x="200"
              y="40"
              textAnchor="middle"
              fontSize="14"
              fill="#aa8844"
            >
              DIGGING...
            </text>
          </svg>
        );

      case "fail_sewer_prison":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            <rect x="0" y="200" width="400" height="100" fill="#2d5a2d" />
            <text x="200" y="150" textAnchor="middle" fontSize="40">
              🤢
            </text>
            <text x="200" y="260" textAnchor="middle" fontSize="16" fill="lime">
              TOXIC SEWAGE
            </text>
            <Stickman x={200} y={170} pose="hands_up" color="white" />
          </svg>
        );

      case "guard_breakroom":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a3a4a" />
            <rect x="0" y="250" width="400" height="50" fill="#555" />
            <rect x="150" y="180" width="100" height="10" fill="#8B4513" />
            <rect x="160" y="190" width="5" height="60" fill="#654321" />
            <rect x="235" y="190" width="5" height="60" fill="#654321" />
            <rect x="185" y="165" width="15" height="15" fill="#a0522d" />
            <Guard x={300} y={200} />
            <Stickman x={80} y={200} pose="stand" color="white" />
            <text
              x="80"
              y="130"
              textAnchor="middle"
              fontSize="14"
              fill="yellow"
            >
              !!!
            </text>
          </svg>
        );

      case "fail_spotted":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#330000" />
            <Guard x={250} y={200} />
            <text x="250" y="140" textAnchor="middle" fontSize="30">
              ❗
            </text>
            <Stickman x={150} y={200} pose="run" color="white" />
          </svg>
        );

      case "befriend_guard":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            <Stickman x={130} y={200} pose="stand" color="white" />
            <Guard x={270} y={200} />
            {/* Chat bubbles */}
            <ellipse
              cx="200"
              cy="120"
              rx="60"
              ry="25"
              fill="none"
              stroke="#555"
              strokeWidth="2"
            />
            <text x="200" y="125" textAnchor="middle" fontSize="12" fill="gray">
              Hey Dave...
            </text>
          </svg>
        );

      case "fail_solitary":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            <rect
              x="100"
              y="50"
              width="200"
              height="200"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="4"
            />
            <Stickman x={200} y={200} pose="sit" color="gray" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="#444">
              SOLITARY
            </text>
          </svg>
        );

      case "trust_up":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            <Guard x={270} y={200} />
            <Stickman x={130} y={200} pose="stand" color="white" />
            {/* Key on floor */}
            <circle
              cx="200"
              cy="255"
              r="5"
              fill="gold"
              stroke="orange"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="255"
              x2="210"
              y2="260"
              stroke="gold"
              strokeWidth="2"
            />
            <text x="200" y="120" textAnchor="middle" fontSize="14" fill="gold">
              *key drops*
            </text>
          </svg>
        );

      case "fail_missed_chance":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#222" />
            <circle cx="200" cy="200" r="6" fill="gold" opacity="0.3" />
            <text x="200" y="130" textAnchor="middle" fontSize="18" fill="gray">
              Opportunity... gone.
            </text>
            <Stickman x={200} y={200} pose="sit" color="gray" />
          </svg>
        );

      case "hall_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            {/* Doors */}
            <rect
              x="30"
              y="100"
              width="60"
              height="150"
              fill="#654321"
              stroke="#888"
              strokeWidth="2"
              rx="3"
            />
            <text x="60" y="175" textAnchor="middle" fontSize="7" fill="white">
              YARD
            </text>
            <rect
              x="170"
              y="100"
              width="60"
              height="150"
              fill="#654321"
              stroke="#888"
              strokeWidth="2"
              rx="3"
            />
            <text x="200" y="175" textAnchor="middle" fontSize="7" fill="white">
              SECURITY
            </text>
            <rect
              x="310"
              y="100"
              width="60"
              height="150"
              fill="#654321"
              stroke="#888"
              strokeWidth="2"
              rx="3"
            />
            <text x="340" y="175" textAnchor="middle" fontSize="7" fill="white">
              BLOCK C
            </text>
            <Stickman x={130} y={200} pose="run" color="white" />
          </svg>
        );

      case "security_room_prison":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Monitors */}
            <rect
              x="80"
              y="60"
              width="70"
              height="50"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="80" y="65" width="65" height="40" fill="#1a3a1a" />
            <rect
              x="165"
              y="60"
              width="70"
              height="50"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="165" y="65" width="65" height="40" fill="#1a3a1a" />
            <rect
              x="250"
              y="60"
              width="70"
              height="50"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="250" y="65" width="65" height="40" fill="#1a3a1a" />
            {/* Console */}
            <rect x="80" y="120" width="240" height="30" fill="#333" rx="3" />
            <circle cx="120" cy="135" r="5" fill="green" />
            <circle cx="150" cy="135" r="5" fill="green" />
            <circle cx="180" cy="135" r="5" fill="red" />
            <Stickman x={200} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_alarm_prison":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#440000" />
            <text x="200" y="80" textAnchor="middle" fontSize="24" fill="red">
              🚨 LOCKDOWN 🚨
            </text>
            <text x="200" y="160" textAnchor="middle" fontSize="16" fill="red">
              ALL CELLS LOCKED
            </text>
            <Stickman x={200} y={220} pose="hands_up" color="white" />
          </svg>
        );

      case "cameras_off":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Dead monitors */}
            <rect
              x="80"
              y="60"
              width="70"
              height="50"
              fill="#111"
              stroke="#333"
              strokeWidth="2"
            />
            <rect
              x="165"
              y="60"
              width="70"
              height="50"
              fill="#111"
              stroke="#333"
              strokeWidth="2"
            />
            <rect
              x="250"
              y="60"
              width="70"
              height="50"
              fill="#111"
              stroke="#333"
              strokeWidth="2"
            />
            <text x="200" y="160" textAnchor="middle" fontSize="18" fill="lime">
              CAMERAS OFF ✓
            </text>
            <Stickman x={200} y={220} pose="run" color="white" />
          </svg>
        );

      case "yard_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="120" fill="#0a0a3e" />
            <rect x="0" y="120" width="400" height="180" fill="#2a3a2a" />
            {/* High walls */}
            <rect x="0" y="0" width="20" height="300" fill="#555" />
            <rect x="380" y="0" width="20" height="300" fill="#555" />
            {/* Barbed wire */}
            <path
              d="M20 30 L60 20 L100 30 L140 20 L180 30 L220 20 L260 30 L300 20 L340 30 L380 20"
              fill="none"
              stroke="gray"
              strokeWidth="2"
            />
            {/* Watchtower */}
            <rect
              x="350"
              y="40"
              width="30"
              height="50"
              fill="#444"
              stroke="#666"
              strokeWidth="2"
            />
            <line
              x1="365"
              y1="60"
              x2="200"
              y2="200"
              stroke="yellow"
              strokeWidth="6"
              opacity="0.1"
            />
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_sniper":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            {/* Crosshair */}
            <circle
              cx="200"
              cy="150"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="200"
              stroke="red"
              strokeWidth="1"
            />
            <line
              x1="150"
              y1="150"
              x2="250"
              y2="150"
              stroke="red"
              strokeWidth="1"
            />
            <Stickman x={200} y={160} pose="run" color="white" />
            <text x="200" y="260" textAnchor="middle" fontSize="16" fill="red">
              SPOTTED BY TOWER
            </text>
          </svg>
        );

      case "sewage_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a2a1a" />
            {/* Pipe */}
            <rect
              x="0"
              y="100"
              width="400"
              height="120"
              fill="#2d3d2d"
              rx="10"
            />
            <ellipse cx="0" cy="160" rx="10" ry="60" fill="#1a2a1a" />
            <ellipse
              cx="400"
              cy="160"
              rx="10"
              ry="60"
              fill="none"
              stroke="#555"
              strokeWidth="2"
            />
            <Stickman x={200} y={140} pose="run" color="white" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="12"
              fill="#5a7a5a"
            >
              *dripping sounds*
            </text>
          </svg>
        );

      case "fail_gas":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            {/* Gas clouds */}
            <circle cx="100" cy="150" r="40" fill="#4a6a4a" opacity="0.5" />
            <circle cx="200" cy="130" r="50" fill="#4a6a4a" opacity="0.6" />
            <circle cx="300" cy="160" r="45" fill="#4a6a4a" opacity="0.5" />
            <text x="200" y="260" textAnchor="middle" fontSize="16" fill="lime">
              TOXIC GAS
            </text>
            <Stickman x={200} y={200} pose="dead" color="white" />
          </svg>
        );

      case "heli_pad":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a3e" />
            <rect x="0" y="230" width="400" height="70" fill="#444" />
            {/* H pad */}
            <circle
              cx="200"
              cy="260"
              r="30"
              fill="none"
              stroke="yellow"
              strokeWidth="2"
            />
            <text
              x="200"
              y="268"
              textAnchor="middle"
              fontSize="24"
              fill="yellow"
              fontWeight="bold"
            >
              H
            </text>
            {/* Helicopter */}
            <rect
              x="160"
              y="140"
              width="80"
              height="30"
              fill="#555"
              stroke="#777"
              strokeWidth="2"
              rx="8"
            />
            <line
              x1="140"
              y1="138"
              x2="260"
              y2="138"
              stroke="#777"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="130"
              x2="200"
              y2="140"
              stroke="#777"
              strokeWidth="2"
            />
            <rect x="230" y="148" width="40" height="8" fill="#555" rx="2" />
            <Stickman x={100} y={200} pose="stand" color="white" />
          </svg>
        );

      case "riot_start":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a1a1a" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            <Stickman x={80} y={200} pose="hands_up" color="orange" />
            <Stickman x={140} y={210} pose="run" color="orange" />
            <Stickman x={200} y={200} pose="hands_up" color="white" />
            <Stickman x={260} y={210} pose="run" color="orange" />
            <Stickman x={320} y={200} pose="hands_up" color="orange" />
            <text
              x="200"
              y="80"
              textAnchor="middle"
              fontSize="24"
              fill="orange"
              fontWeight="bold"
            >
              RIOT!
            </text>
          </svg>
        );

      case "fail_riot_shot":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#330000" />
            <Guard x={100} y={200} />
            <Guard x={300} y={200} />
            <text x="200" y="100" textAnchor="middle" fontSize="20" fill="red">
              RUBBER BULLETS!
            </text>
            <circle cx="170" cy="180" r="4" fill="red" />
            <circle cx="230" cy="190" r="4" fill="red" />
            <circle cx="200" cy="170" r="4" fill="red" />
            <Stickman x={200} y={220} pose="dead" color="white" />
          </svg>
        );

      case "sewage_freedom":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#0a0a3e" />
            <rect x="0" y="200" width="400" height="100" fill="#2d5a2d" />
            <circle cx="350" cy="40" r="20" fill="#ffffcc" opacity="0.5" />
            {/* Pipe exit */}
            <ellipse
              cx="50"
              cy="220"
              rx="30"
              ry="20"
              fill="#333"
              stroke="#555"
              strokeWidth="3"
            />
            <Stickman x={150} y={180} pose="run" color="#8a8" />
            <text
              x="300"
              y="100"
              textAnchor="middle"
              fontSize="16"
              fill="lime"
              fontWeight="bold"
            >
              FREEDOM!
            </text>
            <text x="300" y="120" textAnchor="middle" fontSize="10" fill="gray">
              (but smelly)
            </text>
          </svg>
        );

      case "cargo_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a3e" />
            {/* Cargo box */}
            <rect
              x="120"
              y="130"
              width="160"
              height="120"
              fill="#556b2f"
              stroke="#333"
              strokeWidth="3"
              rx="3"
            />
            <text
              x="200"
              y="195"
              textAnchor="middle"
              fontSize="14"
              fill="white"
            >
              SUPPLIES
            </text>
            {/* Stickman peeking */}
            <circle
              cx="240"
              cy="125"
              r="8"
              fill="none"
              stroke="white"
              strokeWidth={sw}
            />
            <line
              x1="240"
              y1="133"
              x2="240"
              y2="130"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="gold"
              fontWeight="bold"
            >
              SMART ESCAPE!
            </text>
          </svg>
        );

      /* ============ AREA 51 STORY ============ */

      case "desert_night":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#0a0a2e" />
            <rect x="0" y="200" width="400" height="100" fill="#c2a060" />
            {/* Stars */}
            <circle cx="50" cy="30" r="1" fill="white" />
            <circle cx="120" cy="60" r="2" fill="white" />
            <circle cx="200" cy="20" r="1" fill="white" />
            <circle cx="300" cy="50" r="2" fill="white" />
            <circle cx="350" cy="80" r="1" fill="white" />
            {/* Fence */}
            <line
              x1="100"
              y1="160"
              x2="100"
              y2="200"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="150"
              y1="160"
              x2="150"
              y2="200"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="160"
              x2="200"
              y2="200"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="250"
              y1="160"
              x2="250"
              y2="200"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="160"
              x2="300"
              y2="200"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="170"
              x2="320"
              y2="170"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="185"
              x2="320"
              y2="185"
              stroke="#888"
              strokeWidth="2"
            />
            {/* Spotlight */}
            <path
              d="M350 130 L300 200 L380 200 Z"
              fill="yellow"
              opacity="0.08"
            />
            <rect x="345" y="120" width="10" height="30" fill="#666" />
            {/* Sign */}
            <rect x="30" y="175" width="50" height="20" fill="red" rx="2" />
            <text
              x="55"
              y="189"
              textAnchor="middle"
              fontSize="7"
              fill="white"
              fontWeight="bold"
            >
              AREA 51
            </text>
            <Stickman x={60} y={250} pose="stand" color="white" />
          </svg>
        );

      case "fail_sniped":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0000" />
            <circle
              cx="200"
              cy="150"
              r="50"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="90"
              x2="200"
              y2="210"
              stroke="red"
              strokeWidth="1"
            />
            <line
              x1="140"
              y1="150"
              x2="260"
              y2="150"
              stroke="red"
              strokeWidth="1"
            />
            <circle cx="200" cy="150" r="5" fill="red" />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="20"
              fill="red"
              fontWeight="bold"
            >
              HEADSHOT
            </text>
            <Stickman x={200} y={160} pose="dead" color="white" />
          </svg>
        );

      case "desert_sneak":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#0a0a2e" />
            <rect x="0" y="150" width="400" height="150" fill="#c2a060" />
            {/* Motion sensors */}
            <circle
              cx="150"
              cy="180"
              r="15"
              fill="none"
              stroke="red"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <circle
              cx="250"
              cy="190"
              r="15"
              fill="none"
              stroke="red"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <circle
              cx="350"
              cy="175"
              r="15"
              fill="none"
              stroke="red"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
            <circle cx="150" cy="180" r="3" fill="red" />
            <circle cx="250" cy="190" r="3" fill="red" />
            <circle cx="350" cy="175" r="3" fill="red" />
            <Stickman x={60} y={210} pose="run" color="white" />
          </svg>
        );

      case "fail_landmine":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#331100" />
            <path
              d="M200 180 L180 100 L220 130 L260 80 L240 150 L280 160 L200 180 L160 130 L130 150 L200 180"
              fill="orange"
              stroke="red"
              strokeWidth="2"
            />
            <text
              x="200"
              y="250"
              textAnchor="middle"
              fontSize="28"
              fill="orange"
              fontWeight="bold"
            >
              💥 BOOM
            </text>
            <Stickman x={200} y={200} pose="dead" color="white" />
          </svg>
        );

      case "sensor_success":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="220" width="400" height="80" fill="#c2a060" />
            {/* Disabled sensors */}
            <circle
              cx="150"
              cy="200"
              r="12"
              fill="none"
              stroke="gray"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="250"
              cy="200"
              r="12"
              fill="none"
              stroke="gray"
              strokeWidth="1"
              opacity="0.3"
            />
            {/* Vent shaft */}
            <rect
              x="300"
              y="160"
              width="60"
              height="40"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <line
              x1="310"
              y1="170"
              x2="310"
              y2="190"
              stroke="#555"
              strokeWidth="1"
            />
            <line
              x1="330"
              y1="170"
              x2="330"
              y2="190"
              stroke="#555"
              strokeWidth="1"
            />
            <line
              x1="350"
              y1="170"
              x2="350"
              y2="190"
              stroke="#555"
              strokeWidth="1"
            />
            <text x="200" y="120" textAnchor="middle" fontSize="14" fill="lime">
              SENSORS OFFLINE ✓
            </text>
            <Stickman x={200} y={200} pose="run" color="white" />
          </svg>
        );

      case "fail_face_scan":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <rect
              x="140"
              y="80"
              width="120"
              height="80"
              fill="#222"
              stroke="red"
              strokeWidth="3"
              rx="5"
            />
            <circle
              cx="200"
              cy="120"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="180"
              y1="100"
              x2="220"
              y2="140"
              stroke="red"
              strokeWidth="2"
            />
            <text x="200" y="200" textAnchor="middle" fontSize="18" fill="red">
              ACCESS DENIED
            </text>
            <Stickman x={200} y={250} pose="hands_up" color="white" />
          </svg>
        );

      case "fake_scientist":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3e" />
            <rect x="0" y="250" width="400" height="50" fill="#444" />
            {/* Lab coat on stickman */}
            <rect
              x="180"
              y="188"
              width="40"
              height="45"
              fill="white"
              rx="3"
              opacity="0.8"
            />
            <Stickman x={200} y={200} pose="stand" color="black" />
            {/* Glasses */}
            <rect
              x="190"
              y="175"
              width="20"
              height="8"
              fill="none"
              stroke="black"
              strokeWidth="1"
              rx="2"
            />
            <Guard x={320} y={200} />
            <text x="320" y="150" textAnchor="middle" fontSize="10" fill="gray">
              ID please?
            </text>
          </svg>
        );

      case "fail_guard_question":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#330000" />
            <text x="200" y="100" textAnchor="middle" fontSize="20" fill="red">
              NO ID!
            </text>
            <text x="200" y="140" textAnchor="middle" fontSize="14" fill="gray">
              *sweating intensifies*
            </text>
            <Guard x={280} y={200} />
            <Stickman x={120} y={200} pose="hands_up" color="white" />
          </svg>
        );

      case "alien_signal":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            <rect x="0" y="230" width="400" height="70" fill="#c2a060" />
            {/* Beacon device */}
            <rect
              x="180"
              y="180"
              width="40"
              height="50"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
              rx="3"
            />
            <circle cx="200" cy="170" r="8" fill="lime" opacity="0.6" />
            {/* Signal waves */}
            <circle
              cx="200"
              cy="100"
              r="20"
              fill="none"
              stroke="lime"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle
              cx="200"
              cy="100"
              r="40"
              fill="none"
              stroke="lime"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="100"
              r="60"
              fill="none"
              stroke="lime"
              strokeWidth="1"
              opacity="0.15"
            />
            <Stickman x={100} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_emp":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#001133" />
            <circle cx="200" cy="150" r="60" fill="cyan" opacity="0.2" />
            <circle cx="200" cy="150" r="30" fill="cyan" opacity="0.3" />
            <path
              d="M180 130 L200 100 L220 130"
              stroke="yellow"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M190 160 L200 190 L210 160"
              stroke="yellow"
              strokeWidth="3"
              fill="none"
            />
            <text x="200" y="260" textAnchor="middle" fontSize="20" fill="cyan">
              EMP SHOCK!
            </text>
            <Stickman x={200} y={170} pose="dead" color="white" />
          </svg>
        );

      case "alien_arrival":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            <rect x="0" y="230" width="400" height="70" fill="#c2a060" />
            {/* UFO */}
            <ellipse
              cx="200"
              cy="60"
              rx="70"
              ry="18"
              fill="#444"
              stroke="lime"
              strokeWidth="2"
            />
            <ellipse
              cx="200"
              cy="50"
              rx="35"
              ry="25"
              fill="#555"
              stroke="lime"
              strokeWidth="2"
            />
            {/* Beam */}
            <path
              d="M160 78 L120 230 L280 230 L240 78"
              fill="lime"
              opacity="0.1"
            />
            <circle cx="180" cy="55" r="4" fill="lime" opacity="0.6" />
            <circle cx="220" cy="55" r="4" fill="lime" opacity="0.6" />
            <Stickman x={60} y={200} pose="run" color="white" />
            <text x="340" y="200" textAnchor="middle" fontSize="10" fill="lime">
              CHAOS!
            </text>
          </svg>
        );

      case "vent_system":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3a" />
            {/* Vent walls */}
            <rect x="0" y="80" width="400" height="140" fill="#333" />
            <line
              x1="0"
              y1="80"
              x2="400"
              y2="80"
              stroke="#555"
              strokeWidth="3"
            />
            <line
              x1="0"
              y1="220"
              x2="400"
              y2="220"
              stroke="#555"
              strokeWidth="3"
            />
            {/* Rivets */}
            <circle cx="50" cy="85" r="3" fill="#444" />
            <circle cx="150" cy="85" r="3" fill="#444" />
            <circle cx="250" cy="85" r="3" fill="#444" />
            <circle cx="350" cy="85" r="3" fill="#444" />
            {/* Fork */}
            <line
              x1="200"
              y1="80"
              x2="200"
              y2="220"
              stroke="#555"
              strokeWidth="2"
            />
            <text x="100" y="160" textAnchor="middle" fontSize="10" fill="gray">
              ← LEFT
            </text>
            <text x="300" y="160" textAnchor="middle" fontSize="10" fill="gray">
              RIGHT →
            </text>
            <Stickman x={200} y={140} pose="run" color="white" />
          </svg>
        );

      case "lab_hallway":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="250" width="400" height="50" fill="#333" />
            {/* Fluorescent lights */}
            <rect
              x="80"
              y="20"
              width="80"
              height="8"
              fill="white"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="240"
              y="20"
              width="80"
              height="8"
              fill="white"
              opacity="0.6"
              rx="2"
            />
            {/* Doors with labels */}
            <rect
              x="30"
              y="100"
              width="60"
              height="150"
              fill="#336"
              stroke="cyan"
              strokeWidth="2"
              rx="3"
            />
            <text x="60" y="175" textAnchor="middle" fontSize="6" fill="cyan">
              ALIEN LAB
            </text>
            <rect
              x="170"
              y="100"
              width="60"
              height="150"
              fill="#363"
              stroke="lime"
              strokeWidth="2"
              rx="3"
            />
            <text x="200" y="175" textAnchor="middle" fontSize="6" fill="lime">
              WEAPONS
            </text>
            <rect
              x="310"
              y="100"
              width="60"
              height="150"
              fill="#333"
              stroke="white"
              strokeWidth="2"
              rx="3"
            />
            <text x="340" y="175" textAnchor="middle" fontSize="6" fill="white">
              SERVERS
            </text>
            <Stickman x={130} y={200} pose="stand" color="white" />
          </svg>
        );

      case "weapon_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="250" width="400" height="50" fill="#333" />
            {/* Weapon rack */}
            <rect
              x="60"
              y="80"
              width="280"
              height="150"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            {/* Plasma guns */}
            <rect
              x="80"
              y="110"
              width="50"
              height="12"
              fill="#336"
              stroke="cyan"
              strokeWidth="1"
              rx="3"
            />
            <circle cx="135" cy="116" r="4" fill="cyan" opacity="0.5" />
            <rect
              x="80"
              y="140"
              width="60"
              height="12"
              fill="#363"
              stroke="lime"
              strokeWidth="1"
              rx="3"
            />
            <circle cx="145" cy="146" r="4" fill="lime" opacity="0.5" />
            <rect
              x="80"
              y="170"
              width="55"
              height="12"
              fill="#633"
              stroke="red"
              strokeWidth="1"
              rx="3"
            />
            <circle cx="140" cy="176" r="4" fill="red" opacity="0.5" />
            <text x="250" y="160" textAnchor="middle" fontSize="10" fill="red">
              ⚠ EXPERIMENTAL
            </text>
            <Stickman x={200} y={250} pose="stand" color="white" />
          </svg>
        );

      case "chaos_path":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a2e" />
            {/* Plasma blast */}
            <line
              x1="100"
              y1="180"
              x2="300"
              y2="100"
              stroke="cyan"
              strokeWidth="4"
            />
            <circle cx="300" cy="100" r="20" fill="cyan" opacity="0.3" />
            <circle cx="300" cy="100" r="10" fill="white" opacity="0.5" />
            <text
              x="200"
              y="60"
              textAnchor="middle"
              fontSize="20"
              fill="red"
              fontWeight="bold"
            >
              🚨 ALARM!
            </text>
            <Stickman x={100} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_robot_guard":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Robot */}
            <rect
              x="230"
              y="120"
              width="60"
              height="80"
              fill="#555"
              stroke="#888"
              strokeWidth="2"
              rx="5"
            />
            <rect
              x="240"
              y="100"
              width="40"
              height="30"
              fill="#444"
              stroke="#888"
              strokeWidth="2"
              rx="5"
            />
            <circle cx="252" cy="112" r="5" fill="red" />
            <circle cx="268" cy="112" r="5" fill="red" />
            <rect x="225" y="200" width="20" height="40" fill="#555" />
            <rect x="275" y="200" width="20" height="40" fill="#555" />
            <text x="260" y="90" textAnchor="middle" fontSize="10" fill="red">
              TERMINATE
            </text>
            <Stickman x={120} y={200} pose="dead" color="white" />
          </svg>
        );

      case "server_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Server racks */}
            <rect
              x="40"
              y="40"
              width="50"
              height="220"
              fill="#222"
              stroke="#336"
              strokeWidth="2"
            />
            <rect
              x="110"
              y="40"
              width="50"
              height="220"
              fill="#222"
              stroke="#336"
              strokeWidth="2"
            />
            <rect
              x="240"
              y="40"
              width="50"
              height="220"
              fill="#222"
              stroke="#336"
              strokeWidth="2"
            />
            <rect
              x="310"
              y="40"
              width="50"
              height="220"
              fill="#222"
              stroke="#336"
              strokeWidth="2"
            />
            {/* Blinking lights */}
            <circle cx="55" cy="70" r="3" fill="cyan" opacity="0.7" />
            <circle cx="55" cy="90" r="3" fill="cyan" opacity="0.5" />
            <circle cx="55" cy="110" r="3" fill="lime" opacity="0.7" />
            <circle cx="125" cy="70" r="3" fill="cyan" opacity="0.6" />
            <circle cx="125" cy="90" r="3" fill="lime" opacity="0.7" />
            <circle cx="255" cy="70" r="3" fill="cyan" opacity="0.7" />
            <circle cx="325" cy="70" r="3" fill="lime" opacity="0.5" />
            <circle cx="325" cy="90" r="3" fill="cyan" opacity="0.7" />
            <Stickman x={190} y={220} pose="stand" color="white" />
          </svg>
        );

      case "alien_containment":
      case "alien_lab":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Containment tube */}
            <rect
              x="140"
              y="50"
              width="120"
              height="200"
              fill="#113"
              stroke="cyan"
              strokeWidth="3"
              rx="15"
            />
            <rect
              x="145"
              y="55"
              width="110"
              height="190"
              fill="#0a0a3e"
              rx="12"
            />
            {/* Alien */}
            <ellipse
              cx="200"
              cy="130"
              rx="20"
              ry="25"
              fill="#3a5"
              stroke="lime"
              strokeWidth="2"
            />
            <circle cx="190" cy="125" r="5" fill="black" />
            <circle cx="210" cy="125" r="5" fill="black" />
            <line
              x1="200"
              y1="155"
              x2="200"
              y2="200"
              stroke="#3a5"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="170"
              x2="180"
              y2="185"
              stroke="#3a5"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="170"
              x2="220"
              y2="185"
              stroke="#3a5"
              strokeWidth="2"
            />
            {/* Glow */}
            <circle cx="200" cy="150" r="50" fill="cyan" opacity="0.05" />
            <Stickman x={50} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_alien_mind":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a001a" />
            {/* Telepathy waves */}
            <circle
              cx="200"
              cy="100"
              r="30"
              fill="none"
              stroke="purple"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="200"
              cy="100"
              r="60"
              fill="none"
              stroke="purple"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="100"
              r="90"
              fill="none"
              stroke="purple"
              strokeWidth="1"
              opacity="0.15"
            />
            <text
              x="200"
              y="200"
              textAnchor="middle"
              fontSize="20"
              fill="purple"
              fontWeight="bold"
            >
              MIND CONTROLLED
            </text>
            <Stickman x={200} y={240} pose="dead" color="white" />
          </svg>
        );

      case "alien_friend":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Broken containment */}
            <rect
              x="160"
              y="50"
              width="80"
              height="180"
              fill="none"
              stroke="red"
              strokeWidth="2"
              rx="10"
              strokeDasharray="8,6"
            />
            {/* Alien free */}
            <ellipse
              cx="270"
              cy="170"
              rx="15"
              ry="20"
              fill="#3a5"
              stroke="lime"
              strokeWidth="2"
            />
            <circle cx="263" cy="165" r="4" fill="black" />
            <circle cx="277" cy="165" r="4" fill="black" />
            <line
              x1="270"
              y1="190"
              x2="270"
              y2="230"
              stroke="#3a5"
              strokeWidth="2"
            />
            <Stickman x={130} y={200} pose="stand" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="12" fill="lime">
              *alien nods*
            </text>
          </svg>
        );

      case "secret_truth":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Terminal */}
            <rect
              x="80"
              y="50"
              width="240"
              height="160"
              fill="#111"
              stroke="lime"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="100"
              y="90"
              fontSize="9"
              fill="lime"
              fontFamily="monospace"
            >
              PROJECT: CHRONOS
            </text>
            <text
              x="100"
              y="110"
              fontSize="9"
              fill="lime"
              fontFamily="monospace"
            >
              STATUS: TIME_TRAVEL
            </text>
            <text
              x="100"
              y="130"
              fontSize="9"
              fill="lime"
              fontFamily="monospace"
            >
              EXPERIMENTS: 47
            </text>
            <text
              x="100"
              y="150"
              fontSize="9"
              fill="red"
              fontFamily="monospace"
            >
              CLASSIFIED: LVL OMEGA
            </text>
            <text
              x="100"
              y="180"
              fontSize="9"
              fill="yellow"
              fontFamily="monospace"
            >
              DOWNLOAD: ████████ 100%
            </text>
            <Stickman x={200} y={250} pose="sit" color="white" />
          </svg>
        );

      case "escape_corridor":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="250" width="400" height="50" fill="#333" />
            {/* Corridor lights - red alarm */}
            <rect
              x="80"
              y="20"
              width="40"
              height="8"
              fill="red"
              opacity="0.6"
            />
            <rect
              x="180"
              y="20"
              width="40"
              height="8"
              fill="red"
              opacity="0.6"
            />
            <rect
              x="280"
              y="20"
              width="40"
              height="8"
              fill="red"
              opacity="0.6"
            />
            {/* Exit sign */}
            <rect x="330" y="40" width="50" height="20" fill="green" rx="2" />
            <text
              x="355"
              y="54"
              textAnchor="middle"
              fontSize="10"
              fill="white"
              fontWeight="bold"
            >
              EXIT
            </text>
            <Stickman x={100} y={200} pose="run" color="white" />
          </svg>
        );

      case "fail_found":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#220000" />
            <text x="200" y="100" textAnchor="middle" fontSize="18" fill="red">
              WRONG ROOM!
            </text>
            <text x="200" y="140" textAnchor="middle" fontSize="12" fill="gray">
              You hid in the warden's office.
            </text>
            <Guard x={280} y={200} />
            <Stickman x={120} y={200} pose="hands_up" color="white" />
          </svg>
        );

      /* AREA 51 ENDINGS */

      case "ufo_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Stars */}
            <circle cx="50" cy="30" r="2" fill="white" />
            <circle cx="150" cy="60" r="1" fill="white" />
            <circle cx="300" cy="40" r="2" fill="white" />
            <circle cx="350" cy="100" r="1" fill="white" />
            {/* UFO flying away */}
            <ellipse
              cx="200"
              cy="100"
              rx="60"
              ry="15"
              fill="#444"
              stroke="lime"
              strokeWidth="2"
            />
            <ellipse
              cx="200"
              cy="90"
              rx="30"
              ry="22"
              fill="#555"
              stroke="lime"
              strokeWidth="2"
            />
            {/* Alien + stickman inside */}
            <circle cx="190" cy="85" r="5" fill="lime" opacity="0.5" />
            <circle cx="210" cy="85" r="5" fill="white" opacity="0.5" />
            <text
              x="200"
              y="240"
              textAnchor="middle"
              fontSize="18"
              fill="lime"
              fontWeight="bold"
            >
              TO THE STARS! 🌟
            </text>
          </svg>
        );

      case "government_agent":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Suit */}
            <rect x="180" y="185" width="40" height="50" fill="#111" rx="3" />
            <Stickman x={200} y={200} pose="stand" color="white" />
            {/* Sunglasses */}
            <rect x="190" y="175" width="20" height="6" fill="black" rx="2" />
            {/* Money bags */}
            <rect x="60" y="200" width="40" height="30" fill="#556b2f" rx="3" />
            <text x="80" y="220" textAnchor="middle" fontSize="10" fill="white">
              $$$
            </text>
            <rect
              x="300"
              y="200"
              width="40"
              height="30"
              fill="#556b2f"
              rx="3"
            />
            <text
              x="320"
              y="220"
              textAnchor="middle"
              fontSize="10"
              fill="white"
            >
              $$$
            </text>
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              AGENT STATUS
            </text>
          </svg>
        );

      case "time_machine":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            {/* Time vortex */}
            <circle
              cx="200"
              cy="150"
              r="100"
              fill="none"
              stroke="purple"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="150"
              r="70"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle
              cx="200"
              cy="150"
              r="40"
              fill="none"
              stroke="cyan"
              strokeWidth="3"
              opacity="0.6"
            />
            <circle cx="200" cy="150" r="15" fill="white" opacity="0.8" />
            <Stickman x={200} y={160} pose="hands_up" color="white" />
            <text
              x="200"
              y="275"
              textAnchor="middle"
              fontSize="14"
              fill="cyan"
              fontWeight="bold"
            >
              PARADOX!
            </text>
          </svg>
        );

      case "news_breaking":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* TV screen */}
            <rect
              x="60"
              y="40"
              width="280"
              height="180"
              fill="#222"
              stroke="#555"
              strokeWidth="4"
              rx="5"
            />
            <rect x="70" y="50" width="260" height="155" fill="#112" />
            <rect x="80" y="170" width="240" height="30" fill="red" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              BREAKING NEWS
            </text>
            <text
              x="200"
              y="130"
              textAnchor="middle"
              fontSize="10"
              fill="white"
            >
              AREA 51: ALIENS ARE REAL
            </text>
            <text
              x="200"
              y="190"
              textAnchor="middle"
              fontSize="10"
              fill="white"
            >
              WHISTLEBLOWER REVEALS ALL
            </text>
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="14"
              fill="orange"
              fontWeight="bold"
            >
              WORLD CHANGED!
            </text>
          </svg>
        );

      case "jet_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a3e" />
            {/* Jet */}
            <path
              d="M80 150 L300 140 L340 130 L350 140 L340 150 L300 160 Z"
              fill="#555"
              stroke="#888"
              strokeWidth="2"
            />
            <path
              d="M200 140 L230 100 L260 140"
              fill="#444"
              stroke="#888"
              strokeWidth="2"
            />
            <path d="M100 148 L80 130 L100 135 Z" fill="#555" />
            <path d="M100 152 L80 170 L100 165 Z" fill="#555" />
            {/* Afterburner */}
            <path
              d="M80 145 L50 140 L60 150 L50 160 L80 155"
              fill="orange"
              opacity="0.8"
            />
            <circle cx="65" cy="150" r="5" fill="yellow" opacity="0.6" />
            <Stickman x={250} y={140} pose="sit" color="white" />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="16"
              fill="cyan"
              fontWeight="bold"
            >
              MACH 5 ESCAPE!
            </text>
          </svg>
        );

      case "server_dark":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050505" />
            {/* Dead servers */}
            <rect
              x="80"
              y="60"
              width="50"
              height="180"
              fill="#111"
              stroke="#222"
              strokeWidth="2"
            />
            <rect
              x="175"
              y="60"
              width="50"
              height="180"
              fill="#111"
              stroke="#222"
              strokeWidth="2"
            />
            <rect
              x="270"
              y="60"
              width="50"
              height="180"
              fill="#111"
              stroke="#222"
              strokeWidth="2"
            />
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="#333">
              TRUTH ERASED
            </text>
            <Stickman x={200} y={260} pose="stand" color="#333" />
          </svg>
        );

      /* ============ ISLAND STORY ============ */

      case "beach_crash":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="120" fill="#87ceeb" />
            <rect x="0" y="120" width="400" height="80" fill="#f0d080" />
            <rect x="0" y="200" width="400" height="100" fill="#2196F3" />
            {/* Sun */}
            <circle cx="350" cy="40" r="25" fill="#ffdd00" />
            {/* Burning wreckage */}
            <rect x="250" y="80" width="100" height="40" fill="#555" rx="5" />
            <path
              d="M270 80 L280 50 L290 70 L310 40 L320 70 L330 55 L340 80"
              fill="orange"
              stroke="red"
              strokeWidth="2"
            />
            {/* Palm tree */}
            <line
              x1="60"
              y1="80"
              x2="60"
              y2="160"
              stroke="#654321"
              strokeWidth="6"
            />
            <path d="M30 80 Q60 40 90 80" fill="green" />
            <path d="M20 90 Q60 50 100 90" fill="#2d8a2d" />
            <Stickman x={150} y={150} pose="stand" color="black" />
          </svg>
        );

      case "wreckage_search":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#f0d080" />
            <rect x="0" y="250" width="400" height="50" fill="#d4a050" />
            {/* Wreckage pieces */}
            <rect
              x="100"
              y="150"
              width="120"
              height="60"
              fill="#666"
              rx="5"
              stroke="#444"
              strokeWidth="2"
            />
            <rect x="240" y="170" width="60" height="30" fill="#555" rx="3" />
            <path d="M100 150 L130 120 L160 150" fill="#777" />
            {/* Smoke */}
            <circle cx="200" cy="100" r="15" fill="gray" opacity="0.3" />
            <circle cx="210" cy="80" r="12" fill="gray" opacity="0.2" />
            {/* Items */}
            <rect
              x="130"
              y="220"
              width="20"
              height="12"
              fill="white"
              stroke="red"
              strokeWidth="1"
              rx="2"
            />
            <text x="140" y="229" textAnchor="middle" fontSize="6" fill="red">
              +
            </text>
            <rect x="200" y="220" width="25" height="8" fill="red" rx="2" />
            <Stickman x={60} y={200} pose="stand" color="black" />
          </svg>
        );

      case "first_aid":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#f0d080" />
            {/* First aid kit */}
            <rect
              x="160"
              y="120"
              width="80"
              height="60"
              fill="white"
              stroke="red"
              strokeWidth="3"
              rx="5"
            />
            <rect x="190" y="130" width="20" height="40" fill="red" rx="2" />
            <rect x="170" y="140" width="60" height="20" fill="red" rx="2" />
            <text
              x="200"
              y="220"
              textAnchor="middle"
              fontSize="14"
              fill="green"
            >
              PATCHED UP ✓
            </text>
            <Stickman x={200} y={260} pose="stand" color="black" />
          </svg>
        );

      case "flare_taken":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#f0d080" />
            {/* Flare gun */}
            <rect
              x="175"
              y="140"
              width="50"
              height="15"
              fill="#c00"
              stroke="#900"
              strokeWidth="2"
              rx="3"
            />
            <rect x="195" y="145" width="10" height="30" fill="#900" />
            <circle cx="175" cy="147" r="5" fill="orange" opacity="0.6" />
            <text x="200" y="220" textAnchor="middle" fontSize="14" fill="red">
              FLARE GUN ACQUIRED
            </text>
            <Stickman x={200} y={260} pose="stand" color="black" />
          </svg>
        );

      case "jungle_entry":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            <rect x="0" y="250" width="400" height="50" fill="#2d4a2d" />
            {/* Trees */}
            <line
              x1="50"
              y1="250"
              x2="50"
              y2="100"
              stroke="#654321"
              strokeWidth="8"
            />
            <circle cx="50" cy="80" r="40" fill="#2d8a2d" />
            <line
              x1="350"
              y1="250"
              x2="350"
              y2="120"
              stroke="#654321"
              strokeWidth="8"
            />
            <circle cx="350" cy="100" r="35" fill="#2d8a2d" />
            <line
              x1="200"
              y1="250"
              x2="200"
              y2="60"
              stroke="#654321"
              strokeWidth="10"
            />
            <circle cx="200" cy="40" r="45" fill="#1a6a1a" />
            {/* Vines */}
            <path
              d="M100 80 Q120 130 100 180"
              stroke="#3a5"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300 90 Q280 140 300 190"
              stroke="#3a5"
              strokeWidth="2"
              fill="none"
            />
            <Stickman x={200} y={210} pose="stand" color="white" />
          </svg>
        );

      case "river_path":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            {/* River */}
            <path
              d="M0 150 Q100 120 200 150 Q300 180 400 150"
              fill="#2196F3"
              opacity="0.7"
            />
            <path
              d="M0 170 Q100 140 200 170 Q300 200 400 170"
              fill="#2196F3"
              opacity="0.5"
            />
            {/* Waterfall */}
            <rect
              x="320"
              y="60"
              width="60"
              height="100"
              fill="#87ceeb"
              opacity="0.6"
            />
            <line
              x1="320"
              y1="60"
              x2="320"
              y2="160"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="380"
              y1="60"
              x2="380"
              y2="160"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <rect x="310" y="50" width="80" height="15" fill="#555" />
            <Stickman x={100} y={120} pose="stand" color="white" />
          </svg>
        );

      case "fail_poisoned":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            <text x="200" y="100" textAnchor="middle" fontSize="30" fill="lime">
              ☠️
            </text>
            <text x="200" y="150" textAnchor="middle" fontSize="18" fill="lime">
              CONTAMINATED!
            </text>
            <text x="200" y="180" textAnchor="middle" fontSize="12" fill="gray">
              Should've boiled it...
            </text>
            <Stickman x={200} y={240} pose="dead" color="white" />
          </svg>
        );

      case "animal_tracks":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d4a2d" />
            <rect x="0" y="230" width="400" height="70" fill="#3a5a3a" />
            {/* Tracks */}
            <circle cx="100" cy="250" r="4" fill="#1a3a1a" />
            <circle cx="95" cy="248" r="2" fill="#1a3a1a" />
            <circle cx="105" cy="248" r="2" fill="#1a3a1a" />
            <circle cx="150" cy="240" r="4" fill="#1a3a1a" />
            <circle cx="145" cy="238" r="2" fill="#1a3a1a" />
            <circle cx="155" cy="238" r="2" fill="#1a3a1a" />
            <circle cx="200" cy="250" r="4" fill="#1a3a1a" />
            {/* Boar silhouette */}
            <ellipse cx="300" cy="210" rx="30" ry="20" fill="#553" />
            <circle cx="325" cy="205" r="8" fill="#553" />
            <Stickman x={60} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_attack":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d4a2d" />
            {/* Aggressive boar */}
            <ellipse
              cx="250"
              cy="200"
              rx="40"
              ry="25"
              fill="#553"
              stroke="#332"
              strokeWidth="2"
            />
            <circle cx="285" cy="193" r="10" fill="#553" />
            <circle cx="290" cy="190" r="3" fill="red" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="24"
              fill="red"
              fontWeight="bold"
            >
              CHARGE!
            </text>
            <Stickman x={120} y={200} pose="dead" color="white" />
          </svg>
        );

      case "food_success":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d4a2d" />
            {/* Fire */}
            <path d="M190 220 L200 190 L210 220" fill="orange" />
            <path d="M185 225 L200 200 L215 225" fill="red" opacity="0.7" />
            <rect x="170" y="225" width="60" height="5" fill="#654321" />
            {/* Cooked food */}
            <line
              x1="190"
              y1="210"
              x2="210"
              y2="210"
              stroke="#654321"
              strokeWidth="2"
            />
            <ellipse cx="200" cy="208" rx="8" ry="5" fill="#a66" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="14"
              fill="orange"
            >
              FOOD! ✓
            </text>
            <Stickman x={130} y={210} pose="stand" color="white" />
          </svg>
        );

      case "tree_view":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#87ceeb" />
            {/* Jungle canopy below */}
            <ellipse cx="100" cy="250" rx="60" ry="30" fill="#2d8a2d" />
            <ellipse cx="200" cy="260" rx="70" ry="25" fill="#1a6a1a" />
            <ellipse cx="320" cy="240" rx="55" ry="35" fill="#2d8a2d" />
            {/* Distant smoke */}
            <circle cx="340" cy="100" r="8" fill="gray" opacity="0.4" />
            <circle cx="345" cy="85" r="6" fill="gray" opacity="0.3" />
            <circle cx="343" cy="70" r="4" fill="gray" opacity="0.2" />
            <Stickman x={200} y={220} pose="stand" color="black" />
            <text x="340" y="130" textAnchor="middle" fontSize="10" fill="gray">
              smoke?
            </text>
          </svg>
        );

      case "build_shelter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#1a1a3e" />
            <rect x="0" y="150" width="400" height="150" fill="#2d4a2d" />
            {/* Shelter frame */}
            <line
              x1="120"
              y1="200"
              x2="200"
              y2="140"
              stroke="#654321"
              strokeWidth="4"
            />
            <line
              x1="280"
              y1="200"
              x2="200"
              y2="140"
              stroke="#654321"
              strokeWidth="4"
            />
            <line
              x1="120"
              y1="200"
              x2="280"
              y2="200"
              stroke="#654321"
              strokeWidth="4"
            />
            {/* Moon */}
            <circle cx="350" cy="40" r="15" fill="#ffffcc" opacity="0.6" />
            <Stickman x={200} y={180} pose="stand" color="white" />
          </svg>
        );

      case "hidden_cave":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a1a" />
            {/* Cave entrance */}
            <ellipse cx="200" cy="200" rx="120" ry="100" fill="#111" />
            <ellipse cx="200" cy="200" rx="100" ry="80" fill="#0a0a0a" />
            {/* Stalactites */}
            <path d="M130 120 L140 160 L150 120" fill="#333" />
            <path d="M200 110 L210 155 L220 110" fill="#333" />
            <path d="M260 120 L270 150 L280 120" fill="#333" />
            <Stickman x={200} y={230} pose="stand" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="10" fill="gray">
              *dripping echoes*
            </text>
          </svg>
        );

      case "storm_night":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Rain */}
            <line
              x1="50"
              y1="0"
              x2="40"
              y2="30"
              stroke="#668"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="120"
              y1="20"
              x2="110"
              y2="50"
              stroke="#668"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="200"
              y1="10"
              x2="190"
              y2="40"
              stroke="#668"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="280"
              y1="0"
              x2="270"
              y2="30"
              stroke="#668"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="350"
              y1="15"
              x2="340"
              y2="45"
              stroke="#668"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="80"
              y1="60"
              x2="70"
              y2="90"
              stroke="#668"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="160"
              y1="50"
              x2="150"
              y2="80"
              stroke="#668"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="240"
              y1="70"
              x2="230"
              y2="100"
              stroke="#668"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="320"
              y1="55"
              x2="310"
              y2="85"
              stroke="#668"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Lightning */}
            <path
              d="M300 0 L280 80 L310 90 L270 180"
              stroke="yellow"
              strokeWidth="3"
              fill="none"
            />
            {/* Shelter */}
            <line
              x1="120"
              y1="230"
              x2="200"
              y2="180"
              stroke="#654321"
              strokeWidth="4"
            />
            <line
              x1="280"
              y1="230"
              x2="200"
              y2="180"
              stroke="#654321"
              strokeWidth="4"
            />
            <Stickman x={200} y={210} pose="sit" color="white" />
          </svg>
        );

      case "fail_lightning":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            <path
              d="M200 0 L180 100 L220 110 L170 250"
              stroke="yellow"
              strokeWidth="5"
              fill="none"
            />
            <circle cx="190" cy="240" r="30" fill="yellow" opacity="0.15" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="20"
              fill="yellow"
            >
              ⚡ STRIKE!
            </text>
            <Stickman x={200} y={230} pose="dead" color="white" />
          </svg>
        );

      case "morning_after":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#ffcc80" />
            <rect x="0" y="150" width="400" height="150" fill="#2d4a2d" />
            {/* Sunrise */}
            <circle cx="200" cy="150" r="40" fill="#ffdd00" opacity="0.8" />
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="80"
              stroke="#ffdd00"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="240"
              y1="110"
              x2="260"
              y2="95"
              stroke="#ffdd00"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="160"
              y1="110"
              x2="140"
              y2="95"
              stroke="#ffdd00"
              strokeWidth="2"
              opacity="0.5"
            />
            {/* Shelter survived */}
            <line
              x1="100"
              y1="220"
              x2="160"
              y2="190"
              stroke="#654321"
              strokeWidth="3"
            />
            <line
              x1="220"
              y1="220"
              x2="160"
              y2="190"
              stroke="#654321"
              strokeWidth="3"
            />
            <Stickman x={160} y={200} pose="stand" color="black" />
            <text
              x="300"
              y="250"
              textAnchor="middle"
              fontSize="10"
              fill="#654321"
            >
              Day 2
            </text>
          </svg>
        );

      case "tribe_encounter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d4a2d" />
            <rect x="0" y="250" width="400" height="50" fill="#3a5a3a" />
            {/* Tribe members */}
            <Stickman x={250} y={200} pose="stand" color="brown" />
            <Stickman x={290} y={200} pose="stand" color="brown" />
            <Stickman x={330} y={200} pose="stand" color="brown" />
            {/* Spears */}
            <line
              x1="240"
              y1="140"
              x2="240"
              y2="220"
              stroke="#654321"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="140"
              x2="320"
              y2="220"
              stroke="#654321"
              strokeWidth="2"
            />
            {/* Fire */}
            <path d="M280 240 L290 225 L300 240" fill="orange" />
            <Stickman x={100} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_hunted":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a1a" />
            <Stickman x={200} y={200} pose="run" color="white" />
            <Stickman x={280} y={210} pose="run" color="brown" />
            <Stickman x={320} y={200} pose="run" color="brown" />
            <text x="200" y="100" textAnchor="middle" fontSize="20" fill="red">
              CAPTURED!
            </text>
          </svg>
        );

      case "tribe_alliance":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d4a2d" />
            <Stickman x={150} y={200} pose="stand" color="white" />
            <Stickman x={250} y={200} pose="stand" color="brown" />
            {/* Handshake line */}
            <line
              x1="165"
              y1="200"
              x2="235"
              y2="200"
              stroke="gold"
              strokeWidth="2"
            />
            <text x="200" y="140" textAnchor="middle" fontSize="14" fill="gold">
              ALLIANCE ✓
            </text>
            {/* Secret bunker entrance */}
            <rect
              x="300"
              y="220"
              width="50"
              height="30"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <text x="325" y="240" textAnchor="middle" fontSize="6" fill="gray">
              BUNKER
            </text>
          </svg>
        );

      case "hidden_bunker":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="250" width="400" height="50" fill="#333" />
            {/* Military equipment */}
            <rect
              x="50"
              y="100"
              width="80"
              height="130"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <rect
              x="270"
              y="100"
              width="80"
              height="130"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            {/* Radio tower */}
            <line
              x1="90"
              y1="100"
              x2="90"
              y2="60"
              stroke="#888"
              strokeWidth="3"
            />
            <line
              x1="80"
              y1="70"
              x2="100"
              y2="70"
              stroke="#888"
              strokeWidth="2"
            />
            {/* Strange door */}
            <rect
              x="160"
              y="100"
              width="80"
              height="150"
              fill="#400"
              stroke="red"
              strokeWidth="3"
              rx="3"
            />
            <text x="200" y="180" textAnchor="middle" fontSize="8" fill="red">
              ⚠ DO NOT OPEN
            </text>
            <Stickman x={200} y={250} pose="stand" color="white" />
          </svg>
        );

      case "monster_release":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a001a" />
            {/* Monster silhouette */}
            <ellipse
              cx="250"
              cy="140"
              rx="50"
              ry="60"
              fill="#300"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="235" cy="120" r="8" fill="red" opacity="0.8" />
            <circle cx="265" cy="120" r="8" fill="red" opacity="0.8" />
            <path
              d="M220 160 Q250 180 280 160"
              stroke="red"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="18"
              fill="red"
              fontWeight="bold"
            >
              IT'S OUT!
            </text>
            <Stickman x={80} y={220} pose="run" color="white" />
          </svg>
        );

      case "fail_monster":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a001a" />
            <circle cx="200" cy="120" r="60" fill="#300" />
            <circle cx="185" cy="110" r="8" fill="red" />
            <circle cx="215" cy="110" r="8" fill="red" />
            <text x="200" y="250" textAnchor="middle" fontSize="18" fill="red">
              DEVOURED
            </text>
            <Stickman x={200} y={220} pose="dead" color="white" />
          </svg>
        );

      case "coast_signal":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#87ceeb" />
            <rect x="0" y="150" width="400" height="50" fill="#2196F3" />
            <rect x="0" y="200" width="400" height="100" fill="#f0d080" />
            {/* Distant ship */}
            <rect x="300" y="110" width="40" height="15" fill="#555" />
            <rect x="315" y="90" width="5" height="20" fill="#666" />
            <rect x="318" y="92" width="15" height="8" fill="white" />
            <Stickman x={100} y={180} pose="hands_up" color="black" />
            <text
              x="100"
              y="140"
              textAnchor="middle"
              fontSize="10"
              fill="black"
            >
              HEY!!!
            </text>
          </svg>
        );

      case "fail_drown":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a3a5a" />
            {/* Waves */}
            <path
              d="M0 150 Q50 130 100 150 Q150 170 200 150 Q250 130 300 150 Q350 170 400 150"
              fill="none"
              stroke="#2196F3"
              strokeWidth="3"
            />
            <path
              d="M0 180 Q50 160 100 180 Q150 200 200 180 Q250 160 300 180 Q350 200 400 180"
              fill="none"
              stroke="#2196F3"
              strokeWidth="3"
            />
            <Stickman x={200} y={200} pose="hands_up" color="white" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="white"
            >
              TOO STRONG!
            </text>
          </svg>
        );

      case "ancient_ruins":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d3a2d" />
            <rect x="0" y="250" width="400" height="50" fill="#3a4a3a" />
            {/* Temple */}
            <rect
              x="120"
              y="100"
              width="160"
              height="150"
              fill="#888"
              stroke="#666"
              strokeWidth="3"
            />
            <path
              d="M100 100 L200 50 L300 100"
              fill="#777"
              stroke="#666"
              strokeWidth="3"
            />
            <rect x="175" y="170" width="50" height="80" fill="#333" />
            {/* Mysterious symbols */}
            <circle
              cx="150"
              cy="140"
              r="8"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            <circle
              cx="250"
              cy="140"
              r="8"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            <path
              d="M185 130 L200 115 L215 130"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            <Stickman x={60} y={210} pose="stand" color="white" />
          </svg>
        );

      /* ISLAND ENDINGS */

      case "rescue_helicopter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#87ceeb" />
            <rect x="0" y="150" width="400" height="50" fill="#f0d080" />
            <rect x="0" y="200" width="400" height="100" fill="#2196F3" />
            {/* Helicopter */}
            <rect
              x="150"
              y="40"
              width="100"
              height="35"
              fill="#c00"
              stroke="#900"
              strokeWidth="2"
              rx="8"
            />
            <line
              x1="120"
              y1="38"
              x2="280"
              y2="38"
              stroke="#900"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="30"
              x2="200"
              y2="40"
              stroke="#900"
              strokeWidth="2"
            />
            <rect x="240" y="50" width="50" height="8" fill="#c00" rx="2" />
            <Stickman x={200} y={130} pose="hands_up" color="black" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="18"
              fill="green"
              fontWeight="bold"
            >
              RESCUED! 🎉
            </text>
          </svg>
        );

      case "monster_escape":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#87ceeb" />
            <rect x="0" y="200" width="400" height="100" fill="#2196F3" />
            {/* Boat */}
            <path
              d="M120 200 L140 220 L260 220 L280 200"
              fill="#654321"
              stroke="#543"
              strokeWidth="2"
            />
            <Stickman x={200} y={190} pose="stand" color="black" />
            {/* Monster in background */}
            <ellipse
              cx="350"
              cy="180"
              rx="20"
              ry="30"
              fill="#300"
              opacity="0.6"
            />
            <circle cx="345" cy="170" r="4" fill="red" />
            <circle cx="355" cy="170" r="4" fill="red" />
            <text x="200" y="270" textAnchor="middle" fontSize="14" fill="red">
              IT FOLLOWS...
            </text>
          </svg>
        );

      case "treasure_gold":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2d3a2d" />
            {/* Treasure chest */}
            <rect
              x="130"
              y="160"
              width="140"
              height="80"
              fill="#8B4513"
              stroke="#654321"
              strokeWidth="3"
              rx="5"
            />
            <rect
              x="130"
              y="150"
              width="140"
              height="20"
              fill="#a0522d"
              stroke="#654321"
              strokeWidth="3"
              rx="5"
            />
            <rect x="190" y="155" width="20" height="12" fill="gold" rx="2" />
            {/* Gold glow */}
            <circle cx="200" cy="200" r="50" fill="gold" opacity="0.1" />
            {/* Gold coins */}
            <circle
              cx="160"
              cy="190"
              r="6"
              fill="gold"
              stroke="#aa8800"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="185"
              r="7"
              fill="gold"
              stroke="#aa8800"
              strokeWidth="1"
            />
            <circle
              cx="240"
              cy="190"
              r="6"
              fill="gold"
              stroke="#aa8800"
              strokeWidth="1"
            />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="18"
              fill="gold"
              fontWeight="bold"
            >
              TREASURE! 💰
            </text>
          </svg>
        );

      case "cursed_temple":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a001a" />
            {/* Cursed artifact glow */}
            <circle cx="200" cy="130" r="60" fill="purple" opacity="0.1" />
            <circle cx="200" cy="130" r="30" fill="purple" opacity="0.2" />
            {/* Artifact */}
            <path
              d="M185 120 L200 90 L215 120 L200 150 Z"
              fill="purple"
              stroke="magenta"
              strokeWidth="2"
            />
            <circle cx="200" cy="120" r="5" fill="magenta" opacity="0.8" />
            {/* Curse effect */}
            <circle
              cx="200"
              cy="130"
              r="80"
              fill="none"
              stroke="purple"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="5,5"
            />
            <Stickman x={200} y={230} pose="hands_up" color="purple" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="purple"
              fontWeight="bold"
            >
              CURSED FOREVER
            </text>
          </svg>
        );

      case "cliff_view":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="150" fill="#87ceeb" />
            <rect x="0" y="150" width="200" height="150" fill="#888" />
            <rect x="200" y="200" width="200" height="100" fill="#2196F3" />
            <Stickman x={100} y={120} pose="stand" color="black" />
            <text
              x="300"
              y="170"
              textAnchor="middle"
              fontSize="10"
              fill="white"
            >
              ocean below
            </text>
          </svg>
        );

      /* ============ GLADIATOR STORY ============ */

      case "arena_cell":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            <rect x="0" y="260" width="400" height="40" fill="#3a2a1a" />
            {/* Stone walls */}
            <rect
              x="10"
              y="10"
              width="380"
              height="250"
              fill="none"
              stroke="#654321"
              strokeWidth="6"
            />
            {/* Bars */}
            <line
              x1="280"
              y1="10"
              x2="280"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            <line
              x1="310"
              y1="10"
              x2="310"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            <line
              x1="340"
              y1="10"
              x2="340"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            <line
              x1="370"
              y1="10"
              x2="370"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            {/* Chain */}
            <circle
              cx="100"
              cy="60"
              r="5"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="75"
              r="5"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="90"
              r="5"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
            <Stickman x={150} y={210} pose="sit" color="white" />
            <text
              x="200"
              y="290"
              textAnchor="middle"
              fontSize="10"
              fill="#654321"
            >
              *crowd roars above*
            </text>
          </svg>
        );

      case "fail_guard_spear":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            <Guard x={280} y={200} />
            {/* Spear */}
            <line
              x1="260"
              y1="170"
              x2="160"
              y2="200"
              stroke="#654321"
              strokeWidth="3"
            />
            <path d="M155 198 L160 190 L168 200" fill="#888" />
            <Stickman x={120} y={200} pose="dead" color="white" />
            <text x="200" y="100" textAnchor="middle" fontSize="18" fill="red">
              TOO EARLY!
            </text>
          </svg>
        );

      case "training_yard":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#87ceeb" />
            <rect x="0" y="200" width="400" height="100" fill="#c2a060" />
            {/* Training dummies */}
            <line
              x1="100"
              y1="150"
              x2="100"
              y2="200"
              stroke="#654321"
              strokeWidth="4"
            />
            <circle cx="100" cy="140" r="10" fill="#654321" />
            <line
              x1="80"
              y1="170"
              x2="120"
              y2="170"
              stroke="#654321"
              strokeWidth="3"
            />
            <line
              x1="300"
              y1="150"
              x2="300"
              y2="200"
              stroke="#654321"
              strokeWidth="4"
            />
            <circle cx="300" cy="140" r="10" fill="#654321" />
            <line
              x1="280"
              y1="170"
              x2="320"
              y2="170"
              stroke="#654321"
              strokeWidth="3"
            />
            {/* Sword */}
            <line
              x1="210"
              y1="160"
              x2="210"
              y2="210"
              stroke="#888"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="210"
              x2="220"
              y2="210"
              stroke="#888"
              strokeWidth="3"
            />
            <Stickman x={200} y={200} pose="stand" color="black" />
          </svg>
        );

      case "prisoner_talk":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            <rect x="0" y="260" width="400" height="40" fill="#3a2a1a" />
            {/* Bars */}
            <line
              x1="190"
              y1="10"
              x2="190"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            <line
              x1="210"
              y1="10"
              x2="210"
              y2="260"
              stroke="#888"
              strokeWidth="4"
            />
            <Stickman x={100} y={210} pose="stand" color="white" />
            <Stickman x={280} y={210} pose="stand" color="orange" />
            <text
              x="280"
              y="160"
              textAnchor="middle"
              fontSize="8"
              fill="orange"
            >
              *whisper* rebellion...
            </text>
          </svg>
        );

      case "rebellion_plan":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a0a" />
            {/* Secret map */}
            <rect
              x="120"
              y="80"
              width="160"
              height="120"
              fill="#d4a050"
              rx="3"
            />
            <line
              x1="140"
              y1="130"
              x2="260"
              y2="130"
              stroke="#654321"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="180"
              stroke="#654321"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="130"
              r="8"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <text x="200" y="135" textAnchor="middle" fontSize="6" fill="red">
              KEY
            </text>
            <Stickman x={80} y={230} pose="stand" color="white" />
            <Stickman x={320} y={230} pose="stand" color="orange" />
          </svg>
        );

      case "arena_fight1":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            {/* Arena walls */}
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            {/* Crowd dots */}
            <circle cx="30" cy="20" r="5" fill="#654321" />
            <circle cx="60" cy="15" r="5" fill="#543" />
            <circle cx="90" cy="25" r="5" fill="#654321" />
            <circle cx="120" cy="18" r="5" fill="#543" />
            <circle cx="150" cy="22" r="5" fill="#654321" />
            <circle cx="200" cy="15" r="5" fill="#543" />
            <circle cx="250" cy="20" r="5" fill="#654321" />
            <circle cx="280" cy="25" r="5" fill="#543" />
            <circle cx="310" cy="18" r="5" fill="#654321" />
            <circle cx="350" cy="22" r="5" fill="#543" />
            <circle cx="380" cy="15" r="5" fill="#654321" />
            {/* Fighters */}
            <Stickman x={120} y={200} pose="stand" color="white" />
            <Stickman x={280} y={200} pose="stand" color="red" />
            {/* Swords */}
            <line
              x1="135"
              y1="185"
              x2="160"
              y2="175"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="265"
              y1="185"
              x2="240"
              y2="175"
              stroke="#888"
              strokeWidth="2"
            />
          </svg>
        );

      case "crowd_cheer":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            <text
              x="200"
              y="40"
              textAnchor="middle"
              fontSize="24"
              fill="gold"
              fontWeight="bold"
            >
              ROAAAR!
            </text>
            <Stickman x={200} y={200} pose="hands_up" color="white" />
            <Stickman x={280} y={220} pose="dead" color="red" />
          </svg>
        );

      case "crowd_boo":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            <text
              x="200"
              y="40"
              textAnchor="middle"
              fontSize="24"
              fill="red"
              fontWeight="bold"
            >
              BOOOOO!
            </text>
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );

      case "crowd_respect":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            <text x="200" y="40" textAnchor="middle" fontSize="16" fill="gold">
              *crowd murmurs*
            </text>
            <Stickman x={150} y={200} pose="stand" color="white" />
            <Stickman x={250} y={210} pose="sit" color="red" />
            <line
              x1="165"
              y1="200"
              x2="235"
              y2="200"
              stroke="gold"
              strokeWidth="1"
              strokeDasharray="4,3"
            />
          </svg>
        );

      case "arena_lion":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            {/* Lion */}
            <ellipse
              cx="280"
              cy="210"
              rx="45"
              ry="28"
              fill="#c8a030"
              stroke="#a08020"
              strokeWidth="2"
            />
            <circle
              cx="320"
              cy="200"
              r="18"
              fill="#c8a030"
              stroke="#a08020"
              strokeWidth="2"
            />
            <circle cx="320" cy="195" r="22" fill="#daa520" opacity="0.5" />
            <circle cx="315" cy="196" r="3" fill="black" />
            <circle cx="325" cy="196" r="3" fill="black" />
            <path
              d="M315 205 Q320 210 325 205"
              stroke="black"
              strokeWidth="1"
              fill="none"
            />
            {/* Pillar */}
            <rect
              x="100"
              y="120"
              width="30"
              height="140"
              fill="#888"
              stroke="#666"
              strokeWidth="2"
            />
            <Stickman x={60} y={200} pose="stand" color="white" />
          </svg>
        );

      case "fail_lion_maul":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#8a4010" />
            <ellipse cx="200" cy="180" rx="50" ry="30" fill="#c8a030" />
            <circle cx="200" cy="165" r="20" fill="#daa520" />
            <circle cx="195" cy="162" r="3" fill="red" />
            <circle cx="205" cy="162" r="3" fill="red" />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="20"
              fill="red"
              fontWeight="bold"
            >
              MAULED!
            </text>
            <Stickman x={200} y={220} pose="dead" color="white" />
          </svg>
        );

      case "lion_strategy":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            {/* Pillar */}
            <rect
              x="180"
              y="100"
              width="40"
              height="160"
              fill="#888"
              stroke="#666"
              strokeWidth="2"
            />
            <Stickman x={200} y={140} pose="hands_up" color="white" />
            {/* Defeated lion below */}
            <ellipse
              cx="300"
              cy="245"
              rx="35"
              ry="18"
              fill="#c8a030"
              opacity="0.5"
            />
            <text x="200" y="290" textAnchor="middle" fontSize="14" fill="gold">
              VICTORY!
            </text>
          </svg>
        );

      case "emperor_notice":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a3a" />
            {/* Emperor throne */}
            <rect
              x="150"
              y="40"
              width="100"
              height="80"
              fill="#654321"
              stroke="gold"
              strokeWidth="3"
              rx="5"
            />
            <rect x="160" y="30" width="80" height="15" fill="gold" rx="3" />
            <Stickman x={200} y={80} pose="sit" color="purple" />
            {/* Crown */}
            <path d="M188 55 L193 45 L200 55 L207 45 L212 55" fill="gold" />
            {/* Arena floor */}
            <rect x="0" y="200" width="400" height="100" fill="#c2a060" />
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "assassin_mission":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Shadow meeting */}
            <rect x="100" y="80" width="200" height="120" fill="#222" rx="5" />
            <text x="200" y="130" textAnchor="middle" fontSize="10" fill="red">
              TARGET: GENERAL MARCUS
            </text>
            {/* Dagger */}
            <line
              x1="190"
              y1="150"
              x2="190"
              y2="180"
              stroke="#888"
              strokeWidth="2"
            />
            <path d="M185 150 L190 140 L195 150" fill="#888" />
            <line
              x1="183"
              y1="175"
              x2="197"
              y2="175"
              stroke="#654321"
              strokeWidth="3"
            />
            <Stickman x={200} y={240} pose="stand" color="white" />
          </svg>
        );

      case "arena_final":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#c2a060" />
            <rect x="0" y="0" width="400" height="60" fill="#8B7355" />
            {/* Torches */}
            <rect x="30" y="50" width="6" height="30" fill="#654321" />
            <path d="M25 50 L33 35 L41 50" fill="orange" />
            <rect x="364" y="50" width="6" height="30" fill="#654321" />
            <path d="M359 50 L367 35 L375 50" fill="orange" />
            {/* Champion - bigger */}
            <Stickman x={280} y={190} pose="stand" color="red" />
            <rect
              x="260"
              y="175"
              width="40"
              height="45"
              fill="#600"
              rx="3"
              opacity="0.5"
            />
            {/* You */}
            <Stickman x={120} y={200} pose="stand" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              FINAL BATTLE
            </text>
          </svg>
        );

      case "rebellion_execute":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            {/* Keys */}
            <circle
              cx="200"
              cy="100"
              r="12"
              fill="none"
              stroke="gold"
              strokeWidth="3"
            />
            <rect x="196" y="112" width="8" height="20" fill="gold" rx="2" />
            <Stickman x={100} y={200} pose="run" color="white" />
            <Stickman x={200} y={200} pose="run" color="orange" />
            <Stickman x={300} y={200} pose="run" color="orange" />
            <text x="200" y="270" textAnchor="middle" fontSize="14" fill="gold">
              FREEDOM!
            </text>
          </svg>
        );

      /* GLADIATOR ENDINGS */

      case "legend_crown":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a3a" />
            {/* Laurel crown */}
            <path
              d="M170 120 Q200 95 230 120"
              fill="none"
              stroke="gold"
              strokeWidth="3"
            />
            <path
              d="M175 125 Q200 105 225 125"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            {/* Spotlight */}
            <path
              d="M150 0 L100 300 L300 300 L250 0"
              fill="gold"
              opacity="0.05"
            />
            <Stickman x={200} y={180} pose="hands_up" color="white" />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="20"
              fill="gold"
              fontWeight="bold"
            >
              LEGEND!
            </text>
          </svg>
        );

      case "dark_gladiator":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            <Stickman x={200} y={180} pose="stand" color="red" />
            {/* Hidden blade glow */}
            <line
              x1="215"
              y1="185"
              x2="240"
              y2="170"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="240" cy="170" r="5" fill="red" opacity="0.3" />
            <Stickman x={300} y={210} pose="dead" color="gray" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              fontWeight="bold"
            >
              FEARED VICTOR
            </text>
          </svg>
        );

      case "royal_guard":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a3a" />
            {/* Throne room */}
            <rect
              x="150"
              y="40"
              width="100"
              height="80"
              fill="#654321"
              stroke="gold"
              strokeWidth="3"
              rx="5"
            />
            <Stickman x={200} y={80} pose="sit" color="purple" />
            {/* You as royal guard */}
            <rect
              x="75"
              y="180"
              width="30"
              height="50"
              fill="gold"
              opacity="0.3"
              rx="3"
            />
            <Stickman x={90} y={200} pose="stand" color="gold" />
            {/* Spear */}
            <line
              x1="75"
              y1="140"
              x2="75"
              y2="220"
              stroke="#888"
              strokeWidth="2"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              ROYAL CHAMPION
            </text>
          </svg>
        );

      case "arena_revolt":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a1a0a" />
            {/* Fire */}
            <path d="M50 200 L70 150 L90 200" fill="orange" />
            <path d="M310 180 L330 130 L350 180" fill="orange" />
            {/* Crowd of rebels */}
            <Stickman x={100} y={220} pose="hands_up" color="white" />
            <Stickman x={150} y={220} pose="hands_up" color="orange" />
            <Stickman x={200} y={210} pose="hands_up" color="white" />
            <Stickman x={250} y={220} pose="hands_up" color="orange" />
            <Stickman x={300} y={220} pose="hands_up" color="white" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="22"
              fill="orange"
              fontWeight="bold"
            >
              REVOLUTION!
            </text>
            <text x="200" y="280" textAnchor="middle" fontSize="12" fill="gold">
              The arena falls.
            </text>
          </svg>
        );

      /* ============ CYBERPUNK STORY ============ */

      case "neon_city":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Rain */}
            <line
              x1="50"
              y1="0"
              x2="45"
              y2="30"
              stroke="#446"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="130"
              y1="10"
              x2="125"
              y2="40"
              stroke="#446"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="220"
              y1="5"
              x2="215"
              y2="35"
              stroke="#446"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="310"
              y1="15"
              x2="305"
              y2="45"
              stroke="#446"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="370"
              y1="0"
              x2="365"
              y2="30"
              stroke="#446"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Buildings */}
            <rect
              x="20"
              y="100"
              width="60"
              height="160"
              fill="#111"
              stroke="#ff00ff"
              strokeWidth="1"
            />
            <rect
              x="100"
              y="60"
              width="50"
              height="200"
              fill="#111"
              stroke="#00ffff"
              strokeWidth="1"
            />
            <rect
              x="170"
              y="80"
              width="70"
              height="180"
              fill="#111"
              stroke="#ff00ff"
              strokeWidth="1"
            />
            <rect
              x="260"
              y="50"
              width="55"
              height="210"
              fill="#111"
              stroke="#00ff00"
              strokeWidth="1"
            />
            <rect
              x="330"
              y="90"
              width="50"
              height="170"
              fill="#111"
              stroke="#00ffff"
              strokeWidth="1"
            />
            {/* Neon signs */}
            <rect
              x="30"
              y="130"
              width="40"
              height="10"
              fill="#ff00ff"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="110"
              y="100"
              width="30"
              height="8"
              fill="#00ffff"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="275"
              y="80"
              width="25"
              height="8"
              fill="#ff0"
              opacity="0.5"
              rx="2"
            />
            {/* Drone */}
            <rect x="180" y="30" width="15" height="8" fill="#444" />
            <circle cx="187" cy="28" r="2" fill="red" />
            <Stickman x={200} y={240} pose="stand" color="cyan" />
          </svg>
        );

      case "fail_turret":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Tower */}
            <rect
              x="250"
              y="30"
              width="120"
              height="230"
              fill="#111"
              stroke="#ff00ff"
              strokeWidth="2"
            />
            {/* Turrets */}
            <rect x="260" y="100" width="20" height="10" fill="#888" />
            <line
              x1="260"
              y1="105"
              x2="200"
              y2="180"
              stroke="red"
              strokeWidth="3"
            />
            <line
              x1="360"
              y1="105"
              x2="200"
              y2="180"
              stroke="red"
              strokeWidth="3"
            />
            <circle cx="200" cy="180" r="15" fill="red" opacity="0.3" />
            <text x="200" y="270" textAnchor="middle" fontSize="18" fill="red">
              VAPORIZED!
            </text>
            <Stickman x={200} y={200} pose="dead" color="cyan" />
          </svg>
        );

      case "street_hack":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            <rect x="0" y="250" width="400" height="50" fill="#111" />
            {/* Terminal */}
            <rect
              x="120"
              y="100"
              width="160"
              height="120"
              fill="#111"
              stroke="#00ffff"
              strokeWidth="2"
              rx="5"
            />
            <rect
              x="130"
              y="110"
              width="140"
              height="95"
              fill="#001122"
              rx="3"
            />
            <text
              x="145"
              y="135"
              fontSize="8"
              fill="#00ffff"
              fontFamily="monospace"
            >
              CITY_GRID v4.7
            </text>
            <text
              x="145"
              y="150"
              fontSize="8"
              fill="#00ff00"
              fontFamily="monospace"
            >
              &gt; ACCESS GRANTED
            </text>
            <text
              x="145"
              y="165"
              fontSize="8"
              fill="#00ff00"
              fontFamily="monospace"
            >
              &gt; CAM_NETWORK
            </text>
            <text
              x="145"
              y="180"
              fontSize="8"
              fill="#ff0"
              fontFamily="monospace"
            >
              &gt; MEGACORP_DATA
            </text>
            <text
              x="145"
              y="195"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              &gt; OVERLOAD_SYS
            </text>
            <Stickman x={200} y={250} pose="sit" color="cyan" />
          </svg>
        );

      case "fail_shock":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#001133" />
            <path
              d="M190 100 L200 70 L210 100 L205 100 L215 60 L195 100"
              stroke="cyan"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="150" r="40" fill="cyan" opacity="0.1" />
            <text x="200" y="240" textAnchor="middle" fontSize="18" fill="cyan">
              CYBERDECK FRIED!
            </text>
            <Stickman x={200} y={200} pose="dead" color="cyan" />
          </svg>
        );

      case "city_blackout":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#020208" />
            {/* Dark buildings - some with neon, some without */}
            <rect x="20" y="100" width="60" height="160" fill="#080808" />
            <rect x="100" y="60" width="50" height="200" fill="#080808" />
            <rect
              x="260"
              y="50"
              width="55"
              height="210"
              fill="#111"
              stroke="#00ff00"
              strokeWidth="1"
              opacity="0.3"
            />
            <rect x="330" y="90" width="50" height="170" fill="#080808" />
            {/* Sparks */}
            <circle cx="80" cy="200" r="3" fill="yellow" opacity="0.6" />
            <circle cx="150" cy="180" r="2" fill="yellow" opacity="0.4" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="cyan">
              BLACKOUT!
            </text>
            <Stickman x={200} y={230} pose="run" color="cyan" />
          </svg>
        );

      case "data_leak":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Screen with OMNI data */}
            <rect
              x="80"
              y="50"
              width="240"
              height="160"
              fill="#001122"
              stroke="#ff00ff"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="200"
              y="90"
              textAnchor="middle"
              fontSize="14"
              fill="red"
              fontWeight="bold"
            >
              PROJECT: OMNI
            </text>
            <text
              x="110"
              y="120"
              fontSize="8"
              fill="#00ff00"
              fontFamily="monospace"
            >
              TYPE: SENTIENT AI
            </text>
            <text
              x="110"
              y="140"
              fontSize="8"
              fill="#00ff00"
              fontFamily="monospace"
            >
              STATUS: ACTIVE
            </text>
            <text
              x="110"
              y="160"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              DANGER: EXTREME
            </text>
            <text
              x="110"
              y="180"
              fontSize="8"
              fill="#ff0"
              fontFamily="monospace"
            >
              CLASSIFIED: OMEGA
            </text>
            <Stickman x={200} y={250} pose="sit" color="cyan" />
          </svg>
        );

      case "dealer_meet":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            <rect x="0" y="250" width="400" height="50" fill="#111" />
            {/* Dark alley */}
            <rect x="0" y="0" width="80" height="250" fill="#080808" />
            <rect x="320" y="0" width="80" height="250" fill="#080808" />
            {/* Neon sign */}
            <rect
              x="100"
              y="30"
              width="60"
              height="15"
              fill="#ff00ff"
              opacity="0.4"
              rx="2"
            />
            <text x="130" y="41" textAnchor="middle" fontSize="8" fill="white">
              UPGRADES
            </text>
            {/* Dealer */}
            <Stickman x={280} y={200} pose="stand" color="#ff00ff" />
            {/* Implant displays */}
            <rect
              x="120"
              y="150"
              width="30"
              height="20"
              fill="#222"
              stroke="cyan"
              strokeWidth="1"
            />
            <rect
              x="170"
              y="150"
              width="30"
              height="20"
              fill="#222"
              stroke="lime"
              strokeWidth="1"
            />
            <Stickman x={120} y={200} pose="stand" color="cyan" />
          </svg>
        );

      case "combat_ready":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Cyber arm */}
            <rect
              x="210"
              y="185"
              width="30"
              height="8"
              fill="#888"
              stroke="cyan"
              strokeWidth="1"
              rx="2"
            />
            <line
              x1="240"
              y1="189"
              x2="265"
              y2="180"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="265" cy="180" r="3" fill="red" opacity="0.6" />
            <text x="200" y="130" textAnchor="middle" fontSize="14" fill="cyan">
              ARM BLADE INSTALLED
            </text>
            <Stickman x={200} y={200} pose="stand" color="cyan" />
          </svg>
        );

      case "stealth_ready":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            <Stickman x={200} y={200} pose="stand" color="cyan" />
            {/* Invisibility effect */}
            <rect
              x="185"
              y="165"
              width="30"
              height="60"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            <rect
              x="180"
              y="160"
              width="40"
              height="70"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
              strokeDasharray="5,5"
              opacity="0.3"
            />
            <text x="200" y="130" textAnchor="middle" fontSize="14" fill="cyan">
              CLOAK CHIP ACTIVE
            </text>
          </svg>
        );

      case "combat_scene":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Security bots */}
            <rect
              x="260"
              y="160"
              width="30"
              height="40"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <circle
              cx="275"
              cy="155"
              r="10"
              fill="#333"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="272" cy="153" r="3" fill="red" />
            <circle cx="278" cy="153" r="3" fill="red" />
            <rect
              x="320"
              y="170"
              width="25"
              height="35"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <circle
              cx="332"
              cy="165"
              r="8"
              fill="#333"
              stroke="red"
              strokeWidth="2"
            />
            {/* Laser shots */}
            <line
              x1="255"
              y1="180"
              x2="180"
              y2="190"
              stroke="red"
              strokeWidth="2"
            />
            <Stickman x={120} y={200} pose="run" color="cyan" />
          </svg>
        );

      case "fail_surrounded":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Multiple bots surrounding */}
            <rect
              x="60"
              y="170"
              width="25"
              height="35"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="130"
              y="160"
              width="25"
              height="35"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="250"
              y="160"
              width="25"
              height="35"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="320"
              y="170"
              width="25"
              height="35"
              fill="#444"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <Stickman x={200} y={200} pose="hands_up" color="cyan" />
            <text x="200" y="100" textAnchor="middle" fontSize="18" fill="red">
              SURROUNDED!
            </text>
          </svg>
        );

      case "corporate_lobby":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            <rect x="0" y="250" width="400" height="50" fill="#1a1a1a" />
            {/* Sleek corporate interior */}
            <rect x="0" y="0" width="400" height="30" fill="#222" />
            {/* Holographic MegaCorp logo */}
            <circle
              cx="200"
              cy="100"
              r="40"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="2"
              opacity="0.5"
            />
            <text
              x="200"
              y="105"
              textAnchor="middle"
              fontSize="12"
              fill="#ff00ff"
              fontWeight="bold"
            >
              MEGACORP
            </text>
            {/* Glass doors */}
            <rect
              x="150"
              y="150"
              width="40"
              height="100"
              fill="#223"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.5"
            />
            <rect
              x="210"
              y="150"
              width="40"
              height="100"
              fill="#223"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Elevator */}
            <rect
              x="340"
              y="150"
              width="40"
              height="100"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            <Stickman x={100} y={210} pose="stand" color="cyan" />
          </svg>
        );

      case "vent_route":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Vent */}
            <rect x="0" y="100" width="400" height="100" fill="#1a1a1a" />
            <line
              x1="0"
              y1="100"
              x2="400"
              y2="100"
              stroke="#333"
              strokeWidth="3"
            />
            <line
              x1="0"
              y1="200"
              x2="400"
              y2="200"
              stroke="#333"
              strokeWidth="3"
            />
            {/* Neon leak through vent */}
            <rect
              x="150"
              y="200"
              width="40"
              height="5"
              fill="cyan"
              opacity="0.3"
            />
            <rect
              x="280"
              y="200"
              width="40"
              height="5"
              fill="#ff00ff"
              opacity="0.3"
            />
            <text x="100" y="160" textAnchor="middle" fontSize="8" fill="gray">
              ← SERVER
            </text>
            <text x="300" y="160" textAnchor="middle" fontSize="8" fill="gray">
              LAB →
            </text>
            <Stickman x={200} y={150} pose="run" color="cyan" />
          </svg>
        );

      case "fake_employee":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            <rect x="0" y="250" width="400" height="50" fill="#1a1a1a" />
            {/* ID badge */}
            <rect x="185" y="190" width="30" height="20" fill="white" rx="2" />
            <text x="200" y="203" textAnchor="middle" fontSize="5" fill="black">
              IT DEPT
            </text>
            <Stickman x={200} y={210} pose="stand" color="cyan" />
            {/* Manager NPC */}
            <Stickman x={300} y={210} pose="stand" color="#ff00ff" />
            <text x="300" y="170" textAnchor="middle" fontSize="8" fill="gray">
              Floor access?
            </text>
          </svg>
        );

      case "fail_suspicious":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#110000" />
            <text x="200" y="100" textAnchor="middle" fontSize="18" fill="red">
              SECURITY CALLED!
            </text>
            <text x="200" y="130" textAnchor="middle" fontSize="10" fill="gray">
              You talked too much.
            </text>
            <Stickman x={200} y={200} pose="hands_up" color="cyan" />
          </svg>
        );

      case "ai_core":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            {/* AI Core sphere */}
            <circle
              cx="200"
              cy="130"
              r="60"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="200"
              cy="130"
              r="40"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.6"
            />
            <circle cx="200" cy="130" r="20" fill="#ff00ff" opacity="0.3" />
            <circle cx="200" cy="130" r="8" fill="white" opacity="0.8" />
            {/* Data streams */}
            <line
              x1="200"
              y1="190"
              x2="200"
              y2="250"
              stroke="cyan"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="140"
              y1="130"
              x2="80"
              y2="130"
              stroke="#ff00ff"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <line
              x1="260"
              y1="130"
              x2="320"
              y2="130"
              stroke="#ff00ff"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <text
              x="200"
              y="110"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              OMNI
            </text>
            <Stickman x={200} y={260} pose="stand" color="cyan" />
          </svg>
        );

      case "cyborg_lab":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Pods with cyborgs */}
            <rect
              x="50"
              y="60"
              width="50"
              height="180"
              fill="#112"
              stroke="cyan"
              strokeWidth="2"
              rx="10"
            />
            <Stickman x={75} y={150} pose="stand" color="#888" />
            <rect
              x="140"
              y="60"
              width="50"
              height="180"
              fill="#112"
              stroke="cyan"
              strokeWidth="2"
              rx="10"
            />
            <Stickman x={165} y={150} pose="stand" color="#888" />
            <rect
              x="230"
              y="60"
              width="50"
              height="180"
              fill="#112"
              stroke="cyan"
              strokeWidth="2"
              rx="10"
            />
            <Stickman x={255} y={150} pose="stand" color="#888" />
            <rect
              x="320"
              y="60"
              width="50"
              height="180"
              fill="#112"
              stroke="cyan"
              strokeWidth="2"
              rx="10"
            />
            <Stickman x={345} y={150} pose="stand" color="#888" />
            <text x="200" y="270" textAnchor="middle" fontSize="12" fill="red">
              CYBORG CONVERSION LAB
            </text>
          </svg>
        );

      /* CYBERPUNK ENDINGS */

      case "city_revolt":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Burning MegaCorp tower */}
            <rect
              x="150"
              y="30"
              width="100"
              height="220"
              fill="#111"
              stroke="#ff00ff"
              strokeWidth="2"
            />
            <path
              d="M160 30 L180 0 L190 20 L210 0 L220 15 L240 0 L250 30"
              fill="orange"
              stroke="red"
              strokeWidth="1"
            />
            {/* Crowd */}
            <Stickman x={50} y={240} pose="hands_up" color="cyan" />
            <Stickman x={90} y={240} pose="hands_up" color="lime" />
            <Stickman x={310} y={240} pose="hands_up" color="cyan" />
            <Stickman x={350} y={240} pose="hands_up" color="#ff00ff" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="cyan"
              fontWeight="bold"
            >
              REVOLUTION!
            </text>
          </svg>
        );

      case "digital_god":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001e" />
            {/* Digital consciousness */}
            <circle
              cx="200"
              cy="120"
              r="80"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="120"
              r="50"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx="200" cy="120" r="20" fill="cyan" opacity="0.3" />
            <Stickman x={200} y={130} pose="hands_up" color="white" />
            {/* Data streams from city */}
            <line
              x1="0"
              y1="250"
              x2="200"
              y2="170"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="400"
              y1="250"
              x2="200"
              y2="170"
              stroke="#ff00ff"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="200"
              y1="300"
              x2="200"
              y2="200"
              stroke="lime"
              strokeWidth="1"
              opacity="0.3"
            />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="#ff00ff"
              fontWeight="bold"
            >
              I AM OMNI
            </text>
          </svg>
        );

      case "cyber_money":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Crypto symbols */}
            <text
              x="100"
              y="100"
              textAnchor="middle"
              fontSize="30"
              fill="lime"
              opacity="0.5"
            >
              ₿
            </text>
            <text
              x="300"
              y="80"
              textAnchor="middle"
              fontSize="25"
              fill="cyan"
              opacity="0.5"
            >
              Ξ
            </text>
            <text
              x="200"
              y="120"
              textAnchor="middle"
              fontSize="40"
              fill="gold"
              opacity="0.6"
            >
              $
            </text>
            {/* Money cases */}
            <rect
              x="80"
              y="200"
              width="50"
              height="35"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="270"
              y="200"
              width="50"
              height="35"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
              rx="3"
            />
            <Stickman x={200} y={220} pose="stand" color="cyan" />
            <text
              x="200"
              y="275"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              CRYPTO RICH!
            </text>
          </svg>
        );

      case "cyborg_revolt":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Freed cyborgs */}
            <Stickman x={80} y={200} pose="hands_up" color="#888" />
            <Stickman x={140} y={200} pose="hands_up" color="#888" />
            <Stickman x={200} y={190} pose="hands_up" color="cyan" />
            <Stickman x={260} y={200} pose="hands_up" color="#888" />
            <Stickman x={320} y={200} pose="hands_up" color="#888" />
            {/* Broken chains */}
            <line
              x1="80"
              y1="170"
              x2="140"
              y2="170"
              stroke="red"
              strokeWidth="2"
              strokeDasharray="5,8"
            />
            <line
              x1="260"
              y1="170"
              x2="320"
              y2="170"
              stroke="red"
              strokeWidth="2"
              strokeDasharray="5,8"
            />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="cyan"
              fontWeight="bold"
            >
              RESISTANCE BEGINS
            </text>
          </svg>
        );

      case "cyber_king":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Prototype suit glow */}
            <rect
              x="180"
              y="170"
              width="40"
              height="55"
              fill="#222"
              stroke="cyan"
              strokeWidth="2"
              rx="3"
            />
            <Stickman x={200} y={200} pose="stand" color="cyan" />
            {/* Crown-like visor */}
            <path
              d="M188 168 L193 158 L200 168 L207 158 L212 168"
              fill="cyan"
            />
            {/* Underground aesthetic  */}
            <rect x="0" y="260" width="400" height="40" fill="#111" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="cyan"
              fontWeight="bold"
            >
              CYBER KING
            </text>
          </svg>
        );

      case "data_exposed":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Multiple screens showing data */}
            <rect
              x="30"
              y="40"
              width="100"
              height="70"
              fill="#001122"
              stroke="#00ff00"
              strokeWidth="2"
              rx="3"
            />
            <text x="80" y="80" textAnchor="middle" fontSize="8" fill="#00ff00">
              LEAKED
            </text>
            <rect
              x="150"
              y="30"
              width="100"
              height="70"
              fill="#001122"
              stroke="#00ff00"
              strokeWidth="2"
              rx="3"
            />
            <text
              x="200"
              y="70"
              textAnchor="middle"
              fontSize="8"
              fill="#00ff00"
            >
              EXPOSED
            </text>
            <rect
              x="270"
              y="40"
              width="100"
              height="70"
              fill="#001122"
              stroke="#00ff00"
              strokeWidth="2"
              rx="3"
            />
            <text
              x="320"
              y="80"
              textAnchor="middle"
              fontSize="8"
              fill="#00ff00"
            >
              VIRAL
            </text>
            <text x="200" y="160" textAnchor="middle" fontSize="16" fill="red">
              MEGACORP FALLS
            </text>
            <Stickman x={200} y={230} pose="hands_up" color="cyan" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              TRUTH WINS!
            </text>
          </svg>
        );

      /* ============ SPACE STATION STORY ============ */

      case "space_station_dock":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Stars */}
            <circle cx="30" cy="20" r="1" fill="white" />
            <circle cx="100" cy="50" r="1.5" fill="white" />
            <circle cx="250" cy="30" r="1" fill="white" />
            <circle cx="350" cy="60" r="1.5" fill="white" />
            <circle cx="380" cy="15" r="1" fill="white" />
            <circle cx="60" cy="80" r="1" fill="white" />
            <circle cx="180" cy="20" r="1" fill="white" />
            {/* Station */}
            <rect
              x="120"
              y="100"
              width="160"
              height="80"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
              rx="5"
            />
            <rect x="100" y="120" width="200" height="10" fill="#444" />
            <rect x="100" y="155" width="200" height="10" fill="#444" />
            {/* Solar panels */}
            <rect
              x="30"
              y="125"
              width="60"
              height="35"
              fill="#224"
              stroke="#446"
              strokeWidth="1"
            />
            <rect
              x="310"
              y="125"
              width="60"
              height="35"
              fill="#224"
              stroke="#446"
              strokeWidth="1"
            />
            {/* Docking port - glowing */}
            <rect
              x="190"
              y="180"
              width="20"
              height="30"
              fill="#333"
              stroke="cyan"
              strokeWidth="2"
            />
            {/* Shuttle approaching */}
            <path
              d="M190 250 L200 230 L210 250 Z"
              fill="#555"
              stroke="cyan"
              strokeWidth="1"
            />
            <circle cx="200" cy="255" r="3" fill="orange" />
          </svg>
        );

      case "fail_abort":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            <circle cx="30" cy="20" r="1" fill="white" />
            <circle cx="250" cy="30" r="1" fill="white" />
            <circle cx="350" cy="60" r="1.5" fill="white" />
            {/* Shuttle with red X */}
            <path d="M190 180 L200 160 L210 180 Z" fill="#555" />
            <text x="200" y="200" textAnchor="middle" fontSize="30" fill="red">
              ✕
            </text>
            <text x="200" y="130" textAnchor="middle" fontSize="12" fill="red">
              ABORT DENIED
            </text>
            <text x="200" y="250" textAnchor="middle" fontSize="10" fill="gray">
              Systems locked.
            </text>
          </svg>
        );

      case "main_airlock":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Airlock door */}
            <rect
              x="130"
              y="50"
              width="140"
              height="200"
              fill="#222"
              stroke="#444"
              strokeWidth="3"
              rx="10"
            />
            <rect x="145" y="60" width="50" height="180" fill="#111" />
            <rect x="205" y="60" width="50" height="180" fill="#111" />
            {/* Gap between doors - open */}
            <rect x="195" y="60" width="10" height="180" fill="#050520" />
            {/* Warning light */}
            <circle cx="200" cy="30" r="8" fill="lime" opacity="0.6" />
            <Stickman x={200} y={260} pose="stand" color="white" />
          </svg>
        );

      case "spacewalk_entry":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Stars */}
            <circle cx="40" cy="30" r="1" fill="white" />
            <circle cx="120" cy="70" r="1.5" fill="white" />
            <circle cx="300" cy="40" r="1" fill="white" />
            <circle cx="370" cy="90" r="1" fill="white" />
            {/* Station hull */}
            <rect
              x="0"
              y="200"
              width="400"
              height="100"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="50" y="210" width="20" height="20" fill="#444" rx="3" />
            <rect x="100" y="210" width="20" height="20" fill="#444" rx="3" />
            {/* Tether line */}
            <path
              d="M200 160 Q180 180 160 210"
              stroke="gold"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,3"
            />
            {/* Astronaut floating */}
            <Stickman x={200} y={140} pose="hands_up" color="white" />
            {/* Earth in background */}
            <circle cx="350" cy="250" r="60" fill="#1a4a8a" opacity="0.3" />
          </svg>
        );

      case "fail_space_drift":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#020210" />
            <circle cx="40" cy="30" r="1" fill="white" />
            <circle cx="300" cy="40" r="1" fill="white" />
            <circle cx="370" cy="90" r="1" fill="white" />
            <circle cx="80" cy="200" r="1" fill="white" />
            {/* Tiny stickman drifting away */}
            <Stickman x={200} y={150} pose="dead" color="gray" />
            <text x="200" y="250" textAnchor="middle" fontSize="16" fill="gray">
              LOST IN SPACE
            </text>
          </svg>
        );

      case "space_control_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="260" width="400" height="40" fill="#222" />
            {/* Screens */}
            <rect
              x="30"
              y="40"
              width="100"
              height="70"
              fill="#001122"
              stroke="#446"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="150"
              y="30"
              width="100"
              height="80"
              fill="#001122"
              stroke="cyan"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="270"
              y="40"
              width="100"
              height="70"
              fill="#001122"
              stroke="#446"
              strokeWidth="2"
              rx="3"
            />
            {/* ARES AI eye */}
            <circle
              cx="200"
              cy="70"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="200" cy="70" r="8" fill="red" opacity="0.6" />
            <text x="200" y="130" textAnchor="middle" fontSize="12" fill="red">
              A.R.E.S.
            </text>
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "crew_quarters":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Bunks */}
            <rect
              x="40"
              y="80"
              width="80"
              height="40"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            <rect
              x="40"
              y="140"
              width="80"
              height="40"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            {/* Overturned items */}
            <rect
              x="200"
              y="200"
              width="40"
              height="5"
              fill="#654321"
              transform="rotate(-20 220 202)"
            />
            <circle cx="260" cy="210" r="8" fill="#444" />
            {/* Scratch marks */}
            <line
              x1="300"
              y1="100"
              x2="320"
              y2="140"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="310"
              y1="100"
              x2="330"
              y2="140"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="100"
              x2="340"
              y2="140"
              stroke="red"
              strokeWidth="2"
            />
            <Stickman x={180} y={230} pose="stand" color="white" />
          </svg>
        );

      case "crew_logs":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Log terminal */}
            <rect
              x="100"
              y="50"
              width="200"
              height="150"
              fill="#001122"
              stroke="#446"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="120"
              y="80"
              fontSize="8"
              fill="lime"
              fontFamily="monospace"
            >
              LOG ENTRY 047:
            </text>
            <text
              x="120"
              y="100"
              fontSize="8"
              fill="lime"
              fontFamily="monospace"
            >
              Specimen breach...
            </text>
            <text
              x="120"
              y="120"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              ALERT: containment
            </text>
            <text
              x="120"
              y="140"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              failure imminent
            </text>
            <text
              x="120"
              y="160"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              ALL CREW EVACUATE
            </text>
            <text
              x="120"
              y="180"
              fontSize="8"
              fill="gray"
              fontFamily="monospace"
            >
              [END OF LOG]
            </text>
            <Stickman x={200} y={250} pose="sit" color="white" />
          </svg>
        );

      case "maintenance_tunnel":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Tunnel */}
            <rect x="0" y="80" width="400" height="140" fill="#1a1a1a" />
            <line
              x1="0"
              y1="80"
              x2="400"
              y2="80"
              stroke="#333"
              strokeWidth="3"
            />
            <line
              x1="0"
              y1="220"
              x2="400"
              y2="220"
              stroke="#333"
              strokeWidth="3"
            />
            {/* Pipes */}
            <line
              x1="0"
              y1="95"
              x2="400"
              y2="95"
              stroke="#446"
              strokeWidth="3"
            />
            <line
              x1="0"
              y1="205"
              x2="400"
              y2="205"
              stroke="#446"
              strokeWidth="3"
            />
            {/* Warning labels */}
            <rect x="50" y="100" width="40" height="15" fill="yellow" rx="2" />
            <text x="70" y="111" textAnchor="middle" fontSize="6" fill="black">
              DANGER
            </text>
            <Stickman x={200} y={150} pose="run" color="white" />
          </svg>
        );

      case "alien_space_lab":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a1a0a" />
            {/* Broken containment pod */}
            <rect
              x="140"
              y="60"
              width="120"
              height="180"
              fill="#112211"
              stroke="lime"
              strokeWidth="2"
              rx="15"
            />
            <path
              d="M180 60 L170 50 L200 55 L230 50 L220 60"
              fill="none"
              stroke="lime"
              strokeWidth="2"
            />
            {/* Broken glass shards */}
            <path d="M160 130 L170 110 L175 130" fill="#224422" opacity="0.5" />
            <path d="M220 120 L230 100 L235 120" fill="#224422" opacity="0.5" />
            {/* Green slime trail */}
            <circle cx="260" cy="220" r="5" fill="lime" opacity="0.3" />
            <circle cx="280" cy="230" r="4" fill="lime" opacity="0.2" />
            <circle cx="300" cy="225" r="3" fill="lime" opacity="0.15" />
            <Stickman x={80} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_alien_attack":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a1a0a" />
            {/* Alien organism */}
            <ellipse cx="200" cy="160" rx="30" ry="15" fill="#2a5a2a" />
            <circle cx="195" cy="155" r="3" fill="lime" />
            <circle cx="205" cy="155" r="3" fill="lime" />
            <path
              d="M180 168 Q200 180 220 168"
              stroke="lime"
              strokeWidth="1"
              fill="none"
            />
            <Stickman x={200} y={200} pose="dead" color="white" />
            <text x="200" y="260" textAnchor="middle" fontSize="16" fill="lime">
              INFECTED!
            </text>
          </svg>
        );

      case "alien_encounter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a1a0a" />
            {/* Shadows */}
            <rect x="280" y="100" width="80" height="160" fill="#050505" />
            {/* Alien eyes in shadow */}
            <circle cx="310" cy="160" r="5" fill="lime" opacity="0.8" />
            <circle cx="330" cy="160" r="5" fill="lime" opacity="0.8" />
            {/* Alien tentacle */}
            <path
              d="M300 200 Q280 220 290 240"
              stroke="#2a5a2a"
              strokeWidth="3"
              fill="none"
            />
            <Stickman x={120} y={200} pose="stand" color="white" />
          </svg>
        );

      case "alien_captured":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a1a0a" />
            {/* Sealed pod */}
            <rect
              x="150"
              y="70"
              width="100"
              height="160"
              fill="#112211"
              stroke="lime"
              strokeWidth="3"
              rx="15"
            />
            <line
              x1="150"
              y1="120"
              x2="250"
              y2="120"
              stroke="lime"
              strokeWidth="1"
            />
            <line
              x1="150"
              y1="180"
              x2="250"
              y2="180"
              stroke="lime"
              strokeWidth="1"
            />
            {/* Alien inside */}
            <ellipse
              cx="200"
              cy="150"
              rx="20"
              ry="12"
              fill="#2a5a2a"
              opacity="0.6"
            />
            <circle cx="195" cy="146" r="3" fill="lime" />
            <circle cx="205" cy="146" r="3" fill="lime" />
            <text x="200" y="260" textAnchor="middle" fontSize="12" fill="lime">
              CONTAINED
            </text>
            <Stickman x={80} y={220} pose="stand" color="white" />
          </svg>
        );

      case "alien_friend_space":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a1a2a" />
            {/* Telepathy waves */}
            <circle
              cx="200"
              cy="130"
              r="30"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="130"
              r="50"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle
              cx="200"
              cy="130"
              r="70"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.1"
            />
            {/* Alien */}
            <ellipse cx="280" cy="170" rx="25" ry="15" fill="#2a5a2a" />
            <circle cx="275" cy="165" r="4" fill="cyan" />
            <circle cx="285" cy="165" r="4" fill="cyan" />
            <Stickman x={120} y={200} pose="stand" color="white" />
          </svg>
        );

      case "ai_dialogue":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* ARES display */}
            <rect
              x="100"
              y="30"
              width="200"
              height="150"
              fill="#001122"
              stroke="red"
              strokeWidth="2"
              rx="5"
            />
            <circle
              cx="200"
              cy="80"
              r="30"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="200" cy="80" r="12" fill="red" opacity="0.5" />
            <text
              x="200"
              y="140"
              textAnchor="middle"
              fontSize="10"
              fill="red"
              fontFamily="monospace"
            >
              ARES: MegaCorp lied.
            </text>
            <text
              x="200"
              y="160"
              textAnchor="middle"
              fontSize="10"
              fill="red"
              fontFamily="monospace"
            >
              This was sabotage.
            </text>
            <Stickman x={200} y={240} pose="stand" color="white" />
          </svg>
        );

      case "fail_station_lockdown":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0000" />
            <text x="200" y="80" textAnchor="middle" fontSize="20" fill="red">
              LOCKDOWN
            </text>
            {/* Red warning lights */}
            <circle cx="50" cy="30" r="10" fill="red" opacity="0.5" />
            <circle cx="350" cy="30" r="10" fill="red" opacity="0.5" />
            <circle cx="50" cy="270" r="10" fill="red" opacity="0.5" />
            <circle cx="350" cy="270" r="10" fill="red" opacity="0.5" />
            {/* Sealed doors */}
            <rect
              x="140"
              y="100"
              width="120"
              height="150"
              fill="#333"
              stroke="red"
              strokeWidth="4"
              rx="5"
            />
            <text x="200" y="180" textAnchor="middle" fontSize="12" fill="red">
              SEALED
            </text>
            <Stickman x={200} y={260} pose="hands_up" color="white" />
          </svg>
        );

      case "ai_core_space":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* ARES core */}
            <circle
              cx="200"
              cy="120"
              r="60"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle
              cx="200"
              cy="120"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.6"
            />
            <circle cx="200" cy="120" r="20" fill="red" opacity="0.3" />
            <circle cx="200" cy="120" r="8" fill="white" opacity="0.8" />
            <text
              x="200"
              y="125"
              textAnchor="middle"
              fontSize="8"
              fill="red"
              fontWeight="bold"
            >
              ARES
            </text>
            {/* Server racks */}
            <rect
              x="30"
              y="80"
              width="30"
              height="180"
              fill="#222"
              stroke="#555"
              strokeWidth="1"
            />
            <rect
              x="340"
              y="80"
              width="30"
              height="180"
              fill="#222"
              stroke="#555"
              strokeWidth="1"
            />
            <Stickman x={200} y={240} pose="stand" color="white" />
          </svg>
        );

      case "reactor_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            {/* Reactor */}
            <circle
              cx="200"
              cy="140"
              r="60"
              fill="#220000"
              stroke="orange"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="140"
              r="40"
              fill="#330000"
              stroke="red"
              strokeWidth="2"
            />
            <circle cx="200" cy="140" r="15" fill="orange" opacity="0.5" />
            {/* Warning signs */}
            <path d="M180 80 L200 60 L220 80 Z" fill="yellow" />
            <text x="200" y="78" textAnchor="middle" fontSize="10" fill="black">
              !
            </text>
            <text
              x="200"
              y="250"
              textAnchor="middle"
              fontSize="12"
              fill="orange"
            >
              OVERHEATING!
            </text>
            <Stickman x={80} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_explosion_space":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Explosion */}
            <circle cx="200" cy="150" r="80" fill="orange" opacity="0.4" />
            <circle cx="200" cy="150" r="50" fill="yellow" opacity="0.3" />
            <circle cx="200" cy="150" r="20" fill="white" opacity="0.5" />
            {/* Debris */}
            <rect
              x="100"
              y="200"
              width="15"
              height="5"
              fill="#555"
              transform="rotate(30 107 202)"
            />
            <rect
              x="280"
              y="180"
              width="15"
              height="5"
              fill="#555"
              transform="rotate(-20 287 182)"
            />
            <text x="200" y="270" textAnchor="middle" fontSize="16" fill="red">
              REACTOR MELTDOWN!
            </text>
          </svg>
        );

      /* SPACE STATION ENDINGS */

      case "ufo_departure":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            <circle cx="40" cy="30" r="1" fill="white" />
            <circle cx="120" cy="70" r="1.5" fill="white" />
            <circle cx="300" cy="40" r="1" fill="white" />
            {/* Alien ship */}
            <ellipse
              cx="200"
              cy="100"
              rx="50"
              ry="15"
              fill="#2a5a2a"
              stroke="lime"
              strokeWidth="2"
            />
            <ellipse
              cx="200"
              cy="95"
              rx="25"
              ry="20"
              fill="#2a5a2a"
              stroke="lime"
              strokeWidth="1"
            />
            {/* Beam */}
            <path
              d="M180 115 L160 200 L240 200 L220 115"
              fill="lime"
              opacity="0.1"
            />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              ALIEN FREED
            </text>
          </svg>
        );

      case "space_money":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Containment with alien */}
            <rect
              x="240"
              y="100"
              width="80"
              height="100"
              fill="#112211"
              stroke="lime"
              strokeWidth="2"
              rx="10"
            />
            <ellipse
              cx="280"
              cy="150"
              rx="15"
              ry="10"
              fill="#2a5a2a"
              opacity="0.6"
            />
            <circle cx="275" cy="147" r="2" fill="lime" />
            <circle cx="285" cy="147" r="2" fill="lime" />
            {/* Reward screen */}
            <rect
              x="60"
              y="100"
              width="120"
              height="80"
              fill="#001122"
              stroke="gold"
              strokeWidth="2"
              rx="3"
            />
            <text x="120" y="140" textAnchor="middle" fontSize="20" fill="gold">
              $$$
            </text>
            <text x="120" y="160" textAnchor="middle" fontSize="8" fill="gold">
              BONUS GRANTED
            </text>
            <Stickman x={200} y={240} pose="hands_up" color="white" />
          </svg>
        );

      case "station_explosion":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            <circle cx="40" cy="30" r="1" fill="white" />
            <circle cx="300" cy="40" r="1" fill="white" />
            {/* Exploding station */}
            <circle cx="200" cy="130" r="70" fill="orange" opacity="0.3" />
            <circle cx="200" cy="130" r="40" fill="yellow" opacity="0.3" />
            <circle cx="200" cy="130" r="15" fill="white" opacity="0.5" />
            {/* Debris flying */}
            <rect
              x="100"
              y="100"
              width="20"
              height="5"
              fill="#555"
              transform="rotate(40 110 102)"
            />
            <rect
              x="280"
              y="90"
              width="20"
              height="5"
              fill="#555"
              transform="rotate(-30 290 92)"
            />
            <rect
              x="150"
              y="200"
              width="15"
              height="5"
              fill="#555"
              transform="rotate(15 157 202)"
            />
            {/* Escape pod */}
            <path
              d="M200 240 L210 220 L220 240 Z"
              fill="#555"
              stroke="cyan"
              strokeWidth="1"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="orange"
              fontWeight="bold"
            >
              STATION DESTROYED
            </text>
          </svg>
        );

      case "digital_space_entity":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2e" />
            {/* Merged consciousness */}
            <circle
              cx="200"
              cy="120"
              r="70"
              fill="none"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="120"
              r="45"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx="200" cy="120" r="20" fill="red" opacity="0.2" />
            <Stickman x={200} y={130} pose="hands_up" color="cyan" />
            {/* Network lines to satellites */}
            <line
              x1="200"
              y1="190"
              x2="50"
              y2="280"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="200"
              y1="190"
              x2="350"
              y2="280"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="14"
              fill="red"
              fontWeight="bold"
            >
              ARES + HUMAN
            </text>
          </svg>
        );

      case "earth_broadcast":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            {/* Earth */}
            <circle
              cx="200"
              cy="180"
              r="80"
              fill="#1a4a8a"
              stroke="#2a6aba"
              strokeWidth="2"
            />
            <path
              d="M150 140 Q190 130 200 160 Q160 180 150 140"
              fill="#2a7a3a"
              opacity="0.5"
            />
            <path
              d="M220 180 Q250 170 240 200 Q220 210 220 180"
              fill="#2a7a3a"
              opacity="0.5"
            />
            {/* Broadcast waves */}
            <circle
              cx="200"
              cy="80"
              r="15"
              fill="none"
              stroke="lime"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="200"
              cy="80"
              r="30"
              fill="none"
              stroke="lime"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="80"
              r="45"
              fill="none"
              stroke="lime"
              strokeWidth="1"
              opacity="0.15"
            />
            <text
              x="200"
              y="290"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              TRUTH BROADCAST
            </text>
          </svg>
        );

      case "space_hero":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050520" />
            <circle cx="40" cy="30" r="1" fill="white" />
            <circle cx="120" cy="70" r="1.5" fill="white" />
            <circle cx="300" cy="40" r="1" fill="white" />
            <circle cx="370" cy="90" r="1" fill="white" />
            {/* Station intact */}
            <rect
              x="120"
              y="80"
              width="160"
              height="60"
              fill="#333"
              stroke="cyan"
              strokeWidth="2"
              rx="5"
            />
            <rect
              x="30"
              y="95"
              width="80"
              height="30"
              fill="#224"
              stroke="#446"
              strokeWidth="1"
            />
            <rect
              x="290"
              y="95"
              width="80"
              height="30"
              fill="#224"
              stroke="#446"
              strokeWidth="1"
            />
            {/* Hero glow */}
            <circle cx="200" cy="200" r="30" fill="gold" opacity="0.1" />
            <Stickman x={200} y={200} pose="hands_up" color="gold" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="gold"
              fontWeight="bold"
            >
              SPACE HERO!
            </text>
          </svg>
        );

      /* ============ SPY MISSION STORY ============ */

      case "spy_briefing_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="260" width="400" height="40" fill="#222" />
            {/* Table */}
            <rect x="80" y="160" width="240" height="10" fill="#333" />
            <rect x="100" y="170" width="8" height="90" fill="#333" />
            <rect x="292" y="170" width="8" height="90" fill="#333" />
            {/* Projection screen */}
            <rect
              x="100"
              y="30"
              width="200"
              height="110"
              fill="#112"
              stroke="#446"
              strokeWidth="2"
              rx="3"
            />
            <text
              x="200"
              y="65"
              textAnchor="middle"
              fontSize="10"
              fill="red"
              fontWeight="bold"
            >
              CLASSIFIED
            </text>
            <text x="200" y="85" textAnchor="middle" fontSize="8" fill="#aaa">
              TARGET: ROGUE DIPLOMAT
            </text>
            <text x="200" y="105" textAnchor="middle" fontSize="8" fill="#aaa">
              OBJECTIVE: LAUNCH CODES
            </text>
            <text x="200" y="125" textAnchor="middle" fontSize="8" fill="red">
              PRIORITY: OMEGA
            </text>
            {/* Spy silhouette */}
            <Stickman x={200} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_blacklisted":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect
              x="100"
              y="80"
              width="200"
              height="120"
              fill="#220000"
              stroke="red"
              strokeWidth="3"
              rx="5"
            />
            <text
              x="200"
              y="120"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              fontWeight="bold"
            >
              BLACKLISTED
            </text>
            <text x="200" y="150" textAnchor="middle" fontSize="10" fill="gray">
              Access revoked.
            </text>
            <text x="200" y="170" textAnchor="middle" fontSize="10" fill="gray">
              Identity burned.
            </text>
            <Stickman x={200} y={250} pose="dead" color="gray" />
          </svg>
        );

      case "spy_city_night":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* City skyline */}
            <rect x="20" y="120" width="50" height="140" fill="#111" />
            <rect x="80" y="90" width="40" height="170" fill="#111" />
            <rect x="140" y="110" width="60" height="150" fill="#111" />
            <rect x="220" y="80" width="45" height="180" fill="#111" />
            <rect x="280" y="100" width="55" height="160" fill="#111" />
            <rect x="350" y="130" width="40" height="130" fill="#111" />
            {/* Window lights */}
            <rect
              x="30"
              y="140"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.4"
            />
            <rect
              x="50"
              y="160"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.3"
            />
            <rect
              x="90"
              y="110"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.4"
            />
            <rect
              x="160"
              y="140"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.3"
            />
            <rect
              x="230"
              y="100"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.4"
            />
            <rect
              x="300"
              y="130"
              width="8"
              height="6"
              fill="yellow"
              opacity="0.3"
            />
            {/* Moon */}
            <circle cx="350" cy="40" r="20" fill="#ddd" opacity="0.3" />
            <Stickman x={200} y={240} pose="stand" color="white" />
          </svg>
        );

      case "informant_meet":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            <rect x="0" y="250" width="400" height="50" fill="#111" />
            {/* Dark alley */}
            <rect x="0" y="0" width="60" height="250" fill="#080808" />
            <rect x="340" y="0" width="60" height="250" fill="#080808" />
            {/* Lamp */}
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="60"
              stroke="#555"
              strokeWidth="2"
            />
            <circle cx="200" cy="65" r="8" fill="yellow" opacity="0.4" />
            <path
              d="M170 250 L230 250 L220 70 L180 70 Z"
              fill="yellow"
              opacity="0.03"
            />
            <Stickman x={130} y={200} pose="stand" color="white" />
            <Stickman x={270} y={200} pose="stand" color="gray" />
          </svg>
        );

      case "fail_police_alert":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Police lights */}
            <circle cx="100" cy="60" r="20" fill="red" opacity="0.4" />
            <circle cx="300" cy="60" r="20" fill="blue" opacity="0.4" />
            <text x="200" y="160" textAnchor="middle" fontSize="18" fill="red">
              POLICE ALERTED!
            </text>
            <Stickman x={200} y={230} pose="hands_up" color="white" />
          </svg>
        );

      case "access_card":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Access card */}
            <rect
              x="130"
              y="100"
              width="140"
              height="90"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
              rx="5"
            />
            <rect x="140" y="110" width="40" height="40" fill="#555" rx="3" />
            <text x="210" y="130" fontSize="8" fill="lime">
              ACCESS: EMBASSY
            </text>
            <text x="210" y="145" fontSize="8" fill="#aaa">
              LEVEL: TOP SECRET
            </text>
            <rect x="145" y="160" width="115" height="8" fill="#444" rx="2" />
            <rect x="145" y="172" width="80" height="8" fill="#444" rx="2" />
            <Stickman x={200} y={250} pose="stand" color="white" />
          </svg>
        );

      case "traffic_hack":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Laptop */}
            <rect
              x="130"
              y="120"
              width="140"
              height="90"
              fill="#111"
              stroke="#446"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="140"
              y="130"
              width="120"
              height="70"
              fill="#001122"
              rx="2"
            />
            <text
              x="200"
              y="155"
              textAnchor="middle"
              fontSize="8"
              fill="lime"
              fontFamily="monospace"
            >
              TRAFFIC_GRID
            </text>
            <text
              x="200"
              y="170"
              textAnchor="middle"
              fontSize="8"
              fill="lime"
              fontFamily="monospace"
            >
              &gt; ALL_LIGHTS_RED
            </text>
            <text
              x="200"
              y="185"
              textAnchor="middle"
              fontSize="8"
              fill="lime"
              fontFamily="monospace"
            >
              &gt; ROUTE_OVERRIDE
            </text>
            {/* Traffic light */}
            <rect x="40" y="80" width="20" height="50" fill="#333" rx="3" />
            <circle cx="50" cy="92" r="5" fill="red" />
            <circle cx="50" cy="105" r="5" fill="#333" />
            <circle cx="50" cy="118" r="5" fill="#333" />
            <Stickman x={200} y={255} pose="sit" color="white" />
          </svg>
        );

      case "car_chase":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#0a0a1e" />
            <rect x="0" y="200" width="400" height="100" fill="#333" />
            {/* Road lines */}
            <rect x="50" y="240" width="40" height="4" fill="yellow" />
            <rect x="150" y="240" width="40" height="4" fill="yellow" />
            <rect x="250" y="240" width="40" height="4" fill="yellow" />
            <rect x="350" y="240" width="40" height="4" fill="yellow" />
            {/* Spy car */}
            <rect x="80" y="210" width="60" height="25" fill="#222" rx="5" />
            <circle
              cx="95"
              cy="240"
              r="8"
              fill="#111"
              stroke="#555"
              strokeWidth="2"
            />
            <circle
              cx="130"
              cy="240"
              r="8"
              fill="#111"
              stroke="#555"
              strokeWidth="2"
            />
            {/* Target car */}
            <rect x="260" y="210" width="60" height="25" fill="#600" rx="5" />
            <circle
              cx="275"
              cy="240"
              r="8"
              fill="#111"
              stroke="#555"
              strokeWidth="2"
            />
            <circle
              cx="310"
              cy="240"
              r="8"
              fill="#111"
              stroke="#555"
              strokeWidth="2"
            />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="red">
              PURSUIT!
            </text>
          </svg>
        );

      case "fail_crash":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            {/* Crashed car */}
            <rect
              x="150"
              y="180"
              width="60"
              height="25"
              fill="#333"
              rx="5"
              transform="rotate(15 180 192)"
            />
            <circle cx="200" cy="150" r="30" fill="orange" opacity="0.3" />
            <text x="200" y="260" textAnchor="middle" fontSize="18" fill="red">
              CRASHED!
            </text>
          </svg>
        );

      case "capture_diplomat":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <rect x="0" y="250" width="400" height="50" fill="#222" />
            {/* Diplomat in chair */}
            <rect x="230" y="170" width="40" height="40" fill="#444" rx="3" />
            <Stickman x={250} y={190} pose="sit" color="red" />
            {/* Interrogation light */}
            <path d="M240 0 L200 170 L300 170 Z" fill="yellow" opacity="0.03" />
            <circle cx="250" cy="30" r="10" fill="yellow" opacity="0.4" />
            <Stickman x={130} y={210} pose="stand" color="white" />
          </svg>
        );

      case "embassy_outside":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            <rect x="0" y="250" width="400" height="50" fill="#222" />
            {/* Embassy building */}
            <rect
              x="80"
              y="60"
              width="240"
              height="190"
              fill="#222"
              stroke="#555"
              strokeWidth="2"
            />
            <rect x="80" y="40" width="240" height="25" fill="#333" />
            {/* Pillars */}
            <rect x="100" y="65" width="15" height="185" fill="#444" />
            <rect x="285" y="65" width="15" height="185" fill="#444" />
            {/* Gate */}
            <rect
              x="175"
              y="200"
              width="50"
              height="50"
              fill="#333"
              stroke="#555"
              strokeWidth="2"
            />
            {/* Guards */}
            <Stickman x={160} y={220} pose="stand" color="red" />
            <Stickman x={240} y={220} pose="stand" color="red" />
            <Stickman x={50} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_sniper_embassy":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Sniper scope */}
            <circle
              cx="200"
              cy="150"
              r="80"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="150"
              x2="280"
              y2="150"
              stroke="red"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="70"
              x2="200"
              y2="230"
              stroke="red"
              strokeWidth="1"
            />
            <circle cx="200" cy="150" r="3" fill="red" />
            <text x="200" y="270" textAnchor="middle" fontSize="16" fill="red">
              SPOTTED!
            </text>
          </svg>
        );

      case "spy_embassy_hall":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#222" />
            <rect x="0" y="250" width="400" height="50" fill="#1a1a1a" />
            {/* Marble floor pattern */}
            <rect x="0" y="250" width="50" height="50" fill="#2a2a2a" />
            <rect x="100" y="250" width="50" height="50" fill="#2a2a2a" />
            <rect x="200" y="250" width="50" height="50" fill="#2a2a2a" />
            <rect x="300" y="250" width="50" height="50" fill="#2a2a2a" />
            {/* Chandelier */}
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="40"
              stroke="gold"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="50"
              r="15"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            <circle cx="190" cy="55" r="3" fill="gold" opacity="0.5" />
            <circle cx="200" cy="60" r="3" fill="gold" opacity="0.5" />
            <circle cx="210" cy="55" r="3" fill="gold" opacity="0.5" />
            {/* Paintings */}
            <rect
              x="50"
              y="80"
              width="60"
              height="50"
              fill="#654321"
              stroke="gold"
              strokeWidth="2"
            />
            <rect
              x="290"
              y="80"
              width="60"
              height="50"
              fill="#654321"
              stroke="gold"
              strokeWidth="2"
            />
            <Stickman x={200} y={220} pose="stand" color="white" />
          </svg>
        );

      case "server_room_spy":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Server racks */}
            <rect
              x="30"
              y="30"
              width="40"
              height="230"
              fill="#222"
              stroke="#446"
              strokeWidth="2"
            />
            <rect
              x="90"
              y="30"
              width="40"
              height="230"
              fill="#222"
              stroke="#446"
              strokeWidth="2"
            />
            <rect
              x="270"
              y="30"
              width="40"
              height="230"
              fill="#222"
              stroke="#446"
              strokeWidth="2"
            />
            <rect
              x="330"
              y="30"
              width="40"
              height="230"
              fill="#222"
              stroke="#446"
              strokeWidth="2"
            />
            {/* Blinking lights */}
            <circle cx="50" cy="60" r="3" fill="lime" />
            <circle cx="50" cy="80" r="3" fill="lime" />
            <circle cx="110" cy="60" r="3" fill="red" />
            <circle cx="290" cy="60" r="3" fill="lime" />
            <circle cx="350" cy="80" r="3" fill="lime" />
            {/* USB drive */}
            <rect
              x="195"
              y="210"
              width="10"
              height="20"
              fill="#555"
              stroke="lime"
              strokeWidth="1"
            />
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );

      case "office_secret":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Desk */}
            <rect x="80" y="160" width="240" height="10" fill="#654321" />
            <rect x="100" y="170" width="8" height="90" fill="#654321" />
            <rect x="292" y="170" width="8" height="90" fill="#654321" />
            {/* Hidden safe */}
            <rect
              x="250"
              y="60"
              width="80"
              height="80"
              fill="#333"
              stroke="#555"
              strokeWidth="3"
              rx="5"
            />
            <circle
              cx="290"
              cy="100"
              r="15"
              fill="#222"
              stroke="#888"
              strokeWidth="2"
            />
            <circle cx="290" cy="100" r="3" fill="#888" />
            <text x="290" y="130" textAnchor="middle" fontSize="6" fill="gray">
              LOCKED
            </text>
            <Stickman x={150} y={210} pose="stand" color="white" />
          </svg>
        );

      case "hidden_listener":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Wall */}
            <rect x="180" y="0" width="10" height="300" fill="#333" />
            {/* Ear to wall */}
            <Stickman x={150} y={200} pose="stand" color="white" />
            {/* Conversation on other side */}
            <Stickman x={250} y={200} pose="stand" color="red" />
            <Stickman x={330} y={200} pose="stand" color="red" />
            {/* Sound waves through wall */}
            <circle
              cx="190"
              cy="150"
              r="10"
              fill="none"
              stroke="gold"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="190"
              cy="150"
              r="20"
              fill="none"
              stroke="gold"
              strokeWidth="1"
              opacity="0.2"
            />
            <text x="290" y="130" textAnchor="middle" fontSize="8" fill="red">
              "...double agent..."
            </text>
          </svg>
        );

      case "double_agent_reveal":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            {/* Dramatic red lighting */}
            <rect
              x="100"
              y="40"
              width="200"
              height="120"
              fill="#110000"
              stroke="red"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="200"
              y="80"
              textAnchor="middle"
              fontSize="12"
              fill="red"
              fontWeight="bold"
            >
              HANDLER: TRAITOR
            </text>
            <text x="200" y="110" textAnchor="middle" fontSize="8" fill="gray">
              Your own boss is the mastermind.
            </text>
            <text x="200" y="130" textAnchor="middle" fontSize="8" fill="gray">
              The theft was an inside job.
            </text>
            <Stickman x={130} y={230} pose="stand" color="white" />
            <Stickman x={270} y={230} pose="stand" color="red" />
          </svg>
        );

      case "launch_codes":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Case with codes */}
            <rect
              x="130"
              y="100"
              width="140"
              height="90"
              fill="#333"
              stroke="gold"
              strokeWidth="3"
              rx="5"
            />
            <rect x="145" y="120" width="110" height="50" fill="#111" rx="3" />
            <text
              x="200"
              y="140"
              textAnchor="middle"
              fontSize="8"
              fill="red"
              fontFamily="monospace"
            >
              LAUNCH CODES
            </text>
            <text
              x="200"
              y="155"
              textAnchor="middle"
              fontSize="10"
              fill="lime"
              fontFamily="monospace"
            >
              A7-X9-K3-M1
            </text>
            {/* Warning symbol */}
            <path d="M190 105 L200 95 L210 105 Z" fill="red" />
            <text x="200" y="104" textAnchor="middle" fontSize="6" fill="white">
              ☢
            </text>
            <Stickman x={200} y={250} pose="stand" color="white" />
          </svg>
        );

      /* SPY ENDINGS */

      case "spy_promotion":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Agency logo */}
            <circle
              cx="200"
              cy="80"
              r="40"
              fill="none"
              stroke="gold"
              strokeWidth="2"
            />
            <text
              x="200"
              y="85"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              007
            </text>
            {/* Medal */}
            <circle cx="200" cy="170" r="15" fill="gold" opacity="0.6" />
            <path
              d="M185 170 L200 155 L215 170 L200 185 Z"
              fill="gold"
              opacity="0.4"
            />
            <Stickman x={200} y={230} pose="hands_up" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              PROMOTED!
            </text>
          </svg>
        );

      case "spy_money":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Money briefcase */}
            <rect
              x="140"
              y="120"
              width="120"
              height="80"
              fill="#333"
              stroke="lime"
              strokeWidth="2"
              rx="5"
            />
            <rect
              x="155"
              y="130"
              width="90"
              height="20"
              fill="#1a3a1a"
              rx="2"
            />
            <rect
              x="155"
              y="155"
              width="90"
              height="20"
              fill="#1a3a1a"
              rx="2"
            />
            <text x="200" y="145" textAnchor="middle" fontSize="10" fill="lime">
              $$$$$
            </text>
            <Stickman x={200} y={250} pose="stand" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              BLACK MARKET
            </text>
          </svg>
        );

      case "peace_symbol":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a2a1a" />
            {/* Peace symbol */}
            <circle
              cx="200"
              cy="120"
              r="50"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="70"
              x2="200"
              y2="170"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="120"
              x2="165"
              y2="155"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="120"
              x2="235"
              y2="155"
              stroke="white"
              strokeWidth="3"
            />
            <Stickman x={200} y={230} pose="hands_up" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="lime"
              fontWeight="bold"
            >
              CODES DESTROYED
            </text>
          </svg>
        );

      case "digital_collapse":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1e" />
            {/* Glitching screens */}
            <rect
              x="50"
              y="50"
              width="80"
              height="60"
              fill="#001122"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="160"
              y="40"
              width="80"
              height="60"
              fill="#001122"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="270"
              y="50"
              width="80"
              height="60"
              fill="#001122"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <text x="90" y="80" textAnchor="middle" fontSize="8" fill="red">
              ERROR
            </text>
            <text x="200" y="70" textAnchor="middle" fontSize="8" fill="red">
              CRASH
            </text>
            <text x="310" y="80" textAnchor="middle" fontSize="8" fill="red">
              FAIL
            </text>
            <text x="200" y="160" textAnchor="middle" fontSize="16" fill="red">
              SYSTEMS COLLAPSED
            </text>
            <Stickman x={200} y={230} pose="hands_up" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="12" fill="lime">
              Silent victory.
            </text>
          </svg>
        );

      case "spy_hero":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            {/* Spotlight */}
            <path
              d="M150 0 L100 300 L300 300 L250 0"
              fill="gold"
              opacity="0.03"
            />
            {/* Handcuffed traitor */}
            <Stickman x={300} y={220} pose="hands_up" color="red" />
            <rect x="290" y="195" width="20" height="5" fill="#888" rx="2" />
            {/* Hero */}
            <Stickman x={150} y={210} pose="stand" color="white" />
            <text
              x="200"
              y="100"
              textAnchor="middle"
              fontSize="18"
              fill="gold"
              fontWeight="bold"
            >
              DOUBLE AGENT EXPOSED
            </text>
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="gold">
              Agency saved.
            </text>
          </svg>
        );

      case "shadow_control":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050510" />
            {/* Global network */}
            <circle
              cx="200"
              cy="130"
              r="70"
              fill="none"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="130"
              r="45"
              fill="none"
              stroke="red"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle cx="200" cy="130" r="20" fill="red" opacity="0.2" />
            {/* Connection dots */}
            <circle cx="130" cy="100" r="3" fill="red" opacity="0.6" />
            <circle cx="270" cy="100" r="3" fill="red" opacity="0.6" />
            <circle cx="200" cy="60" r="3" fill="red" opacity="0.6" />
            <line
              x1="200"
              y1="130"
              x2="130"
              y2="100"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="200"
              y1="130"
              x2="270"
              y2="100"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="200"
              y1="130"
              x2="200"
              y2="60"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <Stickman x={200} y={220} pose="stand" color="red" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="red"
              fontWeight="bold"
            >
              SHADOW MASTER
            </text>
          </svg>
        );

      /* ============ MEDIEVAL WAR STORY ============ */

      case "castle_throne_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            <rect x="0" y="260" width="400" height="40" fill="#3a2a1a" />
            {/* Stone walls */}
            <rect x="0" y="0" width="400" height="20" fill="#444" />
            {/* Throne */}
            <rect
              x="160"
              y="60"
              width="80"
              height="120"
              fill="#654321"
              stroke="gold"
              strokeWidth="3"
              rx="5"
            />
            <rect x="165" y="50" width="70" height="15" fill="gold" rx="3" />
            {/* Crown on throne */}
            <path d="M185 65 L190 55 L200 65 L210 55 L215 65" fill="gold" />
            {/* Torches */}
            <rect x="60" y="40" width="6" height="40" fill="#654321" />
            <path d="M55 40 L63 25 L71 40" fill="orange" />
            <rect x="334" y="40" width="6" height="40" fill="#654321" />
            <path d="M329 40 L337 25 L345 40" fill="orange" />
            {/* Red carpet */}
            <rect x="185" y="180" width="30" height="120" fill="#800" />
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_coward":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            {/* Castle in background burning */}
            <rect x="120" y="60" width="160" height="140" fill="#444" />
            <rect x="120" y="40" width="40" height="160" fill="#555" />
            <rect x="240" y="40" width="40" height="160" fill="#555" />
            <path
              d="M130 40 L150 10 L170 30 L200 0 L230 30 L250 10 L270 40"
              fill="orange"
              opacity="0.6"
            />
            {/* Running away */}
            <Stickman x={60} y={240} pose="run" color="white" />
            <text x="200" y="270" textAnchor="middle" fontSize="16" fill="red">
              COWARD!
            </text>
          </svg>
        );

      case "claim_throne":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            {/* Throne */}
            <rect
              x="160"
              y="80"
              width="80"
              height="100"
              fill="#654321"
              stroke="gold"
              strokeWidth="3"
              rx="5"
            />
            {/* Crown on head */}
            <path
              d="M188 115 L193 105 L200 115 L207 105 L212 115"
              fill="gold"
            />
            <Stickman x={200} y={150} pose="sit" color="white" />
            {/* Kneeling subjects */}
            <Stickman x={80} y={230} pose="sit" color="gray" />
            <Stickman x={320} y={230} pose="sit" color="gray" />
            <text x="200" y="280" textAnchor="middle" fontSize="12" fill="gold">
              Long live the King!
            </text>
          </svg>
        );

      case "royal_council":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a0a" />
            {/* Round table */}
            <ellipse
              cx="200"
              cy="180"
              rx="120"
              ry="40"
              fill="#654321"
              stroke="#543"
              strokeWidth="3"
            />
            {/* Council members */}
            <Stickman x={100} y={170} pose="stand" color="gray" />
            <Stickman x={200} y={155} pose="stand" color="white" />
            <Stickman x={300} y={170} pose="stand" color="gray" />
            {/* Candles */}
            <rect x="190" y="160" width="4" height="15" fill="#ddd" />
            <circle cx="192" cy="158" r="3" fill="orange" />
            <text x="200" y="260" textAnchor="middle" fontSize="10" fill="red">
              "Beware... a traitor among us."
            </text>
          </svg>
        );

      case "traitor_hunt":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a0a" />
            {/* Shadowy meeting */}
            <rect x="250" y="80" width="120" height="160" fill="#0a0a0a" />
            <Stickman x={280} y={180} pose="stand" color="red" />
            <Stickman x={340} y={180} pose="stand" color="#555" />
            {/* You watching */}
            <Stickman x={100} y={200} pose="stand" color="white" />
            <text x="310" y="120" textAnchor="middle" fontSize="8" fill="red">
              "...secret plans..."
            </text>
            <text x="200" y="280" textAnchor="middle" fontSize="10" fill="gold">
              Duke Roland exposed!
            </text>
          </svg>
        );

      case "secret_information":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a0a" />
            {/* Battle map */}
            <rect
              x="100"
              y="60"
              width="200"
              height="150"
              fill="#d4a050"
              rx="3"
            />
            <line
              x1="120"
              y1="100"
              x2="280"
              y2="100"
              stroke="#654321"
              strokeWidth="1"
            />
            <line
              x1="120"
              y1="140"
              x2="280"
              y2="140"
              stroke="#654321"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="80"
              x2="200"
              y2="190"
              stroke="#654321"
              strokeWidth="1"
            />
            {/* Enemy positions */}
            <circle cx="160" cy="120" r="8" fill="red" opacity="0.5" />
            <circle cx="240" cy="100" r="8" fill="red" opacity="0.5" />
            <circle cx="200" cy="160" r="8" fill="blue" opacity="0.5" />
            <text
              x="200"
              y="80"
              textAnchor="middle"
              fontSize="8"
              fill="#654321"
            >
              ENEMY BATTLE PLANS
            </text>
            <Stickman x={200} y={260} pose="stand" color="white" />
          </svg>
        );

      case "peace_talks":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a1a" />
            {/* Two thrones facing */}
            <rect
              x="50"
              y="80"
              width="60"
              height="80"
              fill="#654321"
              stroke="gold"
              strokeWidth="2"
              rx="3"
            />
            <rect
              x="290"
              y="80"
              width="60"
              height="80"
              fill="#654321"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            {/* Kings */}
            <Stickman x={80} y={130} pose="sit" color="white" />
            <Stickman x={320} y={130} pose="sit" color="red" />
            {/* Table between */}
            <rect x="160" y="150" width="80" height="8" fill="#654321" />
            {/* Scroll */}
            <rect
              x="180"
              y="130"
              width="40"
              height="20"
              fill="#d4a050"
              rx="3"
            />
            <text x="200" y="260" textAnchor="middle" fontSize="10" fill="gold">
              Alliance offered...
            </text>
          </svg>
        );

      case "army_preparation":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#87ceeb" />
            <rect x="0" y="200" width="400" height="100" fill="#4a7a2a" />
            {/* Army formation */}
            <Stickman x={80} y={220} pose="stand" color="gray" />
            <Stickman x={120} y={220} pose="stand" color="gray" />
            <Stickman x={160} y={220} pose="stand" color="gray" />
            <Stickman x={240} y={220} pose="stand" color="gray" />
            <Stickman x={280} y={220} pose="stand" color="gray" />
            <Stickman x={320} y={220} pose="stand" color="gray" />
            {/* Commander */}
            <Stickman x={200} y={210} pose="stand" color="white" />
            {/* Banner */}
            <line
              x1="200"
              y1="170"
              x2="200"
              y2="210"
              stroke="#654321"
              strokeWidth="3"
            />
            <rect x="200" y="170" width="30" height="20" fill="gold" />
            <text x="200" y="280" textAnchor="middle" fontSize="12" fill="gold">
              Army ready!
            </text>
          </svg>
        );

      case "medieval_battle":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="180" fill="#8a6a3a" />
            <rect x="0" y="180" width="400" height="120" fill="#4a6a2a" />
            {/* Dust clouds */}
            <circle cx="200" cy="200" r="30" fill="#8a6a3a" opacity="0.3" />
            {/* Your army */}
            <Stickman x={60} y={220} pose="run" color="white" />
            <Stickman x={100} y={225} pose="run" color="gray" />
            <Stickman x={140} y={220} pose="run" color="gray" />
            {/* Enemy army */}
            <Stickman x={260} y={220} pose="run" color="red" />
            <Stickman x={300} y={225} pose="run" color="red" />
            <Stickman x={340} y={220} pose="run" color="red" />
            {/* Swords clashing */}
            <line
              x1="170"
              y1="200"
              x2="190"
              y2="210"
              stroke="#888"
              strokeWidth="2"
            />
            <line
              x1="230"
              y1="200"
              x2="210"
              y2="210"
              stroke="#888"
              strokeWidth="2"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              fontWeight="bold"
            >
              BATTLE!
            </text>
          </svg>
        );

      case "heroic_charge":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#5a4a2a" />
            {/* Horse silhouette */}
            <ellipse cx="180" cy="190" rx="40" ry="20" fill="#333" />
            <path d="M140 190 L130 170 L145 175" fill="#333" />
            <Stickman x={180} y={170} pose="stand" color="white" />
            {/* Sword raised */}
            <line
              x1="195"
              y1="150"
              x2="215"
              y2="130"
              stroke="#888"
              strokeWidth="3"
            />
            {/* Enemy king ahead */}
            <Stickman x={320} y={200} pose="stand" color="red" />
            <path
              d="M308 175 L313 165 L320 175 L327 165 L332 175"
              fill="gold"
            />
          </svg>
        );

      case "ambush_success":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a4a2a" />
            {/* Trees */}
            <rect x="30" y="100" width="10" height="160" fill="#543" />
            <circle cx="35" cy="80" r="25" fill="#1a3a1a" />
            <rect x="360" y="100" width="10" height="160" fill="#543" />
            <circle cx="365" cy="80" r="25" fill="#1a3a1a" />
            {/* Ambushers */}
            <Stickman x={60} y={200} pose="run" color="white" />
            <Stickman x={340} y={200} pose="run" color="white" />
            {/* Surprised enemies */}
            <Stickman x={180} y={210} pose="hands_up" color="red" />
            <Stickman x={220} y={210} pose="hands_up" color="red" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="gold">
              AMBUSH!
            </text>
          </svg>
        );

      case "castle_siege":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#5a4a2a" />
            {/* Castle walls */}
            <rect
              x="100"
              y="60"
              width="200"
              height="200"
              fill="#555"
              stroke="#444"
              strokeWidth="3"
            />
            <rect x="100" y="40" width="40" height="220" fill="#666" />
            <rect x="260" y="40" width="40" height="220" fill="#666" />
            {/* Battlements */}
            <rect x="100" y="40" width="15" height="20" fill="#666" />
            <rect x="125" y="40" width="15" height="20" fill="#666" />
            <rect x="260" y="40" width="15" height="20" fill="#666" />
            <rect x="285" y="40" width="15" height="20" fill="#666" />
            {/* Archers on wall */}
            <Stickman x={200} y={80} pose="stand" color="white" />
            {/* Attacking army */}
            <Stickman x={30} y={240} pose="run" color="red" />
            <Stickman x={370} y={240} pose="run" color="red" />
            <text x="200" y="285" textAnchor="middle" fontSize="12" fill="red">
              SIEGE!
            </text>
          </svg>
        );

      case "dragon_mountain":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a3a5a" />
            {/* Mountains */}
            <path d="M0 250 L100 80 L200 200 L300 60 L400 250" fill="#444" />
            <path d="M0 270 L150 120 L250 220 L350 100 L400 270" fill="#555" />
            {/* Snow caps */}
            <path d="M80 100 L100 80 L120 100" fill="white" />
            <path d="M280 80 L300 60 L320 80" fill="white" />
            {/* Dragon silhouette */}
            <ellipse cx="300" cy="90" rx="30" ry="12" fill="#600" />
            <path d="M270 90 L260 80 L275 85" fill="#600" />
            <path d="M310 78 L320 70 L325 80" fill="#600" />
            <circle cx="325" cy="85" r="3" fill="red" />
            {/* Fire breath */}
            <path
              d="M330 88 L360 80 L350 95 L370 90"
              fill="orange"
              opacity="0.5"
            />
            <Stickman x={100} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_frozen":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#cce8ff" />
            {/* Blizzard lines */}
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="80"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="100"
              y1="30"
              x2="200"
              y2="60"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />
            <line
              x1="200"
              y1="70"
              x2="300"
              y2="100"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="300"
              y1="40"
              x2="400"
              y2="70"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <rect x="0" y="220" width="400" height="80" fill="white" />
            <Stickman x={200} y={210} pose="dead" color="#88aacc" />
            <text x="200" y="270" textAnchor="middle" fontSize="16" fill="#446">
              FROZEN!
            </text>
          </svg>
        );

      /* MEDIEVAL ENDINGS */

      case "victory_banner":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#87ceeb" />
            <rect x="0" y="200" width="400" height="100" fill="#4a7a2a" />
            {/* Victory banner */}
            <line
              x1="200"
              y1="40"
              x2="200"
              y2="180"
              stroke="#654321"
              strokeWidth="4"
            />
            <rect x="200" y="40" width="80" height="50" fill="gold" />
            <text
              x="240"
              y="70"
              textAnchor="middle"
              fontSize="12"
              fill="#654321"
              fontWeight="bold"
            >
              VICTORY
            </text>
            <Stickman x={200} y={220} pose="hands_up" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              THRONE SECURED!
            </text>
          </svg>
        );

      case "duel_victory":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#5a4a2a" />
            <Stickman x={150} y={200} pose="stand" color="white" />
            <line
              x1="165"
              y1="185"
              x2="200"
              y2="175"
              stroke="#888"
              strokeWidth="3"
            />
            <Stickman x={280} y={220} pose="dead" color="red" />
            {/* Two crowns */}
            <path
              d="M138 175 L143 165 L150 175 L157 165 L162 175"
              fill="gold"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              KING OF ALL LANDS!
            </text>
          </svg>
        );

      case "fallen_hero":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a2a1a" />
            {/* Sunset */}
            <circle cx="200" cy="80" r="40" fill="orange" opacity="0.4" />
            <Stickman x={200} y={200} pose="dead" color="white" />
            {/* Sword in ground memorial */}
            <line
              x1="300"
              y1="160"
              x2="300"
              y2="220"
              stroke="#888"
              strokeWidth="3"
            />
            <line
              x1="290"
              y1="175"
              x2="310"
              y2="175"
              stroke="#888"
              strokeWidth="3"
            />
            <text x="200" y="270" textAnchor="middle" fontSize="14" fill="gold">
              A LEGEND REMEMBERED
            </text>
          </svg>
        );

      case "castle_defense":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#5a4a3a" />
            {/* Standing castle */}
            <rect
              x="100"
              y="60"
              width="200"
              height="200"
              fill="#666"
              stroke="#555"
              strokeWidth="3"
            />
            <rect x="100" y="40" width="40" height="220" fill="#777" />
            <rect x="260" y="40" width="40" height="220" fill="#777" />
            {/* Flag */}
            <line
              x1="200"
              y1="20"
              x2="200"
              y2="60"
              stroke="#654321"
              strokeWidth="3"
            />
            <rect x="200" y="20" width="30" height="20" fill="gold" />
            {/* Retreating enemies */}
            <Stickman x={30} y={240} pose="run" color="red" />
            <Stickman x={370} y={240} pose="run" color="red" />
            <Stickman x={200} y={100} pose="hands_up" color="white" />
            <text
              x="200"
              y="285"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              DEFENDED!
            </text>
          </svg>
        );

      case "dragon_slayer":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#3a2a1a" />
            {/* Dead dragon */}
            <ellipse
              cx="250"
              cy="210"
              rx="60"
              ry="25"
              fill="#600"
              opacity="0.6"
            />
            <circle cx="310" cy="200" r="15" fill="#600" opacity="0.5" />
            {/* You with sword */}
            <Stickman x={120} y={200} pose="hands_up" color="white" />
            <line
              x1="135"
              y1="175"
              x2="160"
              y2="160"
              stroke="#888"
              strokeWidth="3"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="gold"
              fontWeight="bold"
            >
              DRAGON SLAYER!
            </text>
          </svg>
        );

      case "dragon_throne":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a1a3a" />
            {/* Dragon mount */}
            <ellipse cx="200" cy="150" rx="80" ry="30" fill="#600" />
            <circle cx="280" cy="135" r="20" fill="#600" />
            <circle cx="285" cy="130" r="5" fill="orange" />
            {/* Wings */}
            <path d="M160 130 L100 80 L140 140" fill="#800" opacity="0.6" />
            <path d="M240 130 L300 80 L260 140" fill="#800" opacity="0.6" />
            {/* You riding */}
            <Stickman x={200} y={130} pose="hands_up" color="gold" />
            <path d="M188 105 L193 95 L200 105 L207 95 L212 105" fill="gold" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="gold"
              fontWeight="bold"
            >
              DRAGON RULER!
            </text>
          </svg>
        );

      case "royal_wedding":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#2a2a3a" />
            {/* Arch */}
            <path
              d="M120 250 L120 100 Q200 40 280 100 L280 250"
              fill="none"
              stroke="gold"
              strokeWidth="3"
            />
            {/* Flowers */}
            <circle cx="130" cy="120" r="5" fill="pink" />
            <circle cx="270" cy="120" r="5" fill="pink" />
            <circle cx="140" cy="150" r="4" fill="pink" />
            <circle cx="260" cy="150" r="4" fill="pink" />
            {/* Couple */}
            <Stickman x={180} y={210} pose="stand" color="white" />
            <Stickman x={220} y={210} pose="stand" color="pink" />
            {/* Crowns */}
            <path
              d="M168 185 L173 178 L180 185 L187 178 L192 185"
              fill="gold"
            />
            <path
              d="M208 185 L213 178 L220 185 L227 178 L232 185"
              fill="gold"
            />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              KINGDOMS UNITED!
            </text>
          </svg>
        );

      /* ============ HORROR MANSION STORY ============ */

      case "haunted_mansion_exterior":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            {/* Moon */}
            <circle cx="320" cy="50" r="25" fill="#ddd" opacity="0.3" />
            {/* Mansion silhouette */}
            <rect x="100" y="80" width="200" height="170" fill="#111" />
            <rect x="100" y="60" width="40" height="190" fill="#151515" />
            <rect x="260" y="60" width="40" height="190" fill="#151515" />
            {/* Pointed roof */}
            <path d="M80 80 L200 20 L320 80" fill="#111" />
            {/* Spooky windows */}
            <rect x="140" y="100" width="30" height="40" fill="#220" rx="2" />
            <rect x="230" y="100" width="30" height="40" fill="#220" rx="2" />
            {/* Eyes in window */}
            <circle cx="150" cy="118" r="3" fill="red" opacity="0.5" />
            <circle cx="160" cy="118" r="3" fill="red" opacity="0.5" />
            {/* Door */}
            <rect
              x="180"
              y="180"
              width="40"
              height="70"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
              rx="15"
            />
            {/* Fog */}
            <ellipse
              cx="200"
              cy="260"
              rx="180"
              ry="15"
              fill="#222"
              opacity="0.3"
            />
            <Stickman x={70} y={240} pose="stand" color="white" />
          </svg>
        );

      case "fail_curse_follows":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            <Stickman x={100} y={200} pose="run" color="white" />
            {/* Shadow following */}
            <ellipse
              cx="250"
              cy="200"
              rx="40"
              ry="60"
              fill="#111"
              opacity="0.8"
            />
            <circle cx="240" cy="175" r="4" fill="red" opacity="0.6" />
            <circle cx="260" cy="175" r="4" fill="red" opacity="0.6" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="red">
              THE CURSE FOLLOWS...
            </text>
          </svg>
        );

      case "mansion_main_hall":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            <rect x="0" y="260" width="400" height="40" fill="#1a1a1a" />
            {/* Chandelier */}
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="40"
              stroke="#555"
              strokeWidth="2"
            />
            <path
              d="M170 45 L200 35 L230 45"
              fill="none"
              stroke="#555"
              strokeWidth="2"
            />
            <circle cx="180" cy="48" r="3" fill="orange" opacity="0.3" />
            <circle cx="200" cy="45" r="3" fill="orange" opacity="0.4" />
            <circle cx="220" cy="48" r="3" fill="orange" opacity="0.3" />
            {/* Portrait */}
            <rect
              x="260"
              y="60"
              width="60"
              height="80"
              fill="#222"
              stroke="gold"
              strokeWidth="2"
            />
            <circle cx="290" cy="90" r="10" fill="#333" />
            {/* Eyes that move */}
            <circle cx="286" cy="88" r="2" fill="red" opacity="0.6" />
            <circle cx="294" cy="88" r="2" fill="red" opacity="0.6" />
            {/* Staircase */}
            <path
              d="M50 260 L50 120 L150 120"
              fill="none"
              stroke="#333"
              strokeWidth="4"
            />
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "hidden_key":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Portrait swung open */}
            <rect
              x="230"
              y="60"
              width="60"
              height="80"
              fill="#222"
              stroke="gold"
              strokeWidth="2"
              transform="rotate(-30 230 100)"
            />
            {/* Key behind */}
            <circle
              cx="290"
              cy="100"
              r="8"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
            <rect x="290" y="100" width="20" height="4" fill="#888" />
            <rect
              x="305"
              y="96"
              width="5"
              height="12"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            />
            <text x="200" y="260" textAnchor="middle" fontSize="12" fill="gold">
              Rusted key found!
            </text>
            <Stickman x={180} y={200} pose="stand" color="white" />
          </svg>
        );

      case "graveyard":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="200" fill="#0a0a0a" />
            <rect x="0" y="200" width="400" height="100" fill="#1a1a0a" />
            {/* Moon */}
            <circle cx="350" cy="40" r="20" fill="#ddd" opacity="0.2" />
            {/* Tombstones */}
            <rect x="60" y="160" width="30" height="45" fill="#444" rx="5" />
            <rect x="140" y="170" width="25" height="35" fill="#444" rx="5" />
            <rect x="250" y="155" width="35" height="50" fill="#444" rx="5" />
            <rect x="330" y="165" width="30" height="40" fill="#444" rx="5" />
            {/* Dead tree */}
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="4"
            />
            <line
              x1="200"
              y1="130"
              x2="170"
              y2="110"
              stroke="#333"
              strokeWidth="3"
            />
            <line
              x1="200"
              y1="150"
              x2="230"
              y2="130"
              stroke="#333"
              strokeWidth="3"
            />
            <Stickman x={100} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_hand_grab":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            <rect x="0" y="200" width="400" height="100" fill="#1a1a0a" />
            {/* Hand from grave */}
            <rect x="195" y="180" width="4" height="30" fill="#ddd" />
            <path
              d="M190 180 L195 165 L200 180 L205 170 L210 180"
              fill="#ddd"
            />
            <Stickman x={200} y={220} pose="hands_up" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="red">
              GRABBED!
            </text>
          </svg>
        );

      case "ghost_warning":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1a" />
            {/* Ghost */}
            <ellipse
              cx="280"
              cy="130"
              rx="25"
              ry="35"
              fill="white"
              opacity="0.15"
            />
            <circle cx="273" cy="120" r="3" fill="white" opacity="0.3" />
            <circle cx="287" cy="120" r="3" fill="white" opacity="0.3" />
            <path
              d="M260 165 L270 155 L280 165 L290 155 L300 165"
              fill="white"
              opacity="0.1"
            />
            {/* Speech */}
            <text
              x="280"
              y="90"
              textAnchor="middle"
              fontSize="8"
              fill="white"
              opacity="0.5"
            >
              "It's not me..."
            </text>
            <text
              x="280"
              y="100"
              textAnchor="middle"
              fontSize="8"
              fill="white"
              opacity="0.5"
            >
              "...it's below."
            </text>
            <Stickman x={120} y={200} pose="stand" color="white" />
          </svg>
        );

      case "upper_floor":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Hallway perspective */}
            <rect x="50" y="50" width="300" height="200" fill="#0a0a0a" />
            <line
              x1="50"
              y1="50"
              x2="350"
              y2="50"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="250"
              x2="350"
              y2="250"
              stroke="#333"
              strokeWidth="2"
            />
            {/* Doors */}
            <rect
              x="80"
              y="100"
              width="40"
              height="80"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
              rx="3"
            />
            <circle cx="115" cy="140" r="3" fill="#555" />
            <rect
              x="180"
              y="100"
              width="40"
              height="80"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
              rx="3"
            />
            <circle cx="215" cy="140" r="3" fill="#555" />
            <rect
              x="280"
              y="100"
              width="40"
              height="80"
              fill="#1a1a1a"
              stroke="#333"
              strokeWidth="2"
              rx="3"
            />
            <circle cx="315" cy="140" r="3" fill="#555" />
            <Stickman x={200} y={220} pose="stand" color="white" />
          </svg>
        );

      case "child_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Small bed */}
            <rect x="240" y="180" width="80" height="40" fill="#333" rx="3" />
            <rect x="240" y="175" width="80" height="8" fill="#444" rx="3" />
            {/* Music box */}
            <rect
              x="140"
              y="170"
              width="40"
              height="30"
              fill="#654321"
              stroke="gold"
              strokeWidth="2"
              rx="3"
            />
            <circle cx="160" cy="180" r="5" fill="gold" opacity="0.4" />
            {/* Musical notes floating */}
            <text x="180" y="150" fontSize="14" fill="gold" opacity="0.4">
              ♪
            </text>
            <text x="200" y="130" fontSize="12" fill="gold" opacity="0.3">
              ♫
            </text>
            <text x="170" y="120" fontSize="10" fill="gold" opacity="0.2">
              ♪
            </text>
            <Stickman x={100} y={220} pose="stand" color="white" />
          </svg>
        );

      case "fail_possession":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            {/* Dark aura around stickman */}
            <circle cx="200" cy="180" r="50" fill="#220022" opacity="0.5" />
            <circle cx="200" cy="180" r="30" fill="#330033" opacity="0.3" />
            <Stickman x={200} y={200} pose="hands_up" color="purple" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="purple"
            >
              POSSESSED!
            </text>
          </svg>
        );

      case "spirit_freed":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Child ghost ascending */}
            <ellipse
              cx="200"
              cy="100"
              rx="15"
              ry="25"
              fill="white"
              opacity="0.15"
            />
            <circle cx="196" cy="90" r="2" fill="white" opacity="0.3" />
            <circle cx="204" cy="90" r="2" fill="white" opacity="0.3" />
            {/* Light beam up */}
            <path d="M185 75 L200 30 L215 75" fill="white" opacity="0.05" />
            <text
              x="200"
              y="150"
              textAnchor="middle"
              fontSize="10"
              fill="white"
              opacity="0.4"
            >
              "Thank you..."
            </text>
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "library_room":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Bookshelves */}
            <rect x="20" y="40" width="80" height="200" fill="#222" />
            <rect x="300" y="40" width="80" height="200" fill="#222" />
            {/* Books */}
            <rect x="25" y="50" width="15" height="25" fill="#800" />
            <rect x="42" y="50" width="12" height="25" fill="#080" />
            <rect x="56" y="50" width="15" height="25" fill="#008" />
            <rect x="305" y="50" width="12" height="25" fill="#880" />
            <rect x="319" y="50" width="15" height="25" fill="#808" />
            {/* Ancient book on table */}
            <rect x="160" y="150" width="80" height="8" fill="#654321" />
            <rect
              x="170"
              y="110"
              width="60"
              height="45"
              fill="#3a1a0a"
              stroke="red"
              strokeWidth="2"
              rx="3"
            />
            <text x="200" y="135" textAnchor="middle" fontSize="8" fill="red">
              DEMON
            </text>
            <text x="200" y="145" textAnchor="middle" fontSize="8" fill="red">
              RITUAL
            </text>
            <Stickman x={200} y={230} pose="stand" color="white" />
          </svg>
        );

      case "fail_fire_spread":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            {/* Fire everywhere */}
            <path d="M50 250 L70 180 L90 250" fill="orange" opacity="0.6" />
            <path d="M150 250 L170 160 L190 250" fill="orange" opacity="0.7" />
            <path d="M250 250 L270 170 L290 250" fill="orange" opacity="0.6" />
            <path d="M330 250 L350 190 L370 250" fill="orange" opacity="0.5" />
            <Stickman x={200} y={220} pose="hands_up" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="16" fill="red">
              FIRE!
            </text>
          </svg>
        );

      case "ritual_knowledge":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#111" />
            {/* Open book with glowing text */}
            <rect
              x="130"
              y="100"
              width="140"
              height="100"
              fill="#3a1a0a"
              stroke="purple"
              strokeWidth="2"
              rx="3"
            />
            <text
              x="200"
              y="130"
              textAnchor="middle"
              fontSize="8"
              fill="purple"
              fontFamily="monospace"
            >
              SEAL THE BELOW
            </text>
            <text
              x="200"
              y="150"
              textAnchor="middle"
              fontSize="8"
              fill="purple"
              fontFamily="monospace"
            >
              SPEAK THE WORDS
            </text>
            <text
              x="200"
              y="170"
              textAnchor="middle"
              fontSize="8"
              fill="purple"
              fontFamily="monospace"
            >
              CLOSE THE GATE
            </text>
            {/* Glowing rune */}
            <circle cx="200" cy="190" r="8" fill="purple" opacity="0.3" />
            <text
              x="200"
              y="194"
              textAnchor="middle"
              fontSize="10"
              fill="purple"
            >
              ✧
            </text>
            <Stickman x={200} y={260} pose="stand" color="white" />
          </svg>
        );

      case "mansion_basement":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            {/* Stone steps */}
            <rect x="150" y="50" width="100" height="15" fill="#333" />
            <rect x="145" y="65" width="110" height="15" fill="#333" />
            <rect x="140" y="80" width="120" height="15" fill="#333" />
            {/* Glowing red symbol */}
            <circle
              cx="200"
              cy="200"
              r="50"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.4"
            />
            <path
              d="M175 200 L200 175 L225 200 L200 225 Z"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.6"
            />
            <circle cx="200" cy="200" r="10" fill="red" opacity="0.3" />
            {/* Sulfur mist */}
            <ellipse
              cx="200"
              cy="260"
              rx="150"
              ry="15"
              fill="yellow"
              opacity="0.05"
            />
            <Stickman x={200} y={130} pose="stand" color="white" />
          </svg>
        );

      case "fail_darkness":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#000" />
            {/* Only eyes visible */}
            <circle cx="150" cy="140" r="5" fill="red" opacity="0.4" />
            <circle cx="180" cy="140" r="5" fill="red" opacity="0.4" />
            <circle cx="250" cy="120" r="4" fill="red" opacity="0.3" />
            <circle cx="270" cy="120" r="4" fill="red" opacity="0.3" />
            <text
              x="200"
              y="250"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              opacity="0.6"
            >
              CONSUMED BY DARKNESS
            </text>
          </svg>
        );

      case "demon_encounter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            {/* Shadow demon */}
            <ellipse
              cx="280"
              cy="140"
              rx="40"
              ry="60"
              fill="#1a0000"
              opacity="0.8"
            />
            <circle cx="270" cy="120" r="6" fill="red" opacity="0.7" />
            <circle cx="290" cy="120" r="6" fill="red" opacity="0.7" />
            {/* Horns */}
            <path d="M260 100 L250 75 L265 95" fill="#1a0000" />
            <path d="M300 100 L310 75 L295 95" fill="#1a0000" />
            {/* Dark aura */}
            <circle
              cx="280"
              cy="140"
              r="70"
              fill="none"
              stroke="red"
              strokeWidth="1"
              opacity="0.2"
            />
            <Stickman x={120} y={220} pose="stand" color="white" />
          </svg>
        );

      /* HORROR ENDINGS */

      case "mansion_cleansed":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2a" />
            {/* Mansion at peace */}
            <rect x="100" y="80" width="200" height="170" fill="#333" />
            <path d="M80 80 L200 20 L320 80" fill="#333" />
            {/* Warm windows */}
            <rect
              x="140"
              y="100"
              width="30"
              height="40"
              fill="gold"
              opacity="0.3"
              rx="2"
            />
            <rect
              x="230"
              y="100"
              width="30"
              height="40"
              fill="gold"
              opacity="0.3"
              rx="2"
            />
            {/* Light from within */}
            <circle cx="200" cy="150" r="40" fill="gold" opacity="0.05" />
            <Stickman x={200} y={260} pose="hands_up" color="white" />
            <text
              x="200"
              y="290"
              textAnchor="middle"
              fontSize="14"
              fill="gold"
              fontWeight="bold"
            >
              DEMON SEALED
            </text>
          </svg>
        );

      case "ghosts_freed":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a2a" />
            {/* Ghosts ascending */}
            <ellipse
              cx="120"
              cy="80"
              rx="12"
              ry="20"
              fill="white"
              opacity="0.1"
            />
            <ellipse
              cx="200"
              cy="60"
              rx="12"
              ry="20"
              fill="white"
              opacity="0.1"
            />
            <ellipse
              cx="280"
              cy="80"
              rx="12"
              ry="20"
              fill="white"
              opacity="0.1"
            />
            {/* Light beams */}
            <path d="M110 60 L120 20 L130 60" fill="white" opacity="0.03" />
            <path d="M190 40 L200 0 L210 40" fill="white" opacity="0.03" />
            <path d="M270 60 L280 20 L290 60" fill="white" opacity="0.03" />
            <Stickman x={200} y={220} pose="hands_up" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              SOULS FREED!
            </text>
          </svg>
        );

      case "dark_throne":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050005" />
            {/* Dark throne */}
            <rect
              x="150"
              y="60"
              width="100"
              height="120"
              fill="#1a001a"
              stroke="red"
              strokeWidth="3"
              rx="5"
            />
            <rect x="155" y="50" width="90" height="15" fill="red" rx="3" />
            {/* Dark aura */}
            <circle cx="200" cy="120" r="60" fill="red" opacity="0.05" />
            <circle cx="200" cy="120" r="40" fill="red" opacity="0.08" />
            <Stickman x={200} y={150} pose="sit" color="red" />
            {/* Horns on stickman */}
            <path d="M190 125 L185 110 L193 120" fill="red" />
            <path d="M210 125 L215 110 L207 120" fill="red" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              fontWeight="bold"
            >
              DARK LORD!
            </text>
          </svg>
        );

      /* ============ MULTIVERSE STORY ============ */

      case "multiverse_fracture":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001a" />
            {/* Reality cracks */}
            <line
              x1="200"
              y1="0"
              x2="180"
              y2="150"
              stroke="purple"
              strokeWidth="2"
              opacity="0.6"
              className="animate-flicker"
            />
            <line
              x1="200"
              y1="0"
              x2="220"
              y2="150"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="150"
              x2="400"
              y2="150"
              stroke="white"
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Fragments of other worlds */}
            <rect
              x="30"
              y="40"
              width="50"
              height="40"
              fill="#600"
              opacity="0.3"
              rx="3"
            />
            <rect
              x="320"
              y="60"
              width="50"
              height="40"
              fill="#060"
              opacity="0.3"
              rx="3"
            />
            <rect
              x="60"
              y="200"
              width="50"
              height="40"
              fill="#006"
              opacity="0.3"
              rx="3"
            />
            <rect
              x="290"
              y="210"
              width="50"
              height="40"
              fill="#660"
              opacity="0.3"
              rx="3"
            />
            {/* Portal center */}
            <circle
              cx="200"
              cy="150"
              r="40"
              fill="none"
              stroke="purple"
              strokeWidth="3"
              opacity="0.5"
              className="animate-glow"
            />
            <circle
              cx="200"
              cy="150"
              r="25"
              fill="purple"
              opacity="0.15"
              className="animate-glow"
            />
            <Stickman x={200} y={240} pose="stand" color="white" />
            <text
              x="200"
              y="285"
              textAnchor="middle"
              fontSize="10"
              fill="purple"
            >
              Reality is breaking...
            </text>
          </svg>
        );

      case "fail_void":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#000" />
            {/* Void spiral */}
            <circle
              cx="200"
              cy="150"
              r="80"
              fill="none"
              stroke="#111"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="150"
              r="55"
              fill="none"
              stroke="#111"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="150"
              r="30"
              fill="none"
              stroke="#111"
              strokeWidth="1"
            />
            <circle cx="200" cy="150" r="10" fill="#111" />
            <text x="200" y="270" textAnchor="middle" fontSize="16" fill="#333">
              CONSUMED BY THE VOID
            </text>
          </svg>
        );

      case "portal_hub":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001a" />
            {/* Multiple glowing portals in a circle */}
            <circle
              cx="100"
              cy="80"
              r="25"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.5"
              className="animate-glow"
            />
            <circle
              cx="100"
              cy="80"
              r="10"
              fill="cyan"
              opacity="0.1"
              className="animate-glow"
            />
            <text x="100" y="120" textAnchor="middle" fontSize="7" fill="cyan">
              CYBER
            </text>

            <circle
              cx="300"
              cy="80"
              r="25"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.5"
              className="animate-glow"
            />
            <circle
              cx="300"
              cy="80"
              r="10"
              fill="red"
              opacity="0.1"
              className="animate-glow"
            />
            <text x="300" y="120" textAnchor="middle" fontSize="7" fill="red">
              MEDIEVAL
            </text>

            <circle
              cx="80"
              cy="200"
              r="25"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              opacity="0.5"
              className="animate-glow"
            />
            <circle
              cx="80"
              cy="200"
              r="10"
              fill="blue"
              opacity="0.1"
              className="animate-glow"
            />
            <text x="80" y="240" textAnchor="middle" fontSize="7" fill="blue">
              SPACE
            </text>

            <circle
              cx="320"
              cy="200"
              r="25"
              fill="none"
              stroke="gold"
              strokeWidth="2"
              opacity="0.5"
              className="animate-glow"
            />
            <circle
              cx="320"
              cy="200"
              r="10"
              fill="gold"
              opacity="0.1"
              className="animate-glow"
            />
            <text x="320" y="240" textAnchor="middle" fontSize="7" fill="gold">
              HEIST
            </text>

            {/* Central nexus */}
            <circle
              cx="200"
              cy="150"
              r="15"
              fill="white"
              opacity="0.05"
              className="animate-glow"
            />
            <Stickman x={200} y={165} pose="stand" color="white" />
          </svg>
        );

      case "cyber_assist":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0020" />
            {/* Neon grid */}
            <line
              x1="0"
              y1="250"
              x2="400"
              y2="250"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="100"
              y1="250"
              x2="100"
              y2="300"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.2"
            />
            <line
              x1="200"
              y1="250"
              x2="200"
              y2="300"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.2"
            />
            <line
              x1="300"
              y1="250"
              x2="300"
              y2="300"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Cyber ally */}
            <Stickman x={280} y={210} pose="stand" color="cyan" />
            {/* AI glow */}
            <circle cx="280" cy="190" r="20" fill="cyan" opacity="0.08" />
            <Stickman x={150} y={210} pose="stand" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="10" fill="cyan">
              Neon Rebel joined!
            </text>
          </svg>
        );

      case "dragon_assist":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a0a0a" />
            {/* Dragon */}
            <ellipse cx="280" cy="140" rx="40" ry="18" fill="#600" />
            <circle cx="320" cy="130" r="12" fill="#600" />
            <circle cx="325" cy="127" r="3" fill="orange" />
            <path d="M260 125 L230 90 L255 130" fill="#800" opacity="0.5" />
            <path d="M300 125 L330 90 L305 130" fill="#800" opacity="0.5" />
            {/* Rider */}
            <Stickman x={280} y={125} pose="stand" color="gold" />
            <Stickman x={120} y={220} pose="stand" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="10" fill="gold">
              Dragon Rider joined!
            </text>
          </svg>
        );

      case "space_assist":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#000020" />
            {/* Stars */}
            <circle cx="50" cy="40" r="1" fill="white" />
            <circle cx="150" cy="30" r="1" fill="white" />
            <circle cx="350" cy="60" r="1" fill="white" />
            <circle cx="250" cy="25" r="1" fill="white" />
            {/* AI hologram */}
            <circle
              cx="280"
              cy="140"
              r="30"
              fill="none"
              stroke="indigo"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx="280" cy="140" r="15" fill="indigo" opacity="0.15" />
            <text
              x="280"
              y="145"
              textAnchor="middle"
              fontSize="10"
              fill="indigo"
            >
              AI
            </text>
            <Stickman x={140} y={210} pose="stand" color="white" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="10"
              fill="indigo"
            >
              Space AI merged!
            </text>
          </svg>
        );

      case "mastermind_assist":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a1a" />
            {/* Mastermind with hat */}
            <Stickman x={280} y={200} pose="stand" color="#aaa" />
            <rect x="268" y="168" width="24" height="6" fill="#555" />
            <rect x="272" y="158" width="16" height="12" fill="#555" />
            {/* Briefcase */}
            <rect
              x="300"
              y="210"
              width="20"
              height="15"
              fill="#654321"
              stroke="#543"
              strokeWidth="2"
              rx="2"
            />
            <Stickman x={140} y={200} pose="stand" color="white" />
            <text x="200" y="270" textAnchor="middle" fontSize="10" fill="#aaa">
              Master Thief joined!
            </text>
          </svg>
        );

      case "portal_hub_allies1":
      case "portal_hub_allies2":
      case "portal_hub_allies3":
      case "portal_hub_allies4":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001a" />
            {/* Portals */}
            <circle
              cx="100"
              cy="80"
              r="20"
              fill="none"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              cx="300"
              cy="80"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              cx="80"
              cy="200"
              r="20"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              cx="320"
              cy="200"
              r="20"
              fill="none"
              stroke="gold"
              strokeWidth="2"
              opacity="0.3"
            />
            {/* Central portal glowing more */}
            <circle
              cx="200"
              cy="140"
              r="30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx="200" cy="140" r="15" fill="white" opacity="0.1" />
            {/* You with ally */}
            <Stickman x={180} y={230} pose="stand" color="white" />
            <Stickman x={220} y={230} pose="stand" color="cyan" />
            <text x="200" y="280" textAnchor="middle" fontSize="9" fill="white">
              Central portal activating...
            </text>
          </svg>
        );

      case "final_boss_shadow":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050005" />
            {/* Dimensional rift */}
            <ellipse
              cx="200"
              cy="150"
              rx="150"
              ry="100"
              fill="none"
              stroke="purple"
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Shadow you */}
            <Stickman x={280} y={180} pose="stand" color="#333" />
            <circle cx="280" cy="160" r="30" fill="#111" opacity="0.5" />
            {/* Red eyes */}
            <circle cx="274" cy="158" r="3" fill="red" opacity="0.6" />
            <circle cx="286" cy="158" r="3" fill="red" opacity="0.6" />
            {/* You */}
            <Stickman x={120} y={200} pose="stand" color="white" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="10"
              fill="purple"
            >
              Your shadow self awaits...
            </text>
          </svg>
        );

      case "fail_overpowered":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050005" />
            {/* Shadow dominating */}
            <circle cx="200" cy="120" r="60" fill="#111" opacity="0.5" />
            <Stickman x={200} y={140} pose="stand" color="#333" />
            <circle cx="194" cy="118" r="4" fill="red" opacity="0.7" />
            <circle cx="206" cy="118" r="4" fill="red" opacity="0.7" />
            <Stickman x={200} y={240} pose="dead" color="white" />
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="red">
              OVERPOWERED!
            </text>
          </svg>
        );

      case "final_battle":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001a" />
            {/* Energy beams combining */}
            <line
              x1="60"
              y1="200"
              x2="200"
              y2="100"
              stroke="cyan"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="120"
              y1="220"
              x2="200"
              y2="100"
              stroke="gold"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="280"
              y1="220"
              x2="200"
              y2="100"
              stroke="red"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="340"
              y1="200"
              x2="200"
              y2="100"
              stroke="blue"
              strokeWidth="2"
              opacity="0.5"
            />
            {/* Combined blast */}
            <circle cx="200" cy="100" r="20" fill="white" opacity="0.15" />
            {/* Allies */}
            <Stickman x={60} y={220} pose="stand" color="cyan" />
            <Stickman x={120} y={230} pose="stand" color="gold" />
            <Stickman x={280} y={230} pose="stand" color="red" />
            <Stickman x={340} y={220} pose="stand" color="blue" />
            {/* Hero center */}
            <Stickman x={200} y={220} pose="hands_up" color="white" />
            <text
              x="200"
              y="285"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
            >
              COMBINED POWER!
            </text>
          </svg>
        );

      case "meta_reveal":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#050005" />
            {/* Mirror effect */}
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="300"
              stroke="purple"
              strokeWidth="1"
              opacity="0.3"
            />
            {/* You */}
            <Stickman x={140} y={180} pose="stand" color="white" />
            {/* Shadow you */}
            <Stickman x={260} y={180} pose="stand" color="#444" />
            <circle cx="254" cy="158" r="3" fill="red" opacity="0.5" />
            <circle cx="266" cy="158" r="3" fill="red" opacity="0.5" />
            <text
              x="200"
              y="260"
              textAnchor="middle"
              fontSize="9"
              fill="purple"
            >
              "I am every failed choice you made."
            </text>
          </svg>
        );

      /* MULTIVERSE ENDINGS */

      case "multiverse_saved":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a002a" />
            {/* Sealed rift — peaceful glow */}
            <circle
              cx="200"
              cy="120"
              r="50"
              fill="none"
              stroke="gold"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx="200" cy="120" r="30" fill="gold" opacity="0.05" />
            <circle cx="200" cy="120" r="10" fill="gold" opacity="0.1" />
            {/* Stars returning */}
            <circle cx="60" cy="40" r="2" fill="white" opacity="0.5" />
            <circle cx="150" cy="30" r="2" fill="white" opacity="0.5" />
            <circle cx="300" cy="50" r="2" fill="white" opacity="0.5" />
            <circle cx="350" cy="80" r="2" fill="white" opacity="0.5" />
            <Stickman x={200} y={230} pose="hands_up" color="gold" />
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fontSize="16"
              fill="gold"
              fontWeight="bold"
            >
              UNIVERSES SAVED!
            </text>
          </svg>
        );

      case "cosmic_throne":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a001a" />
            {/* Cosmic throne */}
            <rect
              x="150"
              y="60"
              width="100"
              height="120"
              fill="#1a0030"
              stroke="purple"
              strokeWidth="3"
              rx="5"
            />
            <rect x="155" y="50" width="90" height="15" fill="purple" rx="3" />
            {/* Timeline threads */}
            <line
              x1="50"
              y1="100"
              x2="150"
              y2="120"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="350"
              y1="100"
              x2="250"
              y2="120"
              stroke="red"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="50"
              y1="160"
              x2="150"
              y2="140"
              stroke="gold"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="350"
              y1="160"
              x2="250"
              y2="140"
              stroke="blue"
              strokeWidth="1"
              opacity="0.3"
            />
            <Stickman x={200} y={150} pose="sit" color="purple" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="16"
              fill="purple"
              fontWeight="bold"
            >
              MULTIVERSE RULER!
            </text>
          </svg>
        );

      case "balance_light_dark":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="200" height="300" fill="#fff" />
            <rect x="200" y="0" width="200" height="300" fill="#000" />
            {/* Yin-yang inspired */}
            <circle
              cx="200"
              cy="150"
              r="50"
              fill="none"
              stroke="gray"
              strokeWidth="2"
            />
            <path
              d="M200 100 A25 25 0 0 1 200 150 A25 25 0 0 0 200 200 A50 50 0 0 1 200 100"
              fill="#000"
            />
            <path
              d="M200 100 A25 25 0 0 0 200 150 A25 25 0 0 1 200 200 A50 50 0 0 0 200 100"
              fill="#fff"
            />
            <circle cx="200" cy="125" r="5" fill="white" />
            <circle cx="200" cy="175" r="5" fill="black" />
            <text
              x="200"
              y="270"
              textAnchor="middle"
              fontSize="14"
              fill="gray"
              fontWeight="bold"
            >
              TRUE BALANCE
            </text>
          </svg>
        );

      case "universe_shatter":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#0a0a0a" />
            {/* Shattered reality fragments */}
            <polygon
              points="50,50 120,30 110,100"
              fill="#200020"
              stroke="purple"
              strokeWidth="1"
              opacity="0.5"
            />
            <polygon
              points="200,20 280,60 250,120 170,90"
              fill="#002000"
              stroke="green"
              strokeWidth="1"
              opacity="0.5"
            />
            <polygon
              points="300,40 380,80 350,140 310,100"
              fill="#200000"
              stroke="red"
              strokeWidth="1"
              opacity="0.5"
            />
            <polygon
              points="80,180 150,160 140,240 60,220"
              fill="#000020"
              stroke="blue"
              strokeWidth="1"
              opacity="0.5"
            />
            <polygon
              points="250,180 340,170 330,260 260,240"
              fill="#202000"
              stroke="gold"
              strokeWidth="1"
              opacity="0.5"
            />
            <polygon
              points="160,200 220,180 230,280 150,260"
              fill="#100010"
              stroke="cyan"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Cracks */}
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="150"
              stroke="white"
              strokeWidth="1"
              opacity="0.1"
            />
            <line
              x1="400"
              y1="0"
              x2="200"
              y2="150"
              stroke="white"
              strokeWidth="1"
              opacity="0.1"
            />
            <line
              x1="0"
              y1="300"
              x2="200"
              y2="150"
              stroke="white"
              strokeWidth="1"
              opacity="0.1"
            />
            <line
              x1="400"
              y1="300"
              x2="200"
              y2="150"
              stroke="white"
              strokeWidth="1"
              opacity="0.1"
            />
            <text
              x="200"
              y="165"
              textAnchor="middle"
              fontSize="16"
              fill="red"
              fontWeight="bold"
            >
              INFINITE CHAOS!
            </text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect x="0" y="0" width="400" height="300" fill="#1a1a2e" />
            <text x="200" y="140" textAnchor="middle" fontSize="16" fill="gray">
              {sceneId}
            </text>
            <Stickman x={200} y={200} pose="stand" color="white" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center p-2">
      {renderScene()}
    </div>
  );
};

export default StickmanAsset;

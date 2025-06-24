import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import HabitInput from './components/HabitInput';
import HabitList from './components/HabitList';
import StreakChart from './components/StreakChart';
import Suggestions from './components/Suggestions';
import ProfileModal from './components/ProfileModal';
import ReminderClock from './components/ReminderClock';
import ReminderModal from './components/ReminderModal';
import LevelDetails from './components/LevelDetails';
import HamburgerMenu from './components/HamburgerMenu';
import QuizEngine from './components/QuizEngine';
import WorkRoutine from './components/WorkRoutine';
import MoreHabitsPage from './components/MoreHabitsPage';
import MoreMenu from './components/MoreMenu';

function App() {
  const [habits, setHabits] = useState([]);
  const [modal, setModal] = useState('');
  const [user, setUser] = useState(null);
  const [reminderTime, setReminderTime] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [points, setPoints] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('habitUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toTimeString().slice(0, 5);
      reminderTime.forEach(time => {
        if (now === time) {
          alert(`⏰ Reminder for ${time}`);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [reminderTime]);

  const handleAddReminder = (time) => {
    if (!reminderTime.includes(time)) {
      setReminderTime([...reminderTime, time]);
    }
  };

  const handleAddHabit = (name) => {
    setHabits([...habits, { id: Date.now(), name, completed: false, proof: null }]);
  };

  const handleToggleComplete = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const toggleProfile = () => {
  setShowProfile(prev => !prev);
  };

  const handleAddProof = (id, file = null) => {
    const proof = file ? URL.createObjectURL(file) : prompt('Proof link/text:');
    if (!proof) return;
    setHabits(habits.map(h => (h.id === id ? { ...h, proof } : h)));
  };
  

  const handleEarnPoints = () => {
    setPoints(points + 1);
  };

  const exportHabits = () => {
    const blob = new Blob([JSON.stringify(habits, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'habits.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importHabits = (e) => {
    const reader = new FileReader();
    reader.onload = () => setHabits(JSON.parse(reader.result));
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="app-container">
      {/* Header Bar */}
      <div className="top-bar">
        {showMenu && <MoreMenu onSelect={(type) => {
  setModal(type);
  setShowMenu(false);
}} onClose={() => setShowMenu(false)} />}
  <div className="top-left">
    <img src="/icons/profile.png" alt="Profile" className="profile-icon"
    onClick={toggleProfile}style={{ width: '20px' }} />
  </div>
  <div className="top-center">
    <img src="/icons/logo.png" alt="Logo" style={{ width: '22px' }} />
    <div className="app-title">Habiti Tracker</div>
  </div>
  <div className="top-right">
  <div className="star-section">
    <span className="level-badge" onClick={() => setModal('levelDetails')}>
      ⭐
      <div className="level-name">Bronze</div>
    </span>
  </div>
  <div className="menu-section">
    <span className="menu-icon" onClick={() => setShowMenu(!showMenu)}>☰</span>
    {dropdownVisible && (
  <div className="dropdown-menu">
    <div onClick={() => { setModal('signin'); setDropdownVisible(false); }}>Signin</div>
    <div onClick={() => { setModal('login'); setDropdownVisible(false); }}>Login</div>
    <div onClick={() => { setModal('more'); setDropdownVisible(false); }}>More</div>
    <div onClick={() => { setModal('video'); setDropdownVisible(false); }}>Video</div>
    <div onClick={() => { setModal('settings'); setDropdownVisible(false); }}>Settings</div>
    <div onClick={() => { setModal('about'); setDropdownVisible(false); }}>About Us</div>
    <div onClick={() => { setModal('logout'); setDropdownVisible(false); }}>Logout</div>
  </div>
)}
  </div>

  {showProfile && (
    <div className="profile-info-modal">
      <img src="/profile.png" alt="User" className="profile-preview" />
      <p>Name: User</p>
      <p>Level: Bronze</p>
      <p>Email: user@example.com</p>
    </div>
  )}
</div>
      </div>

      {/* Reminder + Input Bar */}
      <div className="reminder-and-input-bar">
        <ReminderClock 
          onSetReminder={handleAddReminder}
          reminderTime={reminderTime}
         />
        <div className="habit-input">
          <HabitInput onAddHabit={handleAddHabit} />
        </div>
        <div className="video-section">
          {points >= 100 ? (
            <input type="file" accept="video/*" />
          ) : (
            <div className="locked-video">Unlock video upload at Conqueror level</div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <aside className="habit-list-panel">
          <HabitList
            habits={habits.slice(0, 5)}
            onToggleComplete={handleToggleComplete}
            onAddProof={handleAddProof}
          />
          {habits.length > 5 && (
            <button onClick={() => setModal('moreHabits')}>View More Habits</button>
          )}
          <div className="export-import">
            <button onClick={exportHabits}>📤 Export</button>
            <input type="file" accept=".json" onChange={importHabits} />
          </div>
        </aside>

        <div className="right-panels">
          <div className="chart-panel">
            <StreakChart habits={habits} />
          </div>
          <div className="game-panel">
            <QuizEngine onEarnPoints={handleEarnPoints} />
          </div>
          <div className="suggestion-panel">
            <Suggestions onEarnPoints={handleEarnPoints} />
          </div>
        </div>
      </div>

      {/* Work Routine Section */}
      <WorkRoutine onEarnPoints={handleEarnPoints} />

      {/* Modals */}
      {modal === 'profile' && <ProfileModal user={user} onClose={() => setModal('')} />}
      {modal === 'reminder' && <ReminderModal onClose={() => setModal('')} onSetReminder={handleAddReminder} />}
      {modal === 'levelDetails' && <LevelDetails points={points} onClose={() => setModal('')} />}
      {modal === 'moreHabits' && <MoreHabitsPage habits={habits} />}
      {modal === 'more' && <MoreMenu />}
      {modal === 'signin' && (
  <div className="modal-box">
    <h2>Sign Up</h2>
    <input type="text" placeholder="Name" />
    <input type="number" placeholder="Age" />
    <input type="tel" placeholder="Mobile" />
    <input type="email" placeholder="Email" />
    <button onClick={() => {
      alert("User ID: user123\nPassword: pass123");
      setModal('');
    }}>Submit</button>
  </div>
)}

{modal === 'login' && (
  <div className="modal-box">
    <h2>Login</h2>
    <input type="text" placeholder="User ID" />
    <input type="password" placeholder="Password" />
    <button onClick={() => {
      alert("Logged in!");
      setUser({ name: "User", level: "Bronze" });
      setModal('');
    }}>Login</button>
  </div>
)}

{modal === 'more' && (
  <div className="modal-box">
    <h2>More App Suggestions</h2>
    <ul>
      <li>🌟 Productivity Booster</li>
      <li>📚 Daily Learning</li>
      <li>💡 Focus Mode</li>
      <li>📅 Smart Planner</li>
    </ul>
  </div>
)}

{modal === 'video' && (
  <div className="modal-box">
    {points >= 100 ? (
      <>
        <h2>Upload a Motivational Video</h2>
        <input type="file" accept="video/*" />
      </>
    ) : (
      <p>Only available at Conqueror level.</p>
    )}
  </div>
)}

{modal === 'settings' && (
  <div className="modal-box">
    <h2>Settings</h2>
    <label>Theme: <select>
      <option>RCB Mode</option>
      <option>Dark Mode</option>
      <option>Sky Blue</option>
    </select></label>
  </div>
)}

{modal === 'about' && (
  <div className="modal-box">
    <h2>About Us</h2>
    <p>This app helps you build and maintain habits, track streaks, and stay motivated daily!</p>
  </div>
)}

{modal === 'logout' && (
  <div className="modal-box">
    <h2>Logout?</h2>
    <button onClick={() => {
      setUser(null);
      alert('Logged out!');
      setModal('');
    }}>Confirm Logout</button>
  </div>
)}
      {/* Add login, signup, video, about, settings, etc. modals if needed */}
    </div>
  );
}

export default App;

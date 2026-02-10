import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import './styles/app-content.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const LIMIT = 5;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch initial users using fetch API
  useEffect(() => {
    const fetchInitialUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${API_URL}?_start=0&_limit=${LIMIT}`);
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setCurrentPage(2); // Next page will be 2
        setHasMore(data.length === LIMIT);
      } catch (err) {
        setError('❌ Failed to fetch users. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialUsers();
  }, []);

  // Load more users using axios
  const loadMoreUsers = async () => {
    if (!hasMore) {
      setError('✓ All users loaded!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const start = (currentPage - 1) * LIMIT;
      const response = await axios.get(API_URL, {
        params: {
          _start: start,
          _limit: LIMIT
        }
      });

      if (response.data.length === 0) {
        setHasMore(false);
        setError('✓ All Users Loaded!');
      } else {
        setUsers(prev => [...prev, ...response.data]);
        setFilteredUsers(prev => [...prev, ...response.data]);
        setCurrentPage(prev => prev + 1);
      }
    } catch (err) {
      setError('❌ Failed to load more users. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📂 User Directory App</h1>
        <p className="subtitle">Browse and Search through Find the Users.</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search Users by Name or Email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search users"
        />
        <span className="search-count">
          {filteredUsers.length} User{filteredUsers.length !== 1 ? 's' : ''} Found
        </span>
      </div>

      {error && (
        <div className={`error-message ${error.includes('✓') ? 'success' : 'error'}`}>
          {error}
        </div>
      )}

      <UserList users={filteredUsers} loading={loading && users.length === 0} />

      {users.length > 0 && (
        <div className="load-more-section">
          {loading && <p className="loading-text">⏳ Loading More Users...</p>}
          <button
            onClick={loadMoreUsers}
            disabled={loading || !hasMore}
            className={`load-more-btn ${loading ? 'loading' : ''} ${!hasMore ? 'disabled' : ''}`}
          >
            {loading ? '⏳ Loading...' : !hasMore ? '✓ All Users Loaded' : '📥 Load More Users'}
          </button>
        </div>
      )}

      <footer className="app-footer">
        <p>Created with React • Using API fetch() & Axios</p>
      </footer>
    </div>
  );
};

export default App;

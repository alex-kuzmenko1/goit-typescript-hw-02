import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(input);
    setInput('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className={css.button} type="submit">Search</button>
      </form>
    </header>
  );
}

import type { FC } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

// Функція, що отримує FormData; якщо дані вірні – викликає onSubmit
const handleSubmit = (formData: FormData, onSubmit: (query: string) => void) => {
  const query = formData.get('query'); // отримуємо значення за ім'ям "query"
  
  if (typeof query !== 'string' || query.trim() === '') {
    toast.error('Please enter your search query.');
    return;
  }
  
  onSubmit(query);
};

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        {/* Використовуємо form action, який отримує FormData */}
        <form
          className={styles.form}
          action={(formData: FormData) => handleSubmit(formData, onSubmit)}
        >
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
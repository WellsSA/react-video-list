import { useEffect, useState } from 'react';
import styled from 'styled-components';

const VideoList = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    setVideos([
      { id: 1, title: 'Teste maluco', description: 'Description 1' },
      { id: 2, title: 'Ovelhas mecanicas', description: 'Description 2' },
    ]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilteredVideos(videos.filter((video) => video.title.toLowerCase().includes(search.toLowerCase())));
  }, [search, videos]);

  if(loading) {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }

  if(!videos.length) {
    return (
      <Container>
        <h1>Nenhum filme encontrado</h1>
      </Container>
    );
  }

  return (
    <Container>
      <nav>
        <h1>{filteredVideos.length} Filme{filteredVideos.length > 1 ? 's' : ''} encontrado{filteredVideos.length > 1 ? 's' : ''}</h1>
        <input type="search" placeholder="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)} />
      </nav>

      <ul>
        {filteredVideos.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </Container>
  );
}

export default VideoList;

const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input[type="search"] {
      width: 300px;
      height: 40px;
      border-radius: 12px;
      border: 1px solid var(--text-secondary);
      color: var(--text-primary);
      padding: 24px 16px;

      &::placeholder {
        color: var(--text-secondary);
      }

      &:focus {
        border-color: var(--primary);
      }
    }
  }

  > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    gap: 16px;
    padding: 0;

    li {
      background-color: var(--background-500);
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      width: 300px;
      height: 400px;

      transition: all 0.3s ease;

      &:hover {
        scale: 1.05;
      }
    }
  }
`;

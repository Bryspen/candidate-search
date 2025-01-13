import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const getCandidates = async () => {
    try {
      const data = await searchGithub();
      const candidates = data.map((candidate: Candidate) => ({
        id: candidate.id,
        name: candidate.login,
        username: candidate.login,
        location: candidate.location || 'N/A',
        avatar_url: candidate.avatar_url,
        email: candidate.email || 'N/A',
        html_url: candidate.html_url,
        company: candidate.company || 'N/A',
        bio: candidate.bio || 'N/A',
      }));
      setCandidates(candidates);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const saveCandidate = () => {
    setSavedCandidates([...savedCandidates, candidates[currentIndex]]);
    showNextCandidate();
  };

  const showNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-1); // No more candidates
    }
  };

  if (currentIndex === -1 || candidates.length === 0) {
    return <div>No more candidates available</div>;
  }

  const currentCandidate = candidates[currentIndex];

  return (
      <div>
        <h1>Candidate Search</h1>
        <section>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.name} />
          <h2>{currentCandidate.name}</h2>
          <p>{currentCandidate.location}</p>
          <p>{currentCandidate.email}</p>
          <p>{currentCandidate.company}</p>
          <p>{currentCandidate.bio}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </section>
        <button onClick={saveCandidate}>+</button>
        <button onClick={showNextCandidate}>-</button>
      </div>
  );
};

export default CandidateSearch;
import React, { useState } from 'react';
import './App.css';

// Import images from the src folder
import jan1 from './images/jan1.jpg';
import jan2 from './images/jan2.jpg';
import jan3 from './images/jan3.jpg';
import feb1 from './images/feb1.jpg';
import feb2 from './images/feb2.jpg';
import mar1 from './images/mar1.jpg';
import mar2 from './images/mar2.jpg';
import mar3 from './images/mar3.jpg';
import mar4 from './images/mar4.jpg';
import apr1 from './images/apr1.jpg';
import apr2 from './images/apr2.jpg';
import apr3 from './images/apr3.jpg';
import apr4 from './images/apr4.jpg';
import jul1 from './images/jul1.jpg';
import jul2 from './images/jul2.jpg';
import jul3 from './images/jul3.jpg';
import aug1 from './images/aug1.jpg';
import aug2 from './images/aug2.jpg';
import oct1 from './images/oct1.jpg';
import oct2 from './images/oct2.jpg';

const months = [
  'January', 'February', 'March', 'April',
  'July', 'August', 'October',
];

const monthImages = {
  January: [jan1, jan2, jan3],
  February: [feb1, feb2],
  March: [mar1, mar2, mar3, mar4],
  April: [apr1, apr2, apr3, apr4],
  July: [jul1, jul2, jul3],
  August: [aug1, aug2],
  October: [oct1, oct2]
};

const timelineEvents = [
  {
    date: 'September 7, 2024',
    title: '"Aur kya scenes day"',
    description: 'A very random message that came from you, and I will be forever thankful to you for it.'
  },
  {
    date: 'October 3, 2024',
    title: 'Garba nightt!!!',
    description: "The ultimate kuch kuch hone laga moment. I fell for you omgggg"
  },
  {
    date: 'October 31, 2024',
    title: 'Diwali',
    description: 'A festival of lights, joy, and togetherness. And I found my soulmate. We talked, we spent the night together and then I realised I loved you.'
  },
  {
    date: 'November 28, 2024',
    title: 'Confession day',
    description: 'A day filled with emotions, where we finally confessed our feelings for each other. I will never forget that moment when you held me in your arms and said "I love you".'
  },
  {
    date: 'Then onnnnn',
    title: 'Living a beautiful life with you',
    description: 'Every day with you is a new adventure, a new chapter in our love story. We fight, we cry, we laugh, we make up. This is what true love is and yes I have found my true love in you. I cherish every moment we spend together and I look forward to many more. I love yoouuuu!!! '
  },


];

function App() {
  
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel state for wishes
  const wishes = [
    "Happy Birthday! Wishing you a fantastic year ahead.",
    "May all your dreams come true. Enjoy your special day!",
    "Cheers to another year of happiness and success!",
    "Hope your birthday is as wonderful as you are!",
    "Sending you smiles for every moment of your special day!"
  ];
  const [wishIndex, setWishIndex] = useState(0);

  const handlePrevWish = () => {
    setWishIndex((prev) => (prev === 0 ? wishes.length - 1 : prev - 1));
  };

  const handleNextWish = () => {
    setWishIndex((prev) => (prev === wishes.length - 1 ? 0 : prev + 1));
  };

  // Image gallery navigation
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? monthImages[selectedMonth].length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === monthImages[selectedMonth].length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (month) => {
    setSelectedMonth(month);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedMonth(null);
    setCurrentImageIndex(0);
  };

  // Scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="navbar-logo">Special birthday wish for someone special</div>
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('album')}>Gallery</li>
          <li onClick={() => scrollToSection('timeline')}>Timeline</li>
        </ul>
      </nav> */}

      {/* Home Section */}
      <section className="home-section" id="home">
        <div className="background-overlay">
          {/* Enhanced Confetti Animation */}
          {[...Array(25)].map((_, i) => (
            <div key={`confetti-${i}`} className="confetti"></div>
          ))}
          
          {/* Balloon Animation */}
          {[...Array(8)].map((_, i) => (
            <div key={`balloon-${i}`} className="balloon"></div>
          ))}
          
          {/* Star Animation */}
          {[...Array(20)].map((_, i) => (
            <div key={`star-${i}`} className="birthday-star"></div>
          ))}
          
          {/* Falling Stars Animation */}
          {[...Array(15)].map((_, i) => (
            <div key={`falling-star-${i}`} className="falling-star"></div>
          ))}
          
          {/* Fixed Twinkling Stars */}
          {[...Array(35)].map((_, i) => (
            <div key={`fixed-star-${i}`} className="fixed-star"></div>
          ))}

          {/* New Birthday Elements */}
          {[...Array(6)].map((_, i) => (
            <div key={`party-${i}`} className="party-element"></div>
          ))}

          {/* Floating Birthday Cakes */}
          {[...Array(4)].map((_, i) => (
            <div key={`cake-${i}`} className="floating-cake">🎂</div>
          ))}

          {/* Party Streamers */}
          <div className="streamer streamer-1"></div>
          <div className="streamer streamer-2"></div>
          <div className="streamer streamer-3"></div>
        </div>

        <div className="hero-content">
          {/* <div className="birthday-badge">🎉 BIRTHDAY CELEBRATION 🎉</div> */}
          
          <div className="main-title-container">
            <h1 className="main-title">
              <span className="title-line-1">Happy Birthday</span>
              <span className="title-line-2">Aryannnnnnn!</span>
            </h1>
            <div className="title-sparkle">✨</div>
          </div>

          <div className="celebration-message">
            <p className="message-text">
              Wishing you a day filled with love, laughter, and unforgettable memories! 
              May this special day bring you endless joy, wonderful surprises, and all the 
              happiness your heart can hold. Here's to another amazing year of adventures, 
              dreams coming true, and beautiful moments that will last a lifetime! 
            </p>
          </div>

          <div className="cta-buttons">
            <button 
              className="cta-btn primary-btn"
              onClick={() => scrollToSection('album')}
            >
              🎁 View Our Memories
            </button>
            <button 
              className="cta-btn secondary-btn"
              onClick={() => scrollToSection('timeline')}
            >
              💝 Our Journey
            </button>
          </div>

          <div className="birthday-stats">
            <div className="stat-item">
              <span className="stat-number">365</span>
              <span className="stat-label">Days of Joy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Memories Made</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Special Person</span>
            </div>
          </div>
        </div>

        {/* Floating Birthday Wishes */}
        {/* <div className="floating-wishes">
          <div className="wish-bubble wish-1">🎈 Many Happy Returns!</div>
          <div className="wish-bubble wish-2">🎊 Best Wishes!</div>
          <div className="wish-bubble wish-3">🎉 Celebrate!</div>
        </div> */}
      </section>

      {/* Album Section */}
      <section className="album-section" id="album">
        <h2>OUR BEAUTIFUL MEMORIES</h2>
        <div className="months-grid">
          {months.map((month) => (
            <div
              key={month}
              className="month-box"
              style={{
                backgroundImage: `url(${monthImages[month][0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                cursor: 'pointer'
              }}
              onClick={() => openModal(month)}
            >
              {month}
            </div>
          ))}
        </div>
        
        {/* Updated Modal with Image Navigation */}
        {selectedMonth && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>{selectedMonth} Photos</h3>
              <div className="image-viewer">
                <button 
                  className="nav-btn prev-btn" 
                  onClick={handlePrevImage}
                  disabled={monthImages[selectedMonth].length <= 1}
                >
                  &#8592;
                </button>
                <div className="image-container">
                  <img 
                    src={monthImages[selectedMonth][currentImageIndex]} 
                    alt={`${selectedMonth} ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                </div>
                <button 
                  className="nav-btn next-btn" 
                  onClick={handleNextImage}
                  disabled={monthImages[selectedMonth].length <= 1}
                >
                  &#8594;
                </button>
              </div>
              <div className="image-counter">
                {currentImageIndex + 1} / {monthImages[selectedMonth].length}
              </div>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </section>

<section className="timeline-section" id="timeline">
        <div className="timeline-container">
          <h2 className="timeline-title">Our Journey Together</h2>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-date">{event.date}</div>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <div className="timeline-card-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* More Wishes Section with Carousel */}

      {/* Footer */}
      <footer className="site-footer">
          <div className="footer-content">
            <p className="footer-message">Can we always be this close, forever and ever?</p>
            <p className="footer-cta-text">A little more magic, please!</p>
            <a
              href="https://ewishwell.com/w/birthday-wish-for-aryan-aryan-897909"
              className="footer-cta-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Click Here
            </a>

            <p className="footer-credit">
              Made with ❤️ for Aryannnnn
            </p>
          </div>
        </footer>
    </div>
  );
}

export default App;
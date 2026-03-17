const navLinks = [
  ['about', 'About'],
  ['rooms', 'Rooms'],
  ['amenities', 'Amenities'],
  ['gallery', 'Gallery'],
  ['reviews', 'Reviews'],
  ['location', 'Location'],
  ['contact', 'Contact'],
];

const roomCards = [
  {
    title: 'Deluxe King Room',
    price: '$95 / night',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    text: 'Elegant interiors, premium bedding, and a city-view balcony for a refined stay.',
  },
  {
    title: 'Executive Twin Suite',
    price: '$120 / night',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    text: 'Spacious business-ready suite with dedicated workspace and lounge seating.',
  },
  {
    title: 'Family Comfort Suite',
    price: '$145 / night',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    text: 'Thoughtfully designed for families with added comfort and kid-friendly amenities.',
  },
];

const amenities = [
  'Free Wi-Fi',
  'Free Breakfast',
  'Free Parking',
  'Swimming Pool',
  'Air Conditioning',
  'Laundry Service',
  'Business Center',
  'Room Service',
  'Kid-friendly',
  'Restaurant',
  'Airport Shuttle',
  'Hot Tub',
  'Bar',
  'Smoke-free Hotel',
  'Accessible Facilities',
];

const amenityIcons = ['📶', '🥐', '🅿️', '🏊', '❄️', '🧺', '💼', '🛎️', '🧸', '🍽️', '✈️', '♨️', '🍸', '🚭', '♿'];

const galleryImages = [
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
];

const reviews = [
  {
    name: 'Amina K.',
    text: 'Outstanding hospitality and spotless rooms. The breakfast and service quality felt truly international.',
  },
  {
    name: 'David M.',
    text: 'Perfect location in Tashkent with modern facilities. The staff arranged airport transfer seamlessly.',
  },
  {
    name: 'Dilshod R.',
    text: 'Great value for a premium hotel experience. Quiet nights, excellent Wi-Fi, and friendly team.',
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <a href="#home" className="brand">Tashrif Hotel</a>
        <nav>
          {navLinks.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay" />
      <img className="hero-image" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=80" alt="Luxury hotel exterior" />
      <div className="hero-content container">
        <p className="eyebrow">Chilonzor District, Tashkent</p>
        <h1>Tashrif Hotel Tashkent</h1>
        <p>Experience Comfort and Luxury in the Heart of Tashkent.</p>
        <a className="btn" href="#contact">Book Your Stay</a>
      </div>
    </section>
  );
}

const App = () => (
  <>
    <Header />
    <Hero />
    <main>
      <section id="about" className="section container">
        <h2>About the Hotel</h2>
        <p>
          Located at Chko&apos;chasi 28a, Tashrif Hotel Tashkent offers a refined escape in the vibrant Chilonzor District.
          Guests enjoy quick access to business hubs, shopping avenues, and cultural attractions while experiencing warm,
          professional service and elegant modern interiors.
        </p>
        <div className="info-grid">
          <div><strong>Google Rating:</strong> 4.5 (156 reviews)</div>
          <div><strong>Check-in:</strong> 12:00 PM</div>
          <div><strong>Check-out:</strong> 11:00 AM</div>
          <div><strong>Phone:</strong> +998 99 215 05 05</div>
        </div>
      </section>

      <section id="rooms" className="section dark-section">
        <div className="container">
          <h2>Luxury Rooms & Suites</h2>
          <div className="rooms-grid">
            {roomCards.map((room) => (
              <article key={room.title} className="card">
                <img src={room.image} alt={room.title} />
                <div className="card-body">
                  <h3>{room.title}</h3>
                  <p>{room.text}</p>
                  <div className="card-footer">
                    <span>{room.price}</span>
                    <button>Book Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="section container">
        <h2>World-Class Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((item, i) => (
            <div key={item} className="amenity">
              <span>{amenityIcons[i]}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((img) => (
              <img key={img} src={img} alt="Tashrif hotel gallery" />
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section container">
        <h2>Guest Reviews</h2>
        <p className="rating">★ 4.5 Google Rating (156 reviews)</p>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <blockquote className="review" key={review.name}>
              <p>“{review.text}”</p>
              <cite>— {review.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="location" className="section dark-section">
        <div className="container location-layout">
          <div>
            <h2>Location</h2>
            <p>
              <strong>Tashrif Hotel Tashkent</strong><br />
              Chko&apos;chasi 28a, 100097, Tashkent, Uzbekistan
            </p>
          </div>
          <iframe
            title="Tashrif Hotel Map"
            src="https://www.google.com/maps?q=Chko'chasi+28a,+Tashkent,+Uzbekistan&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="contact" className="section container">
        <h2>Contact & Reservations</h2>
        <div className="contact-layout">
          <div>
            <p><strong>Phone:</strong> +998 99 215 05 05</p>
            <p><strong>Address:</strong> Chko&apos;chasi 28a, 100097, Tashkent, Uzbekistan</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="How can we help you?" rows="4" required></textarea>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Tashrif Hotel Tashkent</h3>
          <p>Luxury hospitality crafted for global travelers in Uzbekistan.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+998 99 215 05 05</p>
          <p>Chko&apos;chasi 28a, Tashkent</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Instagram · Facebook · X</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Tashrif Hotel Tashkent. All rights reserved.</p>
    </footer>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

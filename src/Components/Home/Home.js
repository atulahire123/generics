import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      

      <main>
       

        <section className="tours">
          <h2>TOURS</h2>
          <div className="tour-dates">
            <div className="tour-date">
              <p>JUL 16</p>
              <p>DETROIT, MI</p>
              <p>DTE ENERGY MUSIC THEATRE</p>
              <button>BUY TICKETS</button>
            </div>
            <div className="tour-date">
              <p>JUL 19</p>
              <p>TORONTO, ON</p>
              <p>BUDWEISER STAGE</p>
              <button>BUY TICKETS</button>
            </div>
            <div className="tour-date">
              <p>JUL 22</p>
              <p>BRISTOW, VA</p>
              <p>JIGGY LUBE LIVE</p>
              <button>BUY TICKETS</button>
            </div>
            {/* Add more tour dates as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

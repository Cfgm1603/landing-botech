import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImageDashboard } from "./components/ImageDashboard";
import { Footer } from "./components/Footer";
import CardSwap, { Card } from './components/CardSwap'



export default function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, #ffffff, rgba(var(--color-primary-botech-rgb), 0.05), rgba(var(--color-primary-botech-rgb), 0.15))`
      }}
    >
      <Navbar />
      <Hero />
      <ImageDashboard />
      <div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>
      <Footer />
    </div>
  );
}

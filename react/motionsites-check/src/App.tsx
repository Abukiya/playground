import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_131516_eca35265-ea66-4fbd-8d52-22aae6e1a503.mp4"
          type="video/mp4"
        />
      </video>

      <Navbar />
      <HeroContent />
    </main>
  );
}

export default App;

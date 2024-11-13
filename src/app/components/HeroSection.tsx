import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="outer_section">
      <div className='info_section'>
         <h1> Muhammad Arsalan </h1>
         <p>My name is Muhammad Arsalan a professional </p>
          <p>Next js Developer and an industry expert </p>
      </div>
      <div className="button_section">
         <button>Let&apos;s get started</button>
      </div>
      </div>
      <div className='img'>
      <Image
      src="/profile.jpeg"
      width={350}
      height={350}
      alt="Error!"
    />
      </div>
    </div>
  )
}

export default HeroSection
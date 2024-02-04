import logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
      <nav className="flex justify-between
      items-center flex-row mt-2 w-[90%]">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />



        <button 
          type="button"
          onClick={() => window.open('https://github.com/Aakash1312-cmd')}
          className="black_btn mt-2" >
         GitHub
        </button>

      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
      Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>

    </header>
  )
}

export default Hero
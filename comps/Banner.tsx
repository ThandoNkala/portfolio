import Image from "next/image";

export default function Banner() {
    return (
        <div id="Home" className="container mx-auto px-4 md:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
          <div className="text-white w-full md:w-1/2">
            <p className="mt-1 text-lg md:text-xl">Hello!</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              I'm <span className="text-blue-500">Thando <span className="hidden sm:inline"><br /></span>Nkala</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl">Full Stack Developer</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded border border-blue-500 hover:bg-black hover:text-blue-500 transition-colors">
                Hire Me
              </button>
              <button type="button" className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
                View My Work
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-blue-500/20 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <Image
                  src="/me.png"
                  alt="My image"
                  width={490}
                  height={480}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
    );
}
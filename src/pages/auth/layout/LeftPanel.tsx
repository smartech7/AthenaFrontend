export default function LeftPanel() {
  return (
    <div className="relative h-full pb-5 overflow-hidden bg-black">
      <div className="container w-full h-full p-0">
        <img
          src="/images/login_bg.png"
          className="bg-cover"
          width="100%"
          height="100%"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-20 flex flex-col-reverse items-center flex-1 w-full gap-4 px-10 bg-transparent h-1/2">
        <div className="flex items-center justify-center gap-4 mt-5 mb-16 ">
          <a className="text-white" href="#">Help Center</a>
          <a className="text-white" href="#">Community Guidelines</a>
          <a className="text-white" href="#">Privacy Policy</a>
          <a className="text-white" href="#">Work with us</a>
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <img src="/images/app_store.svg" className="ls:width-[180px] ls:height-[64px] width-[120px] ls:height-[42px]" />
          <img src="/images/google_play.svg" className="ls:width-[180px] ls:height-[64px] width-[120px] ls:height-[42px]" />
        </div>
        <div className="px-5 text-center bg-transparent 2xl:px-20 2xl:container">
          <h2 className="text-white text-[22px] mt-5 ls:text-[30px] font-semibold">
            Join the Global Community
          </h2>
          <p className="text-white text-[19px] mt-5 ls:text-[22px]">
            Connect, Share and Discover. Explore Boundless Possibilities with
            Donamix — The Ultimate Social Network Experience
          </p>
        </div>
        <img
          src="/images/donamix_logo.png"
          width="70%"
          height={67}
          style={{
            maxWidth: 400
          }}
        />
      </div>
    </div>
  );
}

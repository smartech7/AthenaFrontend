export default function LeftPanel() {
  return (
    <div className="relative flex flex-col h-full pb-5 overflow-hidden bg-black">
      <div className="w-full bg-[url(/images/login_bg.png)] bg-cover h-full bg-center flex-1"></div>
      <div className="flex flex-col items-center flex-1 w-full h-full gap-4 px-10">
        <img src="/images/donamix_text.svg" width={400} height={67} />
        <div className="container text-center 2xl:px-28 xl:px-20 lg:px-16">
          <h2 className="text-white text-[30px] font-semibold">
            Join the Global Community
          </h2>
          <p className="text-white text-[22px] mt-5">
            Connect, Share and Discover. Explore Boundless Possibilities with
            Donamix — The Ultimate Social Network Experience
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-5 mb-10">
          <img src="/images/app_store.svg" width={180} height={64} />
          <img src="/images/google_play.svg" width={180} height={64} />
        </div>
      </div>
    </div>
  );
}
